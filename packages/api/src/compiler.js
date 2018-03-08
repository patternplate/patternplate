const path = require("path");
const compiler = require("@patternplate/compiler");
const Observable = require("zen-observable");

module.exports = createCompiler;

const debug = require("util").debuglog("PATTERNPLATE");

async function createCompiler({ cwd, target = "" }) {
  const c = await compiler({cwd, target});
  const fs = c.outputFileSystem;

  const queue = [];
  let listeners = [];
  const next = (message) => listeners.forEach(listener => listener.next(message));

  c.plugin("compile", () => {
    debug("compile", target);
    queue.unshift({type: 'start', target, payload: {}});
    next(queue);
  });

  c.plugin("done", (stats) => {
    if (stats.compilation.errors && stats.compilation.errors.length > 0) {
      stats.compilation.errors.forEach(err => {
        debug("error", {err, target});
      });

      queue.unshift({type: 'error', target, payload: stats.compilation.errors});
      return next(queue);
    }
    debug("done", target);
    queue.unshift({type: 'done', target, payload: {fs}});
    next(queue);
  });

  c.plugin("failed", err => {
    debug("failed", target);
    queue.unshift({type: 'error', target, payload: err});
    next(queue);
  });

  let watching = false;

  const observable = new Observable(observer => {
    if (!watching) {
      watching = true;
      c.watch({ignored: "**/pattern.json"}, () => {});
    }

    listeners.push(observer);
    return () => {
      listeners = listeners.filter(listener => listener !== observer);
    }
  });

  observable.compiler = c;
  observable.queue = queue;

  return observable;
}
