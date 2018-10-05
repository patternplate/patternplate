import { cascadeResolve } from "./cascade-resolve";
import { webpackEntry } from "@patternplate/webpack-entry";
import * as Types from "@patternplate/types";
import * as webpack from "webpack";

import MemoryFS = require("memory-fs");
const nodeExternals = require("webpack-node-externals");

const TO_STRING_LOADER = require.resolve("to-string-loader");
const CSS_LOADER = require.resolve("css-loader");
const HTML_LOADER = require.resolve("html-loader");
const COVER = require.resolve("@patternplate/cover-client");
const DEMO = require.resolve("@patternplate/demo-client");
const PROBE = require.resolve("@patternplate/probe-client");

export interface CompilerOptions {
  cwd: string;
  config: Types.PatternplateConfig;
  target: Types.CompileTarget;
}

export async function compiler(options: CompilerOptions): Promise<webpack.Compiler> {
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
          prope: PROBE
        };

  if (typeof config.cover === "string") {
    entry.cover = cascadeResolve(config.cover, { bases, cwd });
  }

  const compiler = webpack({
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
      filename: `patternplate.${options.target}.[name].js`
    }
  });

  compiler.outputFileSystem = fs;
  return compiler;
}

export default compiler;
