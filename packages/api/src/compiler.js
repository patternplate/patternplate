// const path = require("path");
// const compiler = require("@patternplate/compiler");
const ARSON = require("arson");
const {fork} = require("child_process");
const dargs = require("dargs");
const Observable = require("zen-observable");
const MemoryFilesystem = require("memory-fs");

module.exports = createCompiler;

const debug = require("util").debuglog("PATTERNPLATE");

const WORKER = require.resolve("./compiler-worker");
const OPTS = { stdio: ["inherit", "inherit", "inherit", "ipc"] };

async function createCompiler({ cwd, target = "" }) {
  const worker = fork(WORKER, dargs({cwd, target}), OPTS);

  let watching = false;

  const queue = [];
  let listeners = [];
  const next = (message) => listeners.forEach(listener => listener.next(message));

  worker.on("message", envelope => {
    const {type, target, payload} = ARSON.parse(envelope);

    switch (type) {
      case "ready": {
        return worker.send(ARSON.stringify({type: "start"}));
      }
      case "done": {
        debug({type, target});
        const fs = new MemoryFilesystem(payload);
        queue.unshift({type, target, payload: {fs}});
        return next(queue);
      }
      case "start": {
        debug({type, target});
        queue.unshift({type, target, payload});
        return next(queue);
      }
      case "error": {
        if (Array.isArray(payload)) {
          return payload.forEach(p => console.error(p.message))
        }
        console.error(payload.message);
      }
    }
  });

  const observable = new Observable(observer => {
    if (!watching) {
      watching = true;
      worker.send(ARSON.stringify({type: "watch"}));
    }

    listeners.push(observer);
    return () => {
      listeners = listeners.filter(listener => listener !== observer);
    }
  });

  observable.queue = queue;
  observable.stop = () => {
    worker.send(ARSON.stringify({type: "stop"}));
  }
  return observable;
}
