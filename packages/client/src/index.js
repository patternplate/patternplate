const path = require("path");
const express = require("express");
const serve = require("serve-static");
const unindent = require("unindent");

const api = require("@patternplate/api");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");
const renderPage = require("./render-page");

const { loadMetaTree } = loadMeta;

const STATIC = path.join(__dirname, "..", "static");

module.exports = client;

async function client(options) {
  const apiRoute = await api({
    cwd: options.cwd,
    config: options.config
  });

  const demoRoute = await demo({
    cwd: options.cwd,
    config: options.config
  });

  const mainRoute = await main({
    cwd: options.cwd,
    config: options.config
  });

  const apiStatic = path.join(options.cwd, "static");

  return express()
    .use(serve(STATIC))
    .use("/api/static", serve(apiStatic))
    .use("/api/", apiRoute)
    .get("/demo/*/index.html", demoRoute)
    .get("/pattern/*", mainRoute)
    .get("/doc/*", mainRoute)
    .get("/", mainRoute);
}

async function demo(options) {
  return async function demoRoute(req, res, next) {
    try {
      const result = (await loadConfig({ cwd: options.cwd })) || {};
      const { config = {} } = result;
      const { entry = [] } = config;

      const id = req.params[0];

      const patterns = await loadMeta({
        cwd: options.cwd,
        entry
      });

      const found = patterns.find(pattern => pattern.id === id);

      if (!found) {
        return res.sendStatus(404);
      }

      // TODO: Implement a SSR API that is not React specific
      res.send(html());
    } catch (err) {
      next(err);
    }
  };
}

async function main(options) {
  return async function mainRoute(req, res, next) {
    try {
      const result = (await loadConfig({ cwd: options.cwd })) || {};
      const { config = {} } = result;
      const { entry = [] } = config;

      const docs = await loadDocsTree({
        cwd: path.join(options.cwd, "patterns/@docs"),
        files: ["**/*.md"] // eslint-disable-line no-useless-escape
      });

      const meta = await loadMetaTree({
        cwd: options.cwd,
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

function html() {
  return unindent(`
    <!doctype html>
    <html>
      <head>
        <script src="/api/bundle.js"></script>
      </head>
      <body>
      </body>
    </html>
  `);
}
