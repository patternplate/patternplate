const cosmiconfig = require("cosmiconfig");

const DEFAULTS = {
  docs: ["docs/**/*.md", "README.md"],
  entry: ["lib/**/demo.js"],
  render: "@patternplate/render-default/render",
  mount: "@patternplate/render-default/mount"
};

module.exports = async ({ cwd }) => {
  const explorer = cosmiconfig("patternplate");
  const config = await explorer.load(cwd);

  if (!config) {
    return {
      config: DEFAULTS,
      filepath: null
    };
  }

  return config;
};
