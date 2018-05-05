const path = require("path");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");
const { loadPlugins } = require("@patternplate/load-plugins");

module.exports = async options => {
  return async function main(req, res) {
    try {
      const { config, filepath } = await loadConfig({ cwd: options.cwd });
      const { entry = [] } = config;
      const cwd = filepath ? path.dirname(filepath) : options.cwd;
      const plugins = await loadPlugins(config.plugins, {cwd});

      const [docs, {patterns}] = await Promise.all([
        loadDocsTree({
          cwd,
          docs: config.docs,
          readme: config.readme
        }),
        loadMeta({
          cwd,
          entry
        })
      ]);

      res.send({
        config,
        docs,
        meta: {id: "root", children: patterns},
        plugins: plugins.map(p => Object.assign(p.plugin, {id: p.id}))
      });
    } catch (err) {
      res.status(500);
      return res.json({
        type: 'error',
        message: err.message
      });
    }
  };
};
