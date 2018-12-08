import { compiler as createCompiler } from "./compiler";
import { CompileTarget } from "@patternplate/types";
import * as Fs from "fs";
import { Compiler, OutputFileSystem } from "webpack";

jest.mock("./cascade-resolve", () => ({
  cascadeResolve(id: string) {
    return `/${id}`;
  }
}));

jest.mock("resolve-from", () => ({
  silent: (_: unknown, id: string) => `/${id}`
}));

jest.mock("@patternplate/webpack-entry", () => ({
  webpackEntry: async (entry: string[], { cwd }: { cwd: string }) => {
    return "/components.js";
  }
}));

jest.mock("webpack-node-externals", () => () => []);

jest.mock("fs", (): Partial<typeof Fs> => {
  const MemFs = require("memfs");
  MemFs.fs.set = (data: any) => MemFs.vol.fromJSON(data);
  return MemFs.fs;
});

const MockFs = Fs as typeof Fs & { set(data: any): void };

test("should create expected files for web target", async () => {
  MockFs.set({
    "/render.js": "/** render **/",
    "/mount.js": "/** mount **/",
    "/components.js": "/** components **/",
    "/@patternplate/cover-client": "/** cover-client **/",
    "/@patternplate/demo-client": "/** demo-client **/",
    "/@patternplate/probe-client": "/** probe-client **/"
  });

  const compiler = await createCompiler({
    cwd: "/",
    target: CompileTarget.Web,
    config: {
      entry: [],
      docs: [],
      mount: "mount.js",
      render: "render.js"
    }
  });

  const fs = await run(compiler);

  expect(fs.readdirSync("/")).toEqual(
    expect.arrayContaining([
      "patternplate.web.components.js",
      "patternplate.web.cover-client.js",
      "patternplate.web.demo.js",
      "patternplate.web.mount.js",
      "patternplate.web.probe.js"
    ])
  );
});

test("should create expected files for node target", async () => {
  MockFs.set({
    "/render.js": "/** render **/",
    "/mount.js": "/** mount **/",
    "/components.js": "/** components **/",
    "/@patternplate/cover-client": "/** cover-client **/",
    "/@patternplate/demo-client": "/** demo-client **/",
    "/@patternplate/probe-client": "/** probe-client **/"
  });

  const compiler = await createCompiler({
    cwd: "/",
    target: CompileTarget.Node,
    config: {
      entry: [],
      docs: [],
      mount: "mount.js",
      render: "render.js"
    }
  });

  const fs = await run(compiler);

  expect(fs.readdirSync("/")).toEqual(
    expect.arrayContaining([
      "patternplate.node.components.js",
      "patternplate.node.render.js"
    ])
  );
});

function run(compiler: Compiler): Promise<typeof Fs> {
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      if (stats.hasErrors()) {
        reject(stats.toString("errors-only"));
      }

      resolve((compiler.outputFileSystem as any) as typeof Fs);
    });
  });
}
