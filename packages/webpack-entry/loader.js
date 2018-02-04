// const { entries } = require("lodash");
const commonDir = require("common-dir");
const globby = require("globby");
const utils = require("loader-utils");

module.exports = function webpackEntry() {
  const options = utils.getOptions(this);
  const cwd = options.cwd || process.cwd();
  const entries = Array.isArray(options.entry) ? options.entry : [options.entry];
  const files = globby.sync(entries, {cwd});
  const dir = commonDir(files);

  if (files.length > 0) {
    this.addContextDependency(dir);
  }

  return `
    if (module.hot) {
      module.hot.accept([]);
    }
    ${files.map(file => `module.exports['${file}'] = require('./${file}');`).join('\n')}
  `;
};
