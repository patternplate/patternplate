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

async function startCompilerWorker() {
  const {cwd, target} = flags;
  const compiler = await createCompiler({cwd, target});
  const fs = compiler.outputFileSystem;

  let beat = Date.now();
  let failures = 0;

  setInterval(() => {
    const age = Date.now() - beat;
    if (age >= 1000) {
      failures++;
      debug(`worker: ${target} beat is ${age}ms old, failure ${failures}/3.`);
    } else if (failures !== 0) {
      debug(`worker: ${target} beat limit met, reset failure to 0/3.`);
      failures = 0;
    }
    if (failures >= 3) {
      console.log(`worker: ${target} beat failed ${failures} times, shutting down.`);
      process.exit(0);
    }
  }, 1000);

  compiler.plugin("compile", () => {
    send({type: "start", target, payload: {}});
  });

  compiler.plugin("done", (stats) => {
    if (stats.compilation.errors && stats.compilation.errors.length > 0) {
      stats.compilation.errors.forEach(err => {
        return send({type: "error", target, payload: err});
      });
      return send({type: "error", target, payload: stats.compilation.errors});
    }
    send({type: "done", target, payload: fs.data});
  });

  compiler.plugin("failed", err => {
    send({type: "error", target, payload: err});
  });

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
