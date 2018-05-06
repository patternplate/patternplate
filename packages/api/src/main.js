const path = require("path");
const { loadDocsTree } = require("@patternplate/load-docs");
const loadMeta = require("@patternplate/load-meta");

module.exports = async options => {
  return async function main(req, res) {
    try {
      const { config, cwd } = options;
      const { entry = [] } = options.config;

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
        meta: {id: "root", children: patterns}
      });
    } catch (err) {
      return res.json(err);
    }
  };
};
