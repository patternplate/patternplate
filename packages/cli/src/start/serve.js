const ARSON = require("arson");
const http = require("http");
const https = require("https");
const errorhandler = require("errorhandler");
const express = require("express");
const slash = require("express-slash");

const client = require("@patternplate/client");

module.exports = patternplate;

async function patternplate(options) {
  const { port, listen,
    privateKey, certChain,
    hostName, httpsRedirectPort } = options;

  if (httpsRedirectPort > 0) {
    const redirectHttp = express();
    redirectHttp.get('/*', (req, res, next) => {
      res.redirect(`https://${hostName}${httpUrlNeedPort(port)}`);
    });
    redirectHttp.listen(httpsRedirectPort, listen);
  }

  const app = express();
  let server;
  if (privateKey && certChain) {
    server = https.createServer({
      key: privateKey,
      cert: certChain }, app);
  } else {
    server = http.createServer(app);
  }

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

  await start({ app, port, listen, server });

  if (typeof process.send === "function") {
    process.send(ARSON.stringify({
      type: "patternplate:started",
      payload: options
    }));
  }

  return {
    ...options,
    app,
    subscribe: clientMiddleware.subscribe
  };
}

function start({ port, server, host }) {
  return new Promise((resolve, reject) => {
    server
      .listen(port, host, () => resolve())
      .on("error", reject);
  });
}

function httpUrlNeedPort(port) {
  if ([80,443].find(i => port == i)) {
     return '';
  }
  return `:${port}`;
}
