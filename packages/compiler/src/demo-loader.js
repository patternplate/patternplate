const utils = require("loader-utils");

module.exports = async function demoLoader(source) {
  const cb = this.async();
  const options = JSON.parse(utils.getOptions(this).options);
  const entry = webpackEntry.bind(this);

  const components = await entry({
    entry: options.entry,
    cwd: options.cwd
  });

  cb(null, `
    import mount from ${JSON.stringify(options.mount)};
    import "webpack-hot-middleware/client?path=/api/hmr";

    ${components};

    function main() {
      var errors = [];
      if (!components) {
        errors.push(new Error("No patternplate components found. There might be errors during bundling."))
      }
      if (errors.length > 0) {
        errors.forEach(function (err) {
          console.error(err)
        });

        return;
      }

      var component = getComponent(components, getData());
      component.element = component.element || document.querySelector("[data-patternplate-mount]");
      var mountDemo = typeof component.mount === "function" ? component.mount : mount;

      mountDemo(component);
    }

    main();

    function getData() {
      var vault = document.querySelector("[data-patternplate-vault]");
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
      const fileId = data.artifact;
      const top = components[fileId];

      const moduleId = data.source;
      if (top[moduleId]) {
        return top[moduleId];
      }

      return top;
    }

    if (module.hot) {
      module.hot.accept(() => {
        main()
      });
    }
  `);
}

const path = require("path");
const exists = require("path-exists");
const globby = require("globby");
const globParent = require("glob-parent");
const requireFromString = require("require-from-string");
const debug = require("util").debuglog("patternplate");
const resolveFrom = require("resolve-from");

const rawLoader = path.relative(process.cwd(), resolveFrom(__dirname, "raw-loader")).split(path.sep).join("/");

async function webpackEntry(options) {
  const files = await getFiles(options)
  const parent = globParent(options.entry);
  const parentFull = path.join(options.cwd, parent);
  const rel = path.relative(process.cwd(), parentFull);

  this.addContextDependency(parentFull);

  debug("webpack context", parent, "=>", `./${rel}`);

  const reg = await Promise.all(files.map(async file => {
    const full = path.join(options.cwd, file);
    const rel = path.relative(process.cwd(), full).split(path.sep).join('/');
    const exported = await getExported(full, { fs: this.fs });

    const mod = [`components['${file}'] = require('./${rel}');`]

    if (exported.indexOf("js") === -1) {
      mod.push(`components['${file}'].js = function() { return require('./${rawLoader}!./${rel}'); };`);
    }

    if (exported.indexOf("css") === -1 && await exists(ext('.css', full))) {
      mod.push(`components['${file}'].css = function() { return require('./${ext('.css', rel)}'); };`);
    }

    if (exported.indexOf("html") === -1 && await exists(ext('.html', full))) {
      mod.push(`components['${file}'].html = function() { return require('./${ext('.html', rel)}'); };`);
    }

    return mod.join('\n');
  }));

  return `
    const components = {};
    ${reg.join('\n')}
  `;
};

function getFiles(options) {
  const entries = Array.isArray(options.entry) ? options.entry : [options.entry];
  const cwd = options.cwd || process.cwd();
  return globby(entries, { cwd });
}

function ext(e, ...input) {
  const parsed = path.parse(path.join(...input));
  parsed.base = `${path.basename(parsed.base, path.extname(parsed.base))}${e}`;
  parsed.ext = e;
  return path.format(parsed);
}

async function getExported(modulePath, { fs }) {
  const code = String(fs.readFileSync(modulePath));

  try {
    return Object.keys(requireFromString(code, modulePath));
  } catch (err) {
    return [];
  }
}
