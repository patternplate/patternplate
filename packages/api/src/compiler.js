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

const OPTS = { stdio: ["inherit", "inherit", "inherit", "ipc"] };

module.exports = createCompiler;

async function createCompiler({ cwd, target = "" }) {
  const workerPath = path.join(__dirname, "compiler-worker.js");
  debug(`starting compiler worker at ${workerPath}`);

  const worker = fork(workerPath, dargs({cwd, target}), OPTS);
  const send = worker.send ? payload => worker.send(ARSON.stringify(payload)) : () => {};

  let watching = false;

  const queue = [];
  let listeners = [];
  const next = (message) => listeners.forEach(listener => listener.next(message));

  worker.on("error", err => {
    console.error(err);
  });

  worker.on("message", envelope => {
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
