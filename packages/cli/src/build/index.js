const path = require("path");
const url = require("url");
const eject = require("@patternplate/client/eject");
const render = require("@patternplate/client/render");
const compiler = require("@patternplate/compiler");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");
const ora = require("ora");
const sander = require("@marionebl/sander");
const fromString = require("require-from-string");
const unindent = require("unindent");
const stringHash = require("string-hash");

module.exports = build;

const BUNDLE_PATH = "/patternplate.node.components.js";
const COVER_PATH = "/patternplate.node.cover.js";
const RENDER_PATH = "/patternplate.node.render.js";

// TODO: provide a lib version of this that
// writes to a virtual fs / union fs
async function build({flags}) {
  const cwd = flags.cwd || process.cwd();
  const out = path.join(cwd, flags.out || "docs/patterns");
  const rel = path.relative(cwd, out);

  if (typeof flags.base !== "string" || flags.base.length === 0) {
    throw new Error(`expected --base to be non-empty string, received "${flags.base}" of type "${typeof flags.base}"`);
  }

  const base = selectBase(flags.base);

  const spinner = ora(`Building to "${rel}"`).start();

  const { config } = await loadConfig({ cwd });
  const { entry = [], cover } = config;

  const docs = await loadDocsTree({
    cwd,
    docs: config.docs,
    readme: config.readme
  });

  const {patterns, errors} = await loadMeta({
    cwd,
    entry
  });

  const tree = {id: "root", children: patterns};

  if (errors && errors.length > 0) {
    throw new Error(errors.map(error => error.message).join("\n"));
  }

  const schema = { docs, meta: tree };
  const state = { base, config, schema, isStatic: true};

  // Create api/state.json
  await sander.writeFile(out, 'api/state.json', JSON.stringify(schema));

  // Create pages
  const pool = [...flatten(docs.children), ...flatten(patterns)];

  await Promise.all(pool.map(async item => {
    const full = `${base}${item.contentType}/${item.id}`;
    const html = await render(full, state);
    const target = path.join(out, item.contentType, item.id, 'index.html');
    await sander.writeFile(target, html);
  }));

  // Create required client js bundles
  await dump(eject(), "/static", out);

  // Create component bundles
  await dump(await bundle({ cwd, target: "web" }), "/", path.join(out, 'api'));

  const bundleFs = await bundle({ cwd, target: "node" });
  const getModule = fromFs(bundleFs);
  const bundles = getModule(BUNDLE_PATH);

  // Create /
  if (typeof cover === "string") {
    const cover = getModule(COVER_PATH);
    const result = typeof cover.render === "function"
      ? cover.render(cover)
      : getModule(RENDER_PATH)(cover);
    await sander.writeFile(out, 'index.html', coverHtml(result, {base}));
  } else {
    const home = await render(base, state);
    await sander.writeFile(out, 'index.html', home);
  }

  // Create demo.html files
  await Promise.all(patterns.map(async pattern => {
    const component = getComponent(bundles, pattern);
    const result = typeof component.render === "function"
      ? component.render(component)
      : getModule(RENDER_PATH)(component);
    await sander.writeFile(out, 'api/demo', `${pattern.id}.html`, demo(result, pattern));
  }));

  spinner.succeed(`Built to "${rel}"`);
}

function selectBase(base) {
  if (base === "/") {
    return base;
  }

  return `${base.charAt(0) === "/" ? "" : "/"}${base}`;
}

function bundle({ cwd, target }) {
  return compiler({ cwd, target })
    .then(c => {
      return new Promise((resolve, reject) => {
        c.run((err, stats) => {
          if (err) {
            return reject(err);
          }
          if (stats.compilation.errors && stats.compilation.errors.length > 0) {
            stats.compilation.errors.forEach(error => {
              console.error(error);
            });
            return reject(stats.compilation.errors);
          }
          resolve(c.outputFileSystem);
        })
      });
    });
}

// TODO: Duplicate of function in @patternplate/api/demo.js,
// move to own package
function demo(content, payload) {
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
        <!-- ../ -> /api/ -->
        <script src="../patternplate.web.vendors.js"></script>
        <script src="../patternplate.web.components.js"></script>
        <script src="../patternplate.web.probe.js"></script>
        <script src="../patternplate.web.mount.js"></script>
        <script src="../patternplate.web.demo.js"></script>
      </body>
    </html>
  `);
}

function coverHtml(content, options) {
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

async function dump(fs, base, target) {
  const files = list(fs, base);
  return Promise.all(files.map(async file => {
    sander.writeFile(target, file.slice(1), fs.readFileSync(file));
  }));
}

function list(fs, base) {
  return fs.readdirSync(base)
    .reduce((acc, name) => {
      const p = path.join(base, name);
      const stat = fs.statSync(p);
      if (stat.isFile()) {
        acc.push(p);
      } else {
        acc = acc.concat(list(fs, p));
      }
      return acc;
    }, []);
}


// TODO: Duplicate of function in @patternplate/api/demo.js,
// move to own package
function getComponent(components, data) {
  const top = components[data.artifact];

  if (top[data.source]) {
    return top[data.source];
  }

  return top;
}

// TODO: Duplicate of function in @patternplate/api/demo.js,
// move to own package
function fromFs(fs) {
  return filename => {
    const componentBundleSource = String(fs.readFileSync(filename));
    return getExports(componentBundleSource, filename);
  };
}

// TODO: Duplicate of function in @patternplate/api/demo.js,
// move to own package
const exportsCache = new Map();
function getExports(source, {filename}) {
  const hash = stringHash(source);

  if (!exportsCache.has(hash)) {
    exportsCache.set(hash, fromString(source, filename));
  }

  return exportsCache.get(hash);
}

// TODO: Duplicate from @patternplate/client/selectors/pool
function flatten(tree, initial = []) {
  return tree.reduce((acc, item) => {
    acc.push(item);
    if (Array.isArray(item.children)) {
      flatten(item.children, acc);
    }
    return acc;
  }, initial);
}
