const path = require("path");
const loadConfig = require("@patternplate/load-config");
const webpackEntry = require("@patternplate/webpack-entry");
const MemoryFS = require("memory-fs");
const resolveFrom = require("resolve-from");
const webpack = require("webpack");
const Observable = require("zen-observable");

module.exports = createCompiler;

const debug = require("util").debuglog("PATTERNPLATE");

async function createCompiler({ cwd, target = "" }) {
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

  const queue = [];
  let listeners = [];
  const next = (message) => listeners.forEach(listener => listener.next(message));

  compiler.plugin("compile", () => {
    debug("compile", target);
    queue.unshift({type: 'start', target, payload: {}});
    next(queue);
  });

  compiler.plugin("done", (stats) => {
    if (stats.compilation.errors && stats.compilation.errors.length > 0) {
      debug("error", target);
      queue.unshift({type: 'error', target, payload: stats.compilation.errors});
      return next(queue);
    }
    debug("done", target);
    queue.unshift({type: 'done', target, payload: {fs}});
    next(queue);
  });

  compiler.plugin("failed", err => {
    debug("failed", target);
    queue.unshift({type: 'error', target, payload: err});
    next(queue);
  });

  let watching = false;

  const observable = new Observable(observer => {
    if (!watching) {
      watching = true;
      compiler.watch({ignored: "**/pattern.json"}, () => {});
    }

    listeners.push(observer);
    return () => {
      listeners = listeners.filter(listener => listener !== observer);
    }
  });

  observable.compiler = compiler;
  observable.queue = queue;

  return observable;
}

function getEntry(id, { filepath }) {
  const base = filepath ? path.dirname(filepath) : process.cwd();
  return resolveFrom(base, id);
}
