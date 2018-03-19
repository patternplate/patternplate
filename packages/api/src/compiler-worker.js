const ARSON = require("arson");
const yargsParser = require("yargs-parser");
const flags = yargsParser(process.argv.slice(2));
const createCompiler = require("@patternplate/compiler");
const debug = require("util").debuglog("PATTERNPLATE");

const send = m => process.send(ARSON.stringify(m));

(async () => {
  const {cwd, target} = flags;
  const compiler = await createCompiler({cwd, target});
  const fs = compiler.outputFileSystem;

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
})();
