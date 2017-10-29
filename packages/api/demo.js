const path = require("path");
const loadConfig = require("@patternplate/load-config");
const loadMeta = require("@patternplate/load-meta");
const AggregateError = require("aggregate-error");
const resolveFrom = require("resolve-from");
const unindent = require("unindent");

module.exports = demo;

async function demo(options) {
  return async function demoRoute(req, res) {
    const { context } = options;

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

      const renderModule = resolveFrom(
        path.dirname(result.filepath),
        config.render
      );

      const componentModule = resolveFrom(options.cwd, `./${found.artifact}`);

      await context.running;
      const err = await context.error;

      if (err) {
        throw err;
      }

      delete require.cache[renderModule];
      const { render } = require(renderModule);

      delete require.cache[componentModule];
      const component = require(componentModule);

      const content = render(component.default || component);
      res.send(html(content, found));
    } catch (err) {
      const error = Array.isArray(err) ? new AggregateError(err) : err;
      res.status(500).send(error.message);
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
        ${content.css || ""}
      </head>
      <body>
        <!-- content.before -->
        ${content.before || ""}
        <!-- content.html -->
        <div data-patternplate-mount="data-patternplate-mount">${content.html}</div>
        <!-- content.after -->
        ${content.after || ""}
        <textarea style="display:none" data-patternplate-vault="data-patternplate-vault">
          ${data || "{}"}
        </textarea>
        <script src="/api/patternplate-vendors.js"></script>
        <script src="/api/patternplate-components.js"></script>
        <script src="/api/patternplate-render.js"></script>
        <script>
          (function main() {
            var components = window['patternplate-components'];
            var render = window['patternplate-render'];

            var errors = [];

            if (!components) {
              errors.push(new Error('No patternplate components found. There might be errors during bundling.'))
            }

            if (!render) {
              errors.push(new Error('No render module found. There might be errors during bundling.'))
            }

            if (errors.length > 0) {
              errors.forEach(err => console.error(err));
              return;
            }

            var element = document.querySelector('[data-patternplate-mount]');
            var data = JSON.parse(decodeURIComponent(document.querySelector('[data-patternplate-vault]').textContent));
            var component = components[data.artifact];
            render.mount(component.default || component, element);
          })();
        </script>
      </body>
    </html>
  `);
}
