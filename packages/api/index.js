const express = require("express");
const createCompiler = require("./compiler");
const pack = require("./pack");
const main = require("./main");

module.exports = api;

async function api({ cwd }) {
  const compiler = await createCompiler({ cwd });

  return express()
    .get("/", await main({ cwd }))
    .use(await pack({ compiler }));
}
