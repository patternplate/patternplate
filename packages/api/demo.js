const path = require("path");
const loadConfig = require("@patternplate/load-config");
const loadMeta = require("@patternplate/load-meta");
const AggregateError = require("aggregate-error");
const fromString = require("require-from-string");
const sander = require("@marionebl/sander");
const unindent = require("unindent");

module.exports = demo;

const BUNDLE_PATH = "/patternplate.node.components.js";
const RENDER_PATH = "/patternplate.node.render.js";

async function demo(options) {
  return async function demoRoute(req, res) {
    try {
      const result = await loadConfig({ cwd: options.cwd });
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

      const {fs} = await wait(options.queue);

      const getModule = fromFs(fs);
      const render = getModule(RENDER_PATH);
      const bundle = getModule(BUNDLE_PATH);
      const component = getComponent(bundle, found);
      const content = render(component);

      const cssArtifact = path.join(path.dirname(found.artifact), 'demo.css');
      const htmlArtifact = path.join(path.dirname(found.artifact), 'demo.html');

      if (!content.css && await sander.exists(cssArtifact)) {
        content.css = `<style>${String(await sander.readFile(cssArtifact))}</style>`;
      }

      if (!content.html && await sander.exists(htmlArtifact)) {
        content.html = String(await sander.readFile(htmlArtifact));
      }

      res.send(html(content, found));
    } catch (err) {
      const error = Array.isArray(err) ? new AggregateError(err) : err;
      console.error(error);
      res.status(500).send(error.message);
    }
  };
}

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
  const top = components[data.artifact];

  if (top[data.source]) {
    return top[data.source];
  }

  return top;
}

function fromFs(fs) {
  return filename => {
    const componentBundleSource = String(fs.readFileSync(filename));
    return fromString(componentBundleSource, filename);
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
        ${content.css || ""}
      </head>
      <body>
        <textarea style="display: none;" data-patternplate-vault="data-patternplate-vault">${data}</textarea>
        <!-- content.before -->
        ${content.before || ""}
        <!-- content.html -->
        <div data-patternplate-mount="data-patternplate-mount">${content.html || ""}</div>
        <!-- content.after -->
        ${content.after || ""}
        <script src="/api/patternplate.web.vendors.js"></script>
        <script src="/api/patternplate.web.components.js"></script>
        <script src="/api/patternplate.web.mount.js"></script>
        <script src="/api/patternplate.web.demo.js"></script>
      </body>
    </html>
  `);
}

