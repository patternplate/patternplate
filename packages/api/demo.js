// const path = require("path");
const loadConfig = require("@patternplate/load-config");
const loadMeta = require("@patternplate/load-meta");
const AggregateError = require("aggregate-error");
const fromString = require("require-from-string");
const unindent = require("unindent");

module.exports = demo;

const BUNDLE_PATH = "/patternplate.node.components.js";
const RENDER_PATH = "/patternplate.node.render.js";

async function demo(options) {
  return async function demoRoute(req, res) {
    const { context } = options;
    const getModule = fromFs(context.fs);

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

      const stats = await context.running;
      const err = await context.error;

      if (err) {
        throw err;
      }

      const render = getModule(RENDER_PATH);
      const component = getComponent(getModule(BUNDLE_PATH), found);
      const content = render(component);

      res.send(html(content, found));
    } catch (err) {
      const error = Array.isArray(err) ? new AggregateError(err) : err;
      console.log(error);
      res.status(500).send(error.message);
    }
  };
}

function getComponent(components, data) {
  const fileModule = components[data.artifact];

  if (data.source in fileModule) {
    return fileModule[data.source];
  }

  return fileModule;
}

function fromFs(fs) {
  return path => {
    const componentBundleSource = String(fs.readFileSync(path));
    return fromString(componentBundleSource);
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
        <div data-patternplate-mount="data-patternplate-mount">${content.html ||
          ""}</div>
        <!-- content.after -->
        ${content.after || ""}
        <script src="/api/patternplate.web.vendors.js"></script>
        <script src="/api/patternplate.web.components.js"></script>
        <script src="/api/patternplate.web.mount.js"></script>
        <script>
          (function main() {
            function getData() {
              var vault = document.querySelector('[data-patternplate-vault]');
              if (!vault) {
                return {};
              }
              var encodedJson = vault.textContent;
              if (!encodedJson) {
                return {};
              }
              var json = decodeURIComponent(encodedJson);
              if (!json) {
                return {};
              }
              return JSON.parse(json);
            }

            function getComponent(components, data) {
              const fileModule = components[data.artifact];
              if (data.source in fileModule) {
                return fileModule[data.source];
              }
              return fileModule;
            }

            var components = window['patternplate-components'];
            var mount = window['patternplate-mount'];

            var errors = [];

            if (!components) {
              errors.push(new Error('No patternplate components found. There might be errors during bundling.'))
            }

            if (!mount) {
              errors.push(new Error('No mount module found. There might be errors during bundling.'))
            }

            if (errors.length > 0) {
              errors.forEach(err => console.error(err));
              return;
            }

            var element = document.querySelector('[data-patternplate-mount]');
            var component = getComponent(components, getData());
            mount(component, element);
          })();
        </script>
      </body>
    </html>
  `);
}
