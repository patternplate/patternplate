const ARSON = require("arson");
const errorhandler = require("errorhandler");
const express = require("express");
const slash = require("express-slash");
const importFrom = require("import-from");

const client = require("@patternplate/client");
const defaultCreateServer = require("./server");

module.exports = patternplate;

async function patternplate(options) {
  const { port } = options;

  const app = express();

  const createServer = typeof options.server === "string"
    ? importFrom(options.cwd, options.server)
    : defaultCreateServer;

  if (typeof options.server === "string" && typeof createServer !== "string") {
    const error = new Error(`${options.server} passed via --server must export a function`);
    error.patternplate = true;
    throw error;
  }

  const server = createServer(app);

  const clientMiddleware = await client({
    cwd: options.cwd,
    config: options.config,
    server,
    inspect: options.inspect
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
    subscribe: clientMiddleware.subscribe,
    unsubscribe: () => {
      clientMiddleware.unsubscribe();
      server.close();
    }
  };
}

function start({ port, server }) {
  return new Promise((resolve, reject) => {
    server
      .listen(port, () => resolve())
      .on("error", reject);
  });
}
