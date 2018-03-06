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

      // TODO: Send errors to central observer
      const {patterns} = await loadMeta({
        cwd,
        entry
      });

      const tree = {id: "root", children: patterns};

      res.send({ docs, meta: tree });
    } catch (err) {
      return res.json(err);
    }
  };
};
