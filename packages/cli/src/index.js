import errorhandler from "errorhandler";
import express from "express";
import slash from "express-slash";

import client from "@patternplate/client";

export default patternplate;

async function patternplate(options) {
  const { port } = options;

  const app = express()
    .enable("strict-routing")
    .disable("powered-by")
    .use(errorhandler())
    .use(
      await client({
        cwd: options.cwd,
        config: options.config
      })
    )
    .use(slash());

  await start(app, { port });

  return {
    app,
    port
  };
}

function start(app, { port }) {
  return new Promise(resolve => {
    app.listen(port, () => resolve());
  });
}
