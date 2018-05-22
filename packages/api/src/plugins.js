const express = require("express");
const { loadPlugins } = require("@patternplate/load-plugins");

module.exports = plugins;

async function plugins(options) {
  return async function pluginsRoutes(req, res, next) {
    const path = req.params[0] || '';
    const fragments = path.split('/');
    const id = fragments[0] || '';

    try {
      const {config, cwd} = options;
      const plugins = await loadPlugins(config.plugins, {cwd});
      const p = plugins.find(p => p.id === id);

      if (!p) {
        res.sendStatus(404);
        return;
      }

      const {plugin} = p;

      const routes = Array.isArray(plugin.contributes.routes)
        ? plugin.contributes.routes
        : [];

      routes
        .filter(r => r.anchor === "api")
        .forEach(route => {
          /* const router = express.Router();
          const handler = router.all(`/plugins/${id}${route.path}`, route.handler);
          handler(req, res, next); */
        });

    } catch (err) {
      if (err.code === "ENOENT") {
        return res.sendStatus(404);
      }
      console.error(err);
      res.sendStatus(500).send(err.message);
    }
  };
}
