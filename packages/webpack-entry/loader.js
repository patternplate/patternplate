// const { entries } = require("lodash");
const commonDir = require("common-dir");
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

  const result = `
    if (module.hot) {
      module.hot.accept([]);
    }
    ${files.map(file => `module.exports['${file}'] = require('./${file}');`).join('\n')}
  `;

  cb(null, result);
};

function getFiles(options) {
  const entries = Array.isArray(options.entry) ? options.entry : [options.entry];
  const cwd = options.cwd || process.cwd();
  return globby(entries, {cwd});
}
