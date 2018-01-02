// const AggregateError = require("aggregate-error");
const express = require("express");
const MemoryFS = require("memory-fs");

const createCompiler = require("./compiler");
const demo = require("./demo");
const pack = require("./pack");
const main = require("./main");

module.exports = api;

async function api({ cwd }) {
  const fs = new MemoryFS();
  const client = await createCompiler({ cwd, fs, target: "web" });
  const server = await createCompiler({ cwd, fs, target: "node" });

  const context = {
    client: {
      running: defer(),
      error: defer()
    },
    server: {
      running: defer(),
      error: defer()
    },
    fs
  };

  client.plugin("watch-run", (_, cb) => {
    context.client.running = defer();
    context.client.error = defer();
    cb();
  });

  client.plugin("done", stats => {
    const info = stats.toJson();

    if (info.errors.length > 0) {
      context.client.running.resolve(null);
      context.client.error.resolve(info.errors);
      return;
    }

    if (info.warnings.length > 0) {
      console.warn(info.warnings);
    }

    context.client.running.resolve(stats);
    context.client.error.resolve(null);
  });

  client.plugin("failed", error => {
    context.client.running.resolve(null);
    context.client.error.resolve(error);
  });

  server.plugin("watch-run", (_, cb) => {
    context.server.running = defer();
    context.server.error = defer();
    cb();
  });

  server.plugin("done", stats => {
    const info = stats.toJson();

    if (info.errors.length > 0) {
      context.server.running.resolve(null);
      context.server.error.resolve(info.errors);
      return;
    }

    if (info.warnings.length > 0) {
      console.warn(info.warnings);
    }

    context.server.running.resolve(stats);
    context.server.error.resolve(null);
  });

  server.plugin("failed", error => {
    context.server.running.resolve(null);
    context.server.error.resolve(error);
  });

  return express()
    .get("/", await main({ cwd }))
    .get("/demo/*/index.html", await demo({ cwd, context }))
    .use(await pack({ compiler: client }));
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
