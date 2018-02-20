import http from "http";
import errorhandler from "errorhandler";
import express from "express";
import slash from "express-slash";

import client from "@patternplate/client";

export default patternplate;

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

  return {
    app,
    port,
    subscribe() {
      clientMiddleware.subscribe();
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
