const path = require("path");
const loadConfig = require("@patternplate/load-config");
const webpackEntry = require("@patternplate/webpack-entry");
const MemoryFS = require("memory-fs");
const resolveFrom = require("resolve-from");
const webpack = require("webpack");

module.exports = compiler;

async function compiler({ cwd, target = "" }) {
  const fs = new MemoryFS();
  const { config, filepath } = await loadConfig({ cwd });

  const components = await webpackEntry(config.entry, { cwd });
  const entry = { components };

  if (target === "node") {
    entry.render = await getEntry(config.render, { filepath });
  }

  if (target === "web") {
    entry.mount = await getEntry(config.mount, { filepath });
    entry.demo = require.resolve("@patternplate/demo-client");
    entry.probe = require.resolve("@patternplate/probe-client")
  }

  const compiler = webpack({
    entry,
    target,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["to-string-loader", "css-loader"]
        },
        {
          test: /\.html$/,
          use: ["html-loader"]
        }
      ]
    },
    output: {
      library: "patternplate-[name]",
      libraryTarget: target === "node" ? "commonjs2" : "window",
      path: "/",
      filename: `patternplate.${target}.[name].js`
    },
    plugins:
      target === "web"
        ? [
            new webpack.optimize.CommonsChunkPlugin({
              name: "vendors",
              minChunks: mod =>
                mod.context && mod.context.indexOf("node_modules") > -1
            })
          ]
        : []
  });

  compiler.outputFileSystem = fs;
  return compiler;
}

async function getEntry(id, { filepath }) {
  const base = filepath ? path.dirname(filepath) : process.cwd();
  return resolveFrom(base, id);
}
