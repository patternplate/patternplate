const express = require("express");
const bundle = require("./routes/bundle");
const main = require("./routes/main");
const render = require("./routes/render");

module.exports = api;

async function api({ cwd }) {
  return express()
    .get("/", main({ cwd }))
    .get("/bundle.js", bundle({ cwd }))
    .get("/render.js", render({ cwd }))
    .get("/start.js", render({ cwd }));
}
