const path = require("path");
const querystring = require("querystring");
const loadConfig = require("@patternplate/load-config");
const globby = require("globby");
const MemoryFS = require("memory-fs");
const webpack = require("webpack");

const LOADER = require.resolve("./loader.js");

module.exports = ({ cwd }) => {
  const fs = new MemoryFS();

  const bundle = async (req, res) => {
    const { config } = await loadConfig({ cwd });
    const options = await getOptions(config, { cwd });
    const result = await pack(options, { fs, cwd });

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
    entry: `${LOADER}?${q}!`
  };
}

function pack(options, { fs }) {
  return new Promise((resolve, reject) => {
    options.output = {
      filename: "pack.js",
      library: "patternplate",
      libraryTarget: "window",
      path: "/"
    };

    const compiler = webpack(options);
    compiler.outputFileSystem = fs;

    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      const info = stats.toJson();

      if (info.errors.length > 0) {
        return reject(info.errors);
      }

      if (info.warnings.length > 0) {
        console.warn(info.warnings);
      }

      resolve(fs.readFileSync("/pack.js"));
    });
  });
}
