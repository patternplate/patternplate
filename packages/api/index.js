// const AggregateError = require("aggregate-error");
const express = require("express");

const createCompiler = require("./compiler");
const demo = require("./demo");
const pack = require("./pack");
const main = require("./main");

module.exports = api;

async function api({ cwd }) {
  const client = await createCompiler({ cwd, target: "web" });
  const server = await createCompiler({ cwd, target: "node" })

  const mw = express()
    .get("/", await main({ cwd }))
    .get("/demo/*/index.html", await demo({ cwd, queue: server }))
    .use(await pack({ compiler: client.compiler }));

  mw.subscribe = () => {
    client.subscribe();
    server.subscribe();
  };

  return mw;
}

