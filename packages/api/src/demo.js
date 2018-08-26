const path = require("path");
const loadMeta = require("@patternplate/load-meta");
const AggregateError = require("aggregate-error");
const fromString = require("require-from-string");
const sander = require("@marionebl/sander");
const unindent = require("unindent");
const stringHash = require("string-hash");

module.exports = demo;

const BUNDLE_PATH = "/patternplate.node.components.js";
const RENDER_PATH = "/patternplate.node.render.js";

async function demo(options) {
  return async function demoRoute(req, res) {
    try {
      const { entry = [] } = options.config;
      const { cwd } = options;

      const id = req.params[0];

      // TODO: Send errors to central observer
      const { patterns } = await loadMeta({
        cwd,
        entry
      });

      const found = patterns.find(pattern => pattern.id === id);

      if (!found) {
        return res.sendStatus(404);
      }

      const { fs } = await wait(options.queue);

      const getModule = fromFs(fs);
      const bundle = getModule(BUNDLE_PATH);
      const component = getComponent(bundle, found);
      const context = getContext(found);
      const render = component.render || getModule(RENDER_PATH);
      const content = await Promise.resolve(render(component, context));
      res.send(html(content, found));
    } catch (err) {
      const error = Array.isArray(err) ? new AggregateError(err) : err;
      console.error(error);
      res.status(500).send(error.message);
    }
  };
}

// Todo: Provide basic description
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

function getComponent(components, data) {
  const fileId = data.artifact.split(path.sep).join('/');
  const top = components[fileId];

  const moduleId = data.source.split(path.sep).join('/');
  if (top[moduleId]) {
    return top[moduleId];
  }

  return top;
}

function getContext(pattern) {
  return {
    dirname: path.dirname(pattern.path)
  };
}

function fromFs(fs) {
  return filename => {
    const componentBundleSource = String(fs.readFileSync(filename));
    return getExports(componentBundleSource, filename);
  };
}

const exportsCache = new Map();

function getExports(source, { filename }) {
  const hash = stringHash(source);

  if (!exportsCache.has(hash)) {
    exportsCache.set(hash, fromString(source, filename));
  }

  return exportsCache.get(hash);
}

function html(content, payload) {
  const data = encodeURIComponent(JSON.stringify(payload));

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
        <textarea style="display: none;" data-patternplate-vault="data-patternplate-vault">${data}</textarea>
        <!-- content.before -->
        ${content.before || ""}
        <!-- content.html -->
        <div data-patternplate-mount="data-patternplate-mount">${content.html || ""}</div>
        <!-- content.after -->
        ${content.after || ""}
        <!-- ../ -> /api/ -->
        <script src="../patternplate.web.demo-client.js"></script>
      </body>
    </html>
  `);
}

