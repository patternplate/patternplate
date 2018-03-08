const path = require("path");
const loadConfig = require("@patternplate/load-config");
const webpackEntry = require("@patternplate/webpack-entry");
const MemoryFS = require("memory-fs");
const resolveFrom = require("resolve-from");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = compiler;

async function compiler(options) {
  const fs = new MemoryFS();
  const { config, filepath } = await loadConfig({ cwd: options.cwd });
  const cwd = typeof filepath === "string" ? path.dirname(filepath) : options.cwd;

  const components = await webpackEntry(config.entry, { cwd });
  const entry = { components };
  const bases = [__dirname, cwd, this.context, process.cwd()].filter(Boolean);

  if (options.target === "node") {
    entry.render = cascadeResolve(config.render, {bases: [cwd, __dirname]});
  }

  if (options.target === "web") {
    entry.mount = cascadeResolve(config.mount, {bases: [cwd, __dirname]});
    entry.demo = cascadeResolve("@patternplate/demo-client", {bases});
    entry.probe = cascadeResolve("@patternplate/probe-client", {bases});
  }

  const toStringLoader = cascadeResolve("to-string-loader", {bases});
  const cssLoader = cascadeResolve("css-loader", {bases});
  const htmlLoader = cascadeResolve("html-loader", {bases});

  const compiler = webpack({
    entry,
    target: options.target,
    externals: options.target === "node" ? [nodeExternals()] : [],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [toStringLoader, cssLoader]
        },
        {
          test: /\.html$/,
          use: [htmlLoader]
        }
      ]
    },
    output: {
      library: "patternplate-[name]",
      libraryTarget: options.target === "node" ? "commonjs2" : "window",
      path: "/",
      filename: `patternplate.${options.target}.[name].js`
    },
    plugins:
      options.target === "web"
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

function cascadeResolve(id, {bases}) {
  const result = bases.reduce((resolved, base) => {
    if (resolved) {
      return resolved;
    }
    return resolveFrom(base, id);
  }, '');

  if (typeof result !== "string") {
    throw new Error(`Could not resolve "${id}" from ${bases.join(", ")}`);
  }

  return result;
}
