import { cascadeResolve } from "./cascade-resolve";
import { webpackEntry } from "@patternplate/webpack-entry";
import * as Types from "@patternplate/types";
import * as webpack from "webpack";
import * as resolveFrom from "resolve-from";

import MemoryFS = require("memory-fs");
const nodeExternals = require("webpack-node-externals");
const resolve = ((resolveFrom as any).silent || resolveFrom);

export interface CompilerOptions {
  cwd: string;
  config: Types.PatternplateConfig;
  target: Types.CompileTarget;
}

export async function compiler(options: CompilerOptions): Promise<webpack.Compiler> {
  const TO_STRING_LOADER = resolve(__dirname, "to-string-loader");
  const CSS_LOADER = resolve(__dirname, "css-loader");
  const HTML_LOADER = resolve(__dirname, "html-loader");
  const COVER = resolve(__dirname, "@patternplate/cover-client");
  const DEMO = resolve(__dirname, "@patternplate/demo-client");
  const PROBE = resolve(__dirname, "@patternplate/probe-client");

  const fs = new MemoryFS();
  const { config, cwd } = options;

  const components = await webpackEntry(config.entry, { cwd });
  const bases = [cwd, process.cwd()].filter(Boolean);

  const render = cascadeResolve(config.render, { bases, cwd });
  const mount = cascadeResolve(config.mount, { bases, cwd });

  const entry: webpack.Configuration["entry"] =
    options.target === "node"
      ? { components, render }
      : {
          components,
          "cover-client": COVER,
          demo: DEMO,
          mount: mount,
          probe: PROBE
        };

  if (typeof config.cover === "string") {
    entry.cover = cascadeResolve(config.cover, { bases, cwd });
  }

  const compiler = webpack({
    entry,
    target: options.target,
    externals: options.target === "node" ?nodeExternals() : [],
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
      filename: `patternplate.${options.target}.[name].js`
    }
  });

  compiler.outputFileSystem = fs;
  return compiler;
}

export default compiler;
