const path = require("path");

const api = require("@patternplate/api");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");
const express = require("express");
const serve = require("serve-static");

const renderPage = require("./app/render-page");

module.exports = client;

async function client(options) {
  const apiRoute = await api({
    cwd: options.cwd,
    config: options.config,
    server: options.server
  });

  const mainRoute = await main({
    cwd: options.cwd,
    config: options.config
  });

  const apiStatic = path.join(options.cwd, "static");

  const app = express()
    .use("/api/static", serve(apiStatic))
    .use("/api/", apiRoute)
    .get("/pattern/*", mainRoute)
    .get("/doc/*", mainRoute)
    .get("/", mainRoute);

  if (process.env.BUNDLE !== "@patternplate/cli") {
    // regular node environment
    const appStatic = path.join(__dirname, "static");
    app.use("/static", serve(appStatic))
  } else {
    // bundled via @patternplate/cli
    const efs = require("./eject")();

    app.use("/static", (req, res, next) => {
      switch (req.url) {
        case "/vendors.js": {
          res.type("js");
          return res.send(efs.readFileSync("/static/vendors.js"));
        }
        case "/client.js": {
          res.type("js");
          return res.send(efs.readFileSync("/static/client.js"));
        }
        default:
          next();
      }
    });
  }

  app.subscribe = apiRoute.subscribe;

  return app;
}

async function main(options) {
  return async function mainRoute(req, res, next) {
    try {
      const result = (await loadConfig({ cwd: options.cwd })) || {};
      const { config = {}, filepath } = result;
      const { entry = [] } = config;
      const cwd = filepath ? path.dirname(filepath) : process.cwd();

      const docs = await loadDocsTree({
        cwd,
        docs: config.docs,
        readme: config.readme
      });

      // TODO: Send errors to central observer
      const {patterns} = await loadMeta({
        cwd,
        entry
      });

      const tree = {id: "root", children: patterns};

      res.send(
        await renderPage(req.url, {
          schema: { meta: tree, docs },
          config,
          base: options.base || "/"
        })
      );
    } catch (err) {
      next(err);
    }
  };
}
