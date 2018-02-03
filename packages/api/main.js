const path = require("path");
const loadConfig = require("@patternplate/load-config");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");

module.exports = async options => {
  return async function main(req, res, next) {
    try {
      const { config, filepath } = await loadConfig({ cwd: options.cwd });
      const { entry = [] } = config;
      const cwd = filepath ? path.dirname(filepath) : process.cwd();

      const docs = await loadDocsTree({
        cwd,
        docs: config.docs,
        readme: config.readme
      });

      const meta = await loadMeta.loadMetaTree({
        cwd,
        entry
      });

      res.send({ docs, meta });
    } catch (err) {
      const type = req.accepts("json", "text/event-stream");
      switch (type) {
        case "json":
          return res.json(err);
        case "text/event-stream":
        default:
          next(err);
      }
    }
  };
};
