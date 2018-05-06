const { loadPlugins } = require("@patternplate/load-plugins");

module.exports = plugins;

async function plugins(options) {
  return async function pluginsRoutes(req, res) {
    try {

    } catch (err) {
      if (err.code === "ENOENT") {
        return res.sendStatus(404);
      }
      console.error(err);
      res.sendStatus(500).send(err.message);
    }
  };
}
