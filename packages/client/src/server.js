const path = require("path");

const api = require("@patternplate/api");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");
const express = require("express");
const serve = require("serve-static");
const renderPage = require("./app/render-page");

const { loadMetaTree } = loadMeta;

module.exports = client;

async function client(options) {
  const apiRoute = await api({
    cwd: options.cwd,
    config: options.config
  });

  const mainRoute = await main({
    cwd: options.cwd,
    config: options.config
  });

  const apiStatic = path.join(options.cwd, "static");
  const appStatic = path.join(__dirname, "static");

  const app = express()
    .use("/static", serve(appStatic))
    .use("/api/static", serve(apiStatic))
    .use("/api/", apiRoute)
    .get("/pattern/*", mainRoute)
    .get("/doc/*", mainRoute)
    .get("/", mainRoute);

  app.subscribe = () => {
    apiRoute.subscribe();
  }

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

      const meta = await loadMetaTree({
        cwd,
        entry
      });

      res.send(
        await renderPage(req.url, {
          schema: { meta, docs },
          config
        })
      );
    } catch (err) {
      next(err);
    }
  };
}
