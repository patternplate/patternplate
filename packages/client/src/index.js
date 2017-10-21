const path = require("path");

const api = require("@patternplate/api");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");
const express = require("express");
const importFrom = require("import-from");
const serve = require("serve-static");
const unindent = require("unindent");
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

      const { render } = importFrom(
        path.dirname(result.filepath),
        config.render
      );
      const component = importFrom(options.cwd, `./${found.artifact}`);
      const content = render(component);

      res.send(html(content, found));
    } catch (err) {
      next(err);
    }
  };
}

async function main(options) {
  return async function mainRoute(req, res, next) {
    try {
      const result = (await loadConfig({ cwd: options.cwd })) || {};
      const { config = {}, filepath } = result;
      const { entry = [] } = config;
      const cwd = path.dirname(filepath);

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

function html(content, payload) {
  const data = encodeURIComponent(JSON.stringify(payload));

  return unindent(`
    <!doctype html>
    <html lang="en">
      <head>
        <!-- content.head -->
        ${content.head || ""}
        <!-- content.css -->
        ${content.css}
      </head>
      <body>
        <!-- content.before -->
        ${content.before || ""}
        <!-- content.html -->
        <div data-patternplate-mount="data-patternplate-mount">${content.html}</div>
        <!-- content.after -->
        ${content.after || ""}
        <textarea style="display:none" data-patternplate-vault="data-patternplate-vault">
          ${data}
        </textarea>
        <script src="/api/patternplate-vendors.js"></script>
        <script src="/api/patternplate-components.js"></script>
        <script src="/api/patternplate-render.js"></script>
        <script>
          var element = document.querySelector('[data-patternplate-mount]');
          var data = JSON.parse(decodeURIComponent(document.querySelector('[data-patternplate-vault]').textContent));
          var component = window['patternplate-components'][data.artifact];
          window['patternplate-render'].mount(component, element);
        </script>
      </body>
    </html>
  `);
}
