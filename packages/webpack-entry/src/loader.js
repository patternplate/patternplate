// const { entries } = require("lodash");
const path = require("path");
const exists = require("path-exists");
const globby = require("globby");
const globParent = require("glob-parent");
const utils = require("loader-utils");
const requireFromString = require("require-from-string");
const debug = require("util").debuglog("patternplate");
const resolveFrom = require("resolve-from");

const rawLoader = path.relative(process.cwd(), resolveFrom(__dirname, "raw-loader")).split(path.sep).join("/");

module.exports = async function webpackEntry() {
  const cb = this.async();
  const options = utils.getOptions(this);

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

    const mod = [`module.exports['${file}'] = require('./${rel}');`]

    if (exported.indexOf("js") === -1) {
      mod.push(`module.exports['${file}'].js = function() { return require('./${rawLoader}!./${rel}'); };`);
    }

    if (exported.indexOf("css") === -1 && await exists(ext('.css', full))) {
      mod.push(`module.exports['${file}'].css = function() { return require('./${ext('.css', rel)}'); };`);
    }

    if (exported.indexOf("html") === -1 && await exists(ext('.html', full))) {
      mod.push(`module.exports['${file}'].html = function() { return require('./${ext('.html', rel)}'); };`);
    }

    return mod.join('\n');
  }));

  cb(null, reg.join('\n'));
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
