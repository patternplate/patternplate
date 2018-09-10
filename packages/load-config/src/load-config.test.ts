import loadConfig from "./load-config";
import * as Fs from "fs";
import * as uuid from "uuid";

jest.mock("fs", (): Partial<typeof Fs> => {
  const MemFs = require("memfs");
  MemFs.fs.set = (data: any) => MemFs.vol.fromJSON(data);
  return MemFs.fs;
});

const MockFs = Fs as typeof Fs & { set(data: any): void };

test("defaults to expected config", async () => {
  const result = await loadConfig({ cwd: process.cwd() });

  expect(result).toEqual(
    expect.objectContaining({
      config: expect.objectContaining({
        docs: expect.arrayContaining(["docs/**/*.md", "README.md"]),
        entry: expect.arrayContaining(["lib/**/demo.js"]),
        mount: expect.stringContaining("render-default/mount"),
        render: expect.stringContaining("render-default/render")
      }),
      filepath: null
    })
  );
});

test("reads patternplate.config.js", async () => {
  const data = { [uuid.v4()]: uuid.v4() };

  MockFs.set({
    "/patternplate.config.js": `module.exports = ${JSON.stringify(data)}`
  });

  expect(await loadConfig({ cwd: "/" })).toEqual(
    expect.objectContaining({
      config: expect.objectContaining(data),
      filepath: "/patternplate.config.js"
    })
  );
});

test("throws for invalid js", async () => {
  MockFs.set({
    "/patternplate.config.js": `throw new Error('boerks');`
  });

  expect(loadConfig({ cwd: "/" })).rejects.toThrow("boerks");
});

test("filters unknown data if sanitizing", async () => {
  const data = { [uuid.v4()]: uuid.v4() };

  MockFs.set({
    "/patternplate.config.js": `module.exports = ${JSON.stringify(data)}`
  });

  expect((await loadConfig({ cwd: "/", sanitize: true })).config).not.toEqual(
    expect.objectContaining(data)
  );
});
