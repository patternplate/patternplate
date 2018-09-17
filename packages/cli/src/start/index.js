const Path = require("path");
const ora = require("ora");
const debug = require("util").debuglog("PATTERNPLATE");
const importFresh = require("import-fresh");
const readline = require("readline");
const { loadConfig } = require("@patternplate/load-config");

module.exports = start;

async function start({flags}) {
  const spinner = ora({ text: "Starting patternplate server" }).start();

  let beat = Date.now();
  let failures = 0;

  if (process.connected) {
    setInterval(() => {
      const age = Date.now() - beat;
      if (age >= 1000) {
        failures++;
        debug(`start: beat is ${age}ms old, failure ${failures}/3.`);
      } else if (failures !== 0) {
        debug(`start: beat limit met, reset failure to 0/3.`);
        failures = 0;
      }
      if (failures >= 3) {
        console.log(`start: beat failed ${failures} times, shutting down.`);
        process.exit(0);
      }
    }, 1000);
  }

  process.on("message", (envelope) => {
    try {
      const message = JSON.parse(envelope);
      if (message.type === "heartbeat") {
        beat = Date.now();
      }
    } catch (err) {
      console.error(err);
    }
  });

  const cwd = flags.cwd || process.cwd();
  const port = selectPort(flags);

  try {
    let app = await startPatternplate({
      cwd,
      port,
      spinner,
      server: flags.server
    });

    const rl = readline.createInterface({
      input: process.stdin,
      terminal: false
    });

    let rlcount = 0;

    const restart = async () => {
      Object.keys(require.cache).forEach(id => { delete require.cache[id] });
      readline.moveCursor(process.stdin, 0, -1);
      readline.clearLine(process.stdin);

      spinner.text = spinner.text.replace('Started', 'Reloading patternplate');
      spinner.start();
      app.unsubscribe();

      ++rlcount;

      app = await startPatternplate({
        cwd,
        port,
        spinner,
        count: rlcount,
        reloading: app,
        server: flags.server
      });
    };

    rl.on("line", async line => {
      if (line.endsWith("rs")) {
        readline.moveCursor(process.stdin, 0, -1);
        readline.clearLine(process.stdin);
        await restart();
      }
    });

    if (flags.hot) {
      const chokidar = require("chokidar");

      const watcher = chokidar.watch([...getModules()], {
        ignoreInitial: true,
        ignorePermissionErrors: true,
      });

      watcher.on("all", async (_, path) => {
        await restart();
        watcher.add([...getModules()]);
      });
    }
  } catch (err) {
    switch (err.code) {
      case "EADDRINUSE":
        spinner.text = `Starting patternplate server failed`;
        spinner.fail();
        err.message = `Server could not be started, free the port: ${err.message}`;
        err.patternplate = true;
        throw err;
      default:
        throw err;
    }
  }
}

function selectPort(flags) {
  if (!isNaN(Number(flags.port))) {
    return Number(flags.port);
  }

  if (!isNaN(Number(process.env.PORT))) {
    return (process.env.PORT);
  }

  return 1337;
}

async function startPatternplate(context) {
  const {port, cwd, spinner, server} = context;
  const count = context.count > 0 ?  `(${context.count})` : '';

  const patternplate = importFresh("./serve");

  const verb = context.reloading ? `reload` : `start`;
  const doneVerb = context.reloading ? `Reloaded` : `Started`;

  const result = await loadConfig({ cwd: context.cwd });
  const { config = {}, filepath } = result;
  const base = filepath ? Path.dirname(filepath) : context.cwd;

  const app = await patternplate({
    port,
    server,
    config,
    cwd: base
  });

  spinner.text = `${doneVerb} on http://localhost:${app.port} ${count}`;

  spinner.succeed();

  app.subscribe(message => {
    if (message.type === "exception") {
      spinner.text = `Could not ${verb} patternplate on http://localhost:${app.port} ${count}`;
      spinner.fail();
      console.error(message.payload.stderr);
      process.exit(1);
    }

    if (message.type === "error" && message.payload && typeof message.payload.message === "string") {
      spinner.text = message.payload.message;
      spinner.fail();
    }
  });

  return app;
}

function getModules(mod = module, mods = new Set()) {
  if (mods.has(mod.filename)) {
    return mods;
  }

  mods.add(mod.filename);
  mod.children.forEach(child => getModules(child, mods));
  return mods;
}
