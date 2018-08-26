const os = require("os");
const fs = require("fs");
const path = require("path");
const ARSON = require("arson");
const {fork} = require("child_process");
const dargs = require("dargs");
const Observable = require("zen-observable");
const MemoryFilesystem = require("memory-fs");
const crypto = require("crypto");
const debug = require("util").debuglog("PATTERNPLATE");
const resolvePkg = require("resolve-pkg");

const OPTS = { stdio: ["pipe", "pipe", "pipe", "ipc"] };

module.exports.createCompiler = async function createCompiler({ config, cwd, target = "", fs }) {
  let worker;

  const send = payload => {
    if (!worker || !worker.send || !worker.connected) {
      return;
    }
    worker.send(ARSON.stringify(payload));
  }

  let watching = false;

  const queue = [];
  let listeners = [];

  const next = (message) => listeners.forEach(listener => listener.next(message));

  const start = () => {
    const workerPath = path.join(__dirname, "compiler-worker.js");
    debug(`starting compiler worker at ${workerPath}`);
    const cp = fork(workerPath, dargs({cwd, target, config: ARSON.stringify(config)}), OPTS);

    let stderr = ``;
    let stdout = ``;

    cp.stdout.on("data", data => {
      stdout += String(data);
      debug(`stdout ${workerPath}: ${data}`);
    });

    cp.stderr.on("data", data => {
      stderr += String(data);
      debug(`stderr ${workerPath}: ${data}`);
    });

    cp.once("close", (code) => {
      if (code !== 0) {
        queue.unshift({type: "exception", payload: {
          code,
          stdout,
          stderr: [`Could not start compiler worker for "${target}"`, stderr].join("\n")
        }});
        next(queue);
      }
    });

    return cp;
  };

  worker = start();

  setInterval(() => send({type: "heartbeat"}), 500);

  const onMessage = envelope => {
      const {type, target, payload} = ARSON.parse(envelope);

      switch (type) {
        case "ready": {
          return send({type: "start"});
        }
        case "done": {
          debug({type, target});
          const fs = new MemoryFilesystem(payload);
          queue.unshift({type, target, payload: {fs}});
          return next(queue);
        }
        case "invalid":
        case "start":
        case "stats": {
          debug({type, target});
          queue.unshift({type, target, payload});
          return next(queue);
        }
        case "file": {
          debug({type, target});
          fs.writeFileSync(payload[0], payload[1]);
          return;
        }
        case "error": {
          if (Array.isArray(payload)) {
            return payload.forEach(p => console.error(p.message))
          }
          return console.error(payload.message);
        }
        case "shutdown": {
          debug({type, target});
          send({type: "stop"});

          worker = start();

          worker.on("message", onMessage);

          if (watching) {
            send({type: "watch"});
          }
        }
    }
  };

  worker.on("message", onMessage);

  const observable = new Observable(observer => {
    if (!watching) {
      watching = true;
      send({type: "watch"});
    }

    listeners.push(observer);
    return () => {
      listeners = listeners.filter(listener => listener !== observer);
    }
  });

  observable.queue = queue;
  observable.stop = () => {
    send({type: "stop"});
  }
  return observable;
}
