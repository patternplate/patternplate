const express = require("express");
const createCompiler = require("./compiler");
const demo = require("./demo");
const pack = require("./pack");
const main = require("./main");

module.exports = api;

async function api({ cwd }) {
  const compiler = await createCompiler({ cwd });

  const context = {
    running: defer(),
    error: defer(),
    fs: compiler.fs
  };

  compiler.plugin("watch-run", (_, cb) => {
    context.running = defer();
    context.error = defer();
    cb();
  });

  compiler.plugin("done", stats => {
    const info = stats.toJson();

    if (info.errors.length > 0) {
      console.error(info.errors);
    }

    if (info.warnings.length > 0) {
      console.warn(info.warnings);
    }

    context.running.resolve(stats);
    context.error.resolve(null);
  });

  compiler.plugin("failed", error => {
    context.running.resolve(null);
    context.running.resolve(error);
  });

  return express()
    .get("/", await main({ cwd }))
    .get("/demo/*/index.html", await demo({ cwd, context }))
    .use(await pack({ compiler }));
}

function defer() {
  let res;
  let rej;

  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  promise.resolve = res;
  promise.reject = rej;

  return promise;
}
