const express = require("express");
const bundle = require("./routes/bundle");
const main = require("./routes/main");

module.exports = api;

async function api(options) {
  return express()
    .get("/", main({ cwd: options.cwd }))
    .get("/bundle.js", bundle({ cwd: options.cwd }));
}
