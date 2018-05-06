const path = require("path");

const api = require("@patternplate/api");
const { loadDocsTree } = require("@patternplate/load-docs");
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
  app.unsubscribe = apiRoute.unsubscribe;

  return app;
}

async function main(options) {
  return async function mainRoute(req, res, next) {
    try {
      const { entry = [], cover } = options.config;
      const base = options.base || "/";

      if (req.path === base && typeof cover === "string") {
        const response = await fetch(`${req.protocol}://${req.get("host")}/api/cover.html?base=${base}`, {credentials: "include"});
        return res.send(await response.text());
      }

      const [docs, {patterns}] = await Promise.all([
        loadDocsTree({
          cwd: options.cwd,
          docs: options.config.docs,
          readme: options.config.readme
        }),
        loadMeta({
          cwd: options.cwd,
          entry
        })
      ]);

      const tree = {id: "root", children: patterns};

      res.send(
        await render(req.url, {
          schema: { meta: tree, docs },
          config: options.config,
          base,
        })
      );
    } catch (err) {
      next(err);
    }
  };
}
