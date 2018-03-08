const path = require("path");
const loadConfig = require("@patternplate/load-config");
const webpackEntry = require("@patternplate/webpack-entry");
const MemoryFS = require("memory-fs");
const resolveFrom = require("resolve-from");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = compiler;

const TO_STRING_LOADER = require.resolve("to-string-loader");
const CSS_LOADER = require.resolve("css-loader");
const HTML_LOADER = require.resolve("html-loader");
const DEMO = require.resolve("@patternplate/demo-client");
const PROBE = require.resolve("@patternplate/probe-client");

async function compiler(options) {
  const fs = new MemoryFS();
  const { config, filepath } = await loadConfig({ cwd: options.cwd });
  const cwd = typeof filepath === "string" ? path.dirname(filepath) : options.cwd;

  const components = await webpackEntry(config.entry, { cwd });
  const entry = { components };
  const bases = [cwd, process.cwd()].filter(Boolean);

  if (options.target === "node") {
    entry.render = cascadeResolve(config.render, {bases});
  }

  if (options.target === "web") {
    entry.mount = cascadeResolve(config.mount, {bases});
    entry.demo = DEMO;
    entry.probe = PROBE;

    if (config.cover) {
      entry.cover = cascadeResolve(config.cover, {bases});
    }
  }

  const compiler = webpack({
    entry,
    target: options.target,
    externals: options.target === "node" ? [nodeExternals()] : [],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [TO_STRING_LOADER, CSS_LOADER]
        },
        {
          test: /\.html$/,
          use: [HTML_LOADER]
        }
      ]
    },
    output: {
      library: "patternplate-[name]",
      libraryTarget: options.target === "node" ? "commonjs2" : "window",
      path: "/",
      filename: `patternplate.${options.target}.[name].js`
    },
    // Disabled due to inconsistencies with chunking
    // plugins:
    //   options.target === "web"
    //     ? [
    //         new webpack.optimize.CommonsChunkPlugin({
    //           name: "vendors",
    //           minChunks: mod =>
    //             mod.context && mod.context.indexOf("node_modules") > -1
    //         })
    //       ]
    //     : []
  });

  compiler.outputFileSystem = fs;
  return compiler;
}

function cascadeResolve(id, {bases}) {
  const result = bases.reduce((resolved, base) => {
    if (resolved) {
      return resolved;
    }
    return (resolveFrom.silent || resolveFrom)(base, id);
  }, '');

  if (typeof result !== "string") {
    throw new Error(`Could not resolve "${id}" from ${bases.join(", ")}`);
  }

  return result;
}
