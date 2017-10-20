const cosmiconfig = require("cosmiconfig");

module.exports = ({ cwd }) => {
  const explorer = cosmiconfig("patternplate");
  return explorer.load(cwd);
};
