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
    entry.demo = require.resolve('./demo.client.js');
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

  const observable = new Observable(observer => {
    if (queue.length > 0) {
      return;
    }

    compiler.plugin("compile", () => {
      debug("compile", target);
      queue.unshift({type: 'start'});
      observer.next(queue);
    });

    compiler.plugin("done", (stats) => {
      if (stats.compilation.errors && stats.compilation.errors.length > 0) {
        debug("error", target);
        queue.unshift({type: 'error', payload: stats.compilation.errors});
        return observer.next(queue);
      }
      queue.unshift({type: 'done', payload: {fs}});
      observer.next(queue);
    });

    compiler.plugin("failed", err => {
      debug("failed", target);
      queue.unshift({type: 'error', payload: err});
      observer.next(queue);
    });

    compiler.watch({}, (err, stats) => {
      if (err) {
        debug("inital:failed", target);
        queue.unshift({type: 'error', payload: err});
        observer.next(queue);
      }

      if (stats.compilation.errors && stats.compilation.errors.length > 0) {
        debug("inital:error", target);
        queue.unshift({type: 'error', payload: stats.compilation.errors});
        return observer.next(queue);
      }

      debug("inital:done", target);
      queue.unshift({type: 'done', payload: {fs}});
      observer.next(queue);
    });
  });

  observable.compiler = compiler;
  observable.queue = queue;

  return observable;
}

function getEntry(id, { filepath }) {
  const base = filepath ? path.dirname(filepath) : process.cwd();
  return resolveFrom(base, id);
}
