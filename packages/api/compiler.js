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

  const observable = new Observable(observer => {
    let run = defer();
    observer.next(run);

    compiler.plugin("compile", () => {
      debug("compile", target);
      run = defer();
      observer.next(run);
    });

    compiler.plugin("done", (stats) => {
      if (stats.compilation.errors && stats.compilation.errors.length > 0) {
        debug("error", target);
        return run.reject(new Error(stats.compilation.errors));
      }
      debug("done", target);
      run.resolve(fs);
    });

    compiler.plugin("failed", err => {
      debug("failed", target);
      run.reject(err);
    });
  });

  observable.compiler = compiler;

  setTimeout(() => {
    compiler.watch({}, () => {});
  });

  return observable;
}

function getEntry(id, { filepath }) {
  const base = filepath ? path.dirname(filepath) : process.cwd();
  return resolveFrom(base, id);
}

function defer() {
  let res;
  let rej;

  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  promise.resolve = res;
  promise.reject = rej;

  return promise;
}
