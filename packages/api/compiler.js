const path = require("path");
const resolveFrom = require("resolve-from");
const loadConfig = require("@patternplate/load-config");
const webpackEntry = require("@patternplate/webpack-entry");
const webpack = require("webpack");

module.exports = createCompiler;

async function createCompiler({ cwd, fs, target = "" }) {
  const { config, filepath } = await loadConfig({ cwd });

  const components = await webpackEntry(config.entry, { cwd });

  const render = await getEntry(config.render, { filepath });
  const mount = await getEntry(config.mount, { filepath });

  const entry = { components, mount, render };

  const compiler = webpack({
    entry,
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
        : [],
    resolve:
      target === "web"
        ? {
            aliasFields: ["browser"]
          }
        : {}
  });

  compiler.outputFileSystem = fs;
  compiler.watch({}, () => {});

  return compiler;
}

function getEntry(id, { filepath }) {
  const base = filepath ? path.dirname(filepath) : process.cwd();
  return resolveFrom(base, id);
}
