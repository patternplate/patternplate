const { entries } = require("lodash");
const utils = require("loader-utils");

module.exports = function loader() {
  const options = utils.getOptions(this);
  const e = JSON.parse(options.entries);

  const lines = entries(e).map(entry => {
    const [n, f] = entry;
    this.addDependency(f);

    const name = JSON.stringify(n);
    const file = JSON.stringify(`./${f}`);

    return `module.exports[${name}] = require(${file});`;
  });

  return [`module.exports['__patternplate-bundle'] = true;`]
    .concat(lines)
    .join("\n");
};
