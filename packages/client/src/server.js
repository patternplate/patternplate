const path = require("path");

const api = require("@patternplate/api");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");
const express = require("express");
const serve = require("serve-static");
const fetch = require("isomorphic-fetch");

const render = require("./render");

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

  const appStatic = path.join(__dirname, "static");
  app.use("/static", serve(appStatic));

  app.subscribe = apiRoute.subscribe;
  return app;
}

async function main(options) {
  return async function mainRoute(req, res, next) {
    try {
      const result = (await loadConfig({ cwd: options.cwd })) || {};
      const { config = {}, filepath } = result;
      const { entry = [], cover } = config;
      const cwd = filepath ? path.dirname(filepath) : options.cwd;
      const base = options.base || "/";

      if (req.path === base && typeof cover === "string") {
        const response = await fetch(`${req.protocol}://${req.get("host")}/api/cover.html?base=${base}`, {credentials: "include"});
        return res.send(await response.text());
      }

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
        await render(req.url, {
          schema: { meta: tree, docs },
          config,
          base,
        })
      );
    } catch (err) {
      next(err);
    }
  };
}
