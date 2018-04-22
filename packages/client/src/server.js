const path = require("path");

const api = require("@patternplate/api");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const { loadPlugins } = require("@patternplate/load-plugins");
const loadMeta = require("@patternplate/load-meta");
const express = require("express");
const serve = require("serve-static");
const fetch = require("isomorphic-fetch");
const cors = require("cors");

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
    .use("/api/static", cors(), serve(apiStatic))
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

      const pluginPaths = Array.isArray(config.plugins) ? config.plugins : [];

      const [docs, {patterns}, plugins] = await Promise.all([
        loadDocsTree({
          cwd,
          docs: config.docs,
          readme: config.readme
        }),
        loadMeta({
          cwd,
          entry
        }),
        (await loadPlugins(pluginPaths, {
          cwd
        }))
        .map(p => p.plugin)
      ]);

      const tree = {id: "root", children: patterns};

      res.send(
        await render(req.url, {
          schema: { meta: tree, docs, plugins },
          config,
          base,
        })
      );
    } catch (err) {
      next(err);
    }
  };
}
