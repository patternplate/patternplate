// const { entries } = require("lodash");
const path = require("path");
const commonDir = require("common-dir");
const exists = require("path-exists");
const globby = require("globby");
const utils = require("loader-utils");

module.exports = async function webpackEntry() {
  const cb = this.async();
  const options = utils.getOptions(this);

  const files = await getFiles(options)

  if (files.length > 0) {
    const dir = commonDir(files);
    this.addContextDependency(dir);
  }

  // this.context is "null" for our case, so we resort
  // to "hacky" access on the compiler instance
  const context = this.context || this._compiler.context;

  const reg = await Promise.all(files.map(async file => {
    const full = path.join(context, file);
    const exported = require(full);

    const mod = [`module.exports['${file}'] = require('./${file}');`]

    if (!exported.css && await exists(ext('.css', full))) {
      mod.push(`module.exports['${file}'].css = require('./${ext('.css', file)}')`);
    }

    if (!exported.html && await exists(ext('.html', full))) {
      mod.push(`module.exports['${file}'].html = require('./${ext('.html', file)}')`);
    }

    return mod.join('\n');
  }));

  const result = `
    if (module.hot) {
      module.hot.accept([]);
    }
    ${reg.join('\n')}
  `;

  cb(null, result);
};

function getFiles(options) {
  const entries = Array.isArray(options.entry) ? options.entry : [options.entry];
  const cwd = options.cwd || process.cwd();
  return globby(entries, {cwd});
}

function ext(e, ...input) {
  const parsed = path.parse(path.join(...input));
  parsed.base = `${path.basename(parsed.base, path.extname(parsed.base))}${e}`;
  parsed.ext = e;
  return path.format(parsed);
}
