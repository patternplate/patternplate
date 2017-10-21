const querystring = require("querystring");
const loadConfig = require("@patternplate/load-config");
const pack = require("@patternplate/pack");
const globby = require("globby");

const LOADER = require.resolve("./loader.js");

module.exports = ({ cwd }) => {
  const bundle = async (req, res) => {
    const { config } = await loadConfig({ cwd });
    const options = await getOptions(config, { cwd });
    const result = await pack(options, { cwd });

    res.type("js");
    res.send(result);
  };

  return async function bundleRoute(req, res, next) {
    try {
      await bundle(req, res);
    } catch (err) {
      next(err);
    }
  };
};

async function getOptions(config, { cwd }) {
  const files = await globby(config.entry || [], { cwd });

  const q = querystring.stringify({
    entries: JSON.stringify(
      files.reduce((acc, file) => {
        acc[file] = file;
        return acc;
      }, {})
    )
  });

  return {
    entry: `${LOADER}?${q}!`,
    output: {
      library: "patternplate",
      libraryTarget: "window"
    }
  };
}
