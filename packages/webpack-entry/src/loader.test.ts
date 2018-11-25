import * as Fs from "fs";
import * as uuid from "uuid";
import Loader from "./loader";
import * as Test from "./test";

const RESOLVED = "RESOLVED";

jest.mock("resolve-from", () => () => RESOLVED);

jest.mock("fs", (): Partial<typeof Fs> => {
  const MemFs = require("memfs");
  MemFs.fs.set = (data: any) => {
    MemFs.vol.reset();
    MemFs.vol.fromJSON(data)
  };
  return MemFs.fs;
});

const MockFs = Fs as typeof Fs & { set(data: any): void };

test('works with empty directory', async () => {
  const cwd = uuid.v4();
  const options = { entry: ["*"], cwd: `/${cwd}` };

  MockFs.set({ [cwd]: {} });
  const result = await Test.load(Loader, options);

  await expect(result).toBe("");
});

test('works with single file demo', async () => {
  const options = {
    entry: ["**/demo.js"],
    cwd: `/`
  };

  MockFs.set({
    "/demo.js": "module.exports.default = () => {};"
  });

  const result = (await Test.load(Loader, options)).split('\n');

  await expect(result).toEqual(expect.arrayContaining([
    expect.stringContaining("module.exports['demo.js']")
  ]));
});

test('picks up demo css', async () => {
  const options = {
    entry: ["**/demo.js"],
    cwd: `/`
  };

  MockFs.set({
    "/demo.js": "module.exports.default = () => {};",
    "/demo.css": "/* Some CSS */"
  });

  const result = (await Test.load(Loader, options)).split('\n');

  await expect(result).toEqual(expect.arrayContaining([
    expect.stringContaining("module.exports['demo.js'].css")
  ]));
});

test('picks up demo html', async () => {
  const options = {
    entry: ["**/demo.js"],
    cwd: `/`
  };

  MockFs.set({
    "/demo.js": "module.exports.default = () => {};",
    "/demo.html": "<!-- Some HTML -->"
  });

  const result = (await Test.load(Loader, options)).split('\n');

  await expect(result).toEqual(expect.arrayContaining([
    expect.stringContaining("module.exports['demo.js'].html")
  ]));
});

test('works with multiple entries', async () => {
  const options = {
    entry: ["a.js", "b.js"],
    cwd: `/`
  };

  MockFs.set({
    "/a.js": "module.exports.default = 'a'",
    "/b.js": "module.exports.default = 'b"
  });

  const result = (await Test.load(Loader, options)).split('\n');

  await expect(result).toEqual(expect.arrayContaining([
    expect.stringContaining("module.exports['a.js']"),
    expect.stringContaining("module.exports['b.js']"),
  ]));
});
