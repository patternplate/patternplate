const ARSON = require("arson");
const yargsParser = require("yargs-parser");
const flags = yargsParser(process.argv.slice(2));
const createCompiler = require("@patternplate/compiler");
const debug = require("util").debuglog("PATTERNPLATE");

const send = typeof process.send === "function" && process.connected
  ? m => process.send(ARSON.stringify(m))
  : () => {};

startCompilerWorker()
  .catch(err => {
    setTimeout(() => {
      throw err;
    })
  });

const FAILURE_COUNT = 5;

async function startCompilerWorker() {
  const {cwd, target} = flags;
  const config = ARSON.parse(flags.config);

  const compiler = await createCompiler({config, cwd, target});
  const fs = compiler.outputFileSystem;

  let beat = Date.now();
  let failures = 0;

  setInterval(() => {
    const age = Date.now() - beat;
    if (age >= 2000) {
      failures++;
      debug(`worker: ${target} beat is ${age}ms old, failure ${failures}/${FAILURE_COUNT}.`);
    } else if (failures !== 0) {
      debug(`worker: ${target} beat limit met, reset failure to 0/${FAILURE_COUNT}.`);
      failures = 0;
    }
    if (failures >= FAILURE_COUNT) {
      send({
        type: "shutdown", target
      });
      process.exit(0);
    }
  }, 1000);

  compiler.hooks.invalid.tap(`patternplate-${target}-worker`, () => {
    send({type: "invalid", target, payload: {}});
  });

  compiler.hooks.compile.tap(`patternplate-${target}-worker`, () => {
    send({type: "start", target, payload: {}});
  });

  compiler.hooks.done.tap(`patternplate-${target}-worker`, (stats) => {
    send({type: "stats", target, payload: stats.toJson() });

    if (stats.compilation.errors && stats.compilation.errors.length > 0) {
      stats.compilation.errors.forEach(err => {
        return send({type: "error", target, payload: err});
      });
      return send({type: "error", target, payload: stats.compilation.errors});
    }
    send({type: "done", target, payload: fs.data});
  });

  compiler.hooks.failed.tap(`patternplate-${target}-worker`, err => {
    send({type: "error", target, payload: err});
  });

  const writeFile = fs.writeFile.bind(fs);

  fs.writeFile = (...args) => {
    send({type: "file", target, payload: args});
    writeFile(...args);
  }

  process.on("message", async envelope => {
    const message = ARSON.parse(envelope);

    switch (message.type) {
      case "heartbeat": {
        beat = Date.now();
        return;
      }
      case "start": {
        debug(`worker: start ${target}`);
        return compiler.watch({ignored: "**/pattern.json"}, () => {});
      }
      case "stop": {
        debug(`worker: stop ${target}`);
        process.exit(0);
      }
    }
  });

  send({type: "ready"});
}
