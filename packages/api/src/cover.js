const url = require("url");
const AggregateError = require("aggregate-error");
const unindent = require("unindent");
const stringHash = require("string-hash");
const fromString = require("require-from-string");

const RENDER_PATH = "/patternplate.node.render.js";
const COVER_PATH = "/patternplate.node.cover.js";

module.exports = async options => {
  const {config} = options;

  return async function main(req, res) {
    try {
      if (!config.cover) {
        return res.sendStatus(404);
      }

      const {fs} = await wait(options.queue);
      const getModule = fromFs(fs);

      const cover = getModule(COVER_PATH);
      const render = typeof cover.render === "function" ? cover.render : getModule(RENDER_PATH);
      res.send(html(render(cover), {base: req.params.base || "/"}));
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
      default:
        observable.subscribe(
          queue => {
            const [message] = queue;
            switch (message.type) {
              case 'done':
                return resolve(message.payload);
              case 'error':
                return reject(message.payload);
              default:
                return null;
            }
          },
          reject
        );
    }
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

function html(content, options) {
  const prefix = url.resolve(options.base, "api");

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
        <script src="${prefix}/patternplate.web.probe.js"></script>
        <script src="${prefix}/patternplate.web.cover.js"></script>
        <script src="${prefix}/patternplate.web.mount.js"></script>
        <script src="${prefix}/patternplate.web.cover-client.js"></script>
        <script>
          /* content.js */
          ${content.js || ""}
        </script>
      </body>
    </html>
  `);
}
