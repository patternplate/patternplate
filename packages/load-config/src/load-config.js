const cosmiconfig = require("cosmiconfig");
const resolveFrom = require("resolve-from");

const DEFAULTS = {
  docs: ["docs/**/*.md", "README.md"],
  entry: ["lib/**/demo.js"]
};

module.exports = async ({ cwd }) => {
  const explorer = cosmiconfig("patternplate");
  const config = await explorer.load(cwd);

  if (!config) {
    const render = resolveFrom.silent(cwd, "@patternplate/render-default/render") || require.resolve("@patternplate/render-default/render");
    const mount = resolveFrom.silent(cwd, "@patternplate/render-default/mount") || require.resolve("@patternplate/render-default/mount");;

    return {
      config: {...DEFAULTS, render, mount},
      filepath: null
    };
  }

  return config;
};
