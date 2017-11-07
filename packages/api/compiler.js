const path = require("path");
const globby = require("globby");
const resolveFrom = require("resolve-from");
const querystring = require("querystring");
const loadConfig = require("@patternplate/load-config");
const webpack = require("webpack");

const LOADER = require.resolve("./loader");

module.exports = createCompiler;

async function createCompiler({ cwd, fs, target = "" }) {
  const config = await loadConfig({ cwd });

  const components = await getBundleEntry(config.config, { cwd });
  const render = await getRenderEntry(config.config, {
    filepath: config.filepath
  });
  const mount = await getMountEntry(config.config, {
    filepath: config.filepath
  });

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

function getMountEntry(config, { filepath }) {
  const base = filepath ? path.dirname(filepath) : process.cwd();
  return resolveFrom(base, config.mount);
}

function getRenderEntry(config, { filepath }) {
  const base = filepath ? path.dirname(filepath) : process.cwd();
  return resolveFrom(base, config.render);
}
