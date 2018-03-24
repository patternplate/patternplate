const ARSON = require("ARSON");
const http = require("http");
const errorhandler = require("errorhandler");
const express = require("express");
const slash = require("express-slash");

const client = require("@patternplate/client");

module.exports = patternplate;

async function patternplate(options) {
  const { port } = options;

  const app = express();
  const server = http.createServer(app);

  const clientMiddleware = await client({
    cwd: options.cwd,
    config: options.config,
    server
  });

  app
    .enable("strict-routing")
    .disable("powered-by")
    .use(errorhandler())
    .use(clientMiddleware)
    .use(slash());

  await start({ app, port, server });

  if (typeof process.send === "function") {
    process.send(ARSON.stringify({
      type: "patternplate:started",
      payload: options
    }));
  }

  return {
    app,
    port,
    subscribe: clientMiddleware.subscribe
  };
}

function start({ port, server }) {
  return new Promise((resolve, reject) => {
    server
      .listen(port, () => resolve())
      .on("error", reject);
  });
}
