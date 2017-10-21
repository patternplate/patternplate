const path = require("path");
const loadConfig = require("@patternplate/load-config");
const pack = require("@patternplate/pack");
const resolveFrom = require("resolve-from");

module.exports = ({ cwd }) => {
  const render = async (req, res) => {
    const { config, filepath } = await loadConfig({ cwd });
    const renderPath = resolveFrom(path.dirname(filepath), config.render);

    res.send(
      await pack({
        entry: {
          render: renderPath
        },
        output: {
          library: "patternplate.render",
          libraryTarget: "assign"
        }
      })
    );
  };

  return async (req, res, next) => {
    try {
      await render(req, res);
    } catch (err) {
      next(err);
    }
  };
};
