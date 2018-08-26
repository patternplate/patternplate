const Fs = require("fs");
const path = require("path");
const webpackEntry = require("@patternplate/webpack-entry");
const MemoryFS = require("memory-fs");
const resolveFrom = require("resolve-from");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const readPkg = require("read-pkg");
const querystring = require("querystring");

module.exports = compiler;

const TO_STRING_LOADER = require.resolve("to-string-loader");
const CSS_LOADER = require.resolve("css-loader");
const HTML_LOADER = require.resolve("html-loader");

const COVER_LOADER = require.resolve("./cover-loader");
const DEMO_LOADER = require.resolve("./demo-loader");

async function compiler(options) {
  const fs = new MemoryFS();
  const { config, cwd } = options;

  const components = await webpackEntry(config.entry, { cwd });
  const entry = { components };
  const bases = [cwd, process.cwd()].filter(Boolean);

  const render = cascadeResolve(config.render, { bases, cwd });
  const mount = cascadeResolve(config.mount, { bases, cwd });

  if (options.target === "node") {
    entry.render = render;
  }

  if (options.target === "web") {
    entry["demo-client"] = `${DEMO_LOADER}?${querystring.stringify({
      options: JSON.stringify({
        entry: config.entry,
        mount,
        cwd
      })
    })}!`;
  }

  if (typeof config.cover === "string") {
    const cover = cascadeResolve(config.cover, { bases, cwd });

    if (options.target === "node") {
      entry.cover = cover;
    }

    if (options.target === "web") {
      entry["cover-client"] = `${COVER_LOADER}?${querystring.stringify({
        cover,
        mount
      })}!`;
    }
  }

  const webpackOptions = {
    entry,
    target: options.target,
    externals: options.target === "node" ? [nodeExternals()] : [],
    mode: "development",
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
      filename: `patternplate.${options.target}.[name].js`,
      publicPath: "/api/"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };

  const compiler = webpack(webpackOptions);

  compiler.outputFileSystem = fs;
  return compiler;
}

function cascadeResolve(id, { bases, cwd }) {
  const result = bases.reduce((resolved, base) => {
    if (resolved) {
      return resolved;
    }
    return (resolveFrom.silent || resolveFrom)(base, id);
  }, "");

  if (typeof result !== "string") {
    // Relative require path
    if (id.charAt(0) === "." || id.charAt(0) === "/") {
      const pathBases = bases.map(base => path.join(base, id));
      throw new Error(
        `Relatively required file "${id}" does not exist at ${pathBases.join(
          ", "
        )}`
      );
    }

    // Global require path
    const pkg = getPkg(cwd) || {};
    const deps = Object.keys(pkg.dependencies || {});
    const devDeps = Object.keys(pkg.devDependencies || {});

    if (
      deps.indexOf(id) === -1 &&
      devDeps.indexOf(id) === -1 &&
      !Fs.existsSync(path.join(cwd, "lerna.json"))
    ) {
      throw new Error(
        `"${id}" is not installed as dependency at ${cwd}/package.json. Please make sure to install it via npm.`
      );
    }

    const fragments = id.split("/");
    const pkgFragments =
      id.charAt(0) === "@" ? fragments.slice(0, 2) : fragments.slice(0, 1);

    const pkgId = pkgFragments.join("/");
    const pkgManifest = resolveFrom.silent(process.cwd(), `${pkgId}/package`);

    if (pkgManifest) {
      const pkg = require(pkgManifest);
      throw new Error(
        `"${pkgId}" can be resolved, but "${id.replace(
          pkgId,
          ""
        )}" is not available, it might be corrupted.\nPlease reinstall your node_modules and file an issue at ${pkg
          .bugs.url} if the problem persists.`
      );
    } else {
      throw new Error(`Could not resolve "${id}" from ${bases.join(", ")}`);
    }
  }

  return result;
}

const getPkg = (...args) => {
  try {
    return readPkg.sync(...args);
  } catch (err) {
    return null;
  }
};
