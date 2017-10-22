const path = require("path");
const globby = require("globby");
const resolveFrom = require("resolve-from");
const querystring = require("querystring");
const loadConfig = require("@patternplate/load-config");
const MemoryFS = require("memory-fs");
const webpack = require("webpack");

const LOADER = require.resolve("./loader");

module.exports = createCompiler;

async function createCompiler({ cwd }) {
  const fs = new MemoryFS();
  const config = await loadConfig({ cwd });

  const compiler = webpack({
    entry: {
      components: await getBundleEntry(config.config, { cwd }),
      render: await getRenderEntry(config.config, { filepath: config.filepath })
    },
    output: {
      library: "patternplate-[name]",
      libraryTarget: "window",
      path: "/",
      filename: "patternplate-[name].js"
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendors",
        minChunks: mod =>
          mod.context && mod.context.indexOf("node_modules") > -1
      })
    ]
  });

  compiler.outputFileSystem = fs;

  compiler.watch({}, (err, stats) => {
    if (err) {
      console.error(err);
    }

    const info = stats.toJson();

    if (info.errors.length > 0) {
      console.error(info.errors);
    }

    if (info.warnings.length > 0) {
      console.warn(info.warnings);
    }
  });

  return compiler;
}

async function getBundleEntry(config, { cwd }) {
  const files = await globby(config.entry || [], { cwd });

  const q = querystring.stringify({
    entries: JSON.stringify(
      files.reduce((acc, file) => {
        acc[file] = file;
        return acc;
      }, {})
    )
  });

  return `${LOADER}?${q}!`;
}

function getRenderEntry(config, { filepath }) {
  return resolveFrom(path.dirname(filepath), config.render);
}
