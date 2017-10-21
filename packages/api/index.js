const express = require("express");
const pack = require("./pack");
const main = require("./main");

module.exports = api;

async function api({ cwd }) {
  return express()
    .get("/", await main({ cwd }))
    .use(await pack({ cwd }));
}
