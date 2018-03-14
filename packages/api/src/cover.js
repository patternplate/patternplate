const path = require("path");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");
const AggregateError = require("aggregate-error");
const unindent = require("unindent");
const stringHash = require("string-hash");
const fromString = require("require-from-string");

const RENDER_PATH = "/patternplate.node.render.js";
const COVER_PATH = "/patternplate.node.cover.js";

module.exports = async options => {
  return async function main(req, res, next) {
    try {
      const { config, filepath } = await loadConfig({ cwd: options.cwd });
      const { entry = [] } = config;
      const cwd = filepath ? path.dirname(filepath) : process.cwd();

      if (!config.cover) {
        return res.sendStatus(404);
      }

      const {fs} = await wait(options.queue);


      const getModule = fromFs(fs);

      // Todo: Make "right"
      const render = getModule(RENDER_PATH);
      const cover = getModule(COVER_PATH);
      const content = render(cover);

      res.send(html(content));
    } catch (err) {
      const error = Array.isArray(err) ? new AggregateError(err) : err;
      console.error(error);
      res.status(500).send(error.message);
    }
  };
};

// Todo: Unify with wait and fromFS, getExports from demo.js
function wait(observable) {
  return new Promise((resolve, reject) => {
    const [message = {}] = observable.queue;
    switch (message.type) {
      case 'done':
        return resolve(message.payload);
      case 'error':
        return reject(message.payload);
    }

    observable.subscribe(
      queue => {
        const [message] = queue;
        switch (message.type) {
          case 'done':
            return resolve(message.payload);
          case 'error':
            return reject(message.payload);
        }
      },
      reject
    )
  });
}

function fromFs(fs) {
  return filename => {
    const componentBundleSource = String(fs.readFileSync(filename));
    return getExports(componentBundleSource, filename);
  };
}

const exportsCache = new Map();

function getExports(source, {filename}) {
  const hash = stringHash(source);

  if (!exportsCache.has(hash)) {
    exportsCache.set(hash, fromString(source, filename));
  }

  return exportsCache.get(hash);
}

function html(content) {
  return unindent(`
    <!doctype html>
    <html lang="en">
      <head>
        <!-- content.head -->
        ${content.head || ""}
        <style>
          /* content.css */
          ${content.css || ""}
        </style>
      </head>
      <body>
        <!-- content.before -->
        ${content.before || ""}
        <!-- content.html -->
        <div data-patternplate-mount="data-patternplate-mount">${content.html || ""}</div>
        <!-- content.after -->
        ${content.after || ""}
        <!-- ./ -> /api/ -->
        <script src="./patternplate.web.probe.js"></script>
        <script src="./patternplate.web.cover.js"></script>
        <script src="./patternplate.web.mount.js"></script>
        <script src="./patternplate.web.cover-client.js"></script>
        <script>
          /* content.js */
          ${content.js}
        </script>
      </body>
    </html>
  `);
}
