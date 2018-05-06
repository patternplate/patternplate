const utils = require("loader-utils");

module.exports = function pluginLoader() {
  const options = utils.getOptions(this);
  const entry = JSON.parse(options.entry || []);

  return entry.reduce((result, entry) => {
    result += `module.exports[${JSON.stringify(entry.id)}] = require(${JSON.stringify(entry.path)});\n`;
    return result;
  }, '');
};
