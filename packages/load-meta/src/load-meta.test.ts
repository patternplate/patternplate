import * as Fs from "fs";
import * as uuid from "uuid";
import { loadMeta, PATTERNPLATE_ERROR_DUPE_PATTERN } from "./load-meta";

jest.mock("fs", (): Partial<typeof Fs> => {
  const MemFs = require("memfs");
  MemFs.fs.set = (data: any) => {
    MemFs.vol.reset();
    MemFs.vol.fromJSON(data);
  };
  return MemFs.fs;
});

const MockFs = Fs as typeof Fs & { set(data: any): void };

test("returns empty lists for empty dir", async () => {
  MockFs.set({});
  const result = await loadMeta({ entry: [], cwd: "/" });

  expect(result).toEqual({
    errors: [],
    patterns: []
  });
});

test("ignores errors for missing manifests", async () => {
  const demo = uuid.v4();

  MockFs.set({
    "/demo.js": demo,
    "/a/demo.js": demo
  });

  const result = await loadMeta({ entry: ["**/demo.js"], cwd: "/" });
  expect(result.errors).toHaveLength(0);
  expect(result.patterns).toHaveLength(0);
});

test("returns errors for invalid json", async () => {
  const demo = uuid.v4();

  MockFs.set({
    "/demo.js": demo,
    "/pattern.json": "boerks",
    "/a/demo.js": demo,
    "/a/package.json": "murks"
  });

  const result = await loadMeta({ entry: ["**/demo.js"], cwd: "/" });
  expect(result.errors).toHaveLength(2);
  expect(result.patterns).toHaveLength(0);
});

test("returns appropriate error for invalid json", async () => {
  const demo = uuid.v4();

  MockFs.set({
    "/demo.js": demo,
    "/pattern.json": "boerks"
  });

  const result = await loadMeta({ entry: ["**/demo.js"], cwd: "/" });
  expect(result.errors).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        message: expect.stringContaining("boerks")
      })
    ])
  );
});

test("returns errors for duplicate patterns", async () => {
  const demo = uuid.v4();

  MockFs.set({
    "/a/demo.js": demo,
    "/a/pattern.json": JSON.stringify({ name: "ab" }),
    "/b/demo.js": demo,
    "/b/pattern.json": JSON.stringify({ name: "ab" }),
  });

  const result = await loadMeta({ entry: ["**/demo.js"], cwd: "/" });

  expect(result.errors).toEqual([
    expect.objectContaining({
      message: expect.stringContaining("duplicated pattern \"ab\""),
      errno: PATTERNPLATE_ERROR_DUPE_PATTERN
    })
  ]);
});

test("matches non-demo glob patterns", async () => {
  const demo = uuid.v4();

  MockFs.set({
    "/a/demo.js": demo,
    "/a/pattern.json": JSON.stringify({ name: "a" }),
    "/b/pattern.js": demo,
    "/b/pattern.json": JSON.stringify({ name: "b" }),
  });

  const result = await loadMeta({ entry: ["**/pattern.js"], cwd: "/" });

  expect(result.patterns).toEqual([
    expect.objectContaining({
      manifest: expect.objectContaining({
        name: "b"
      })
    })
  ]);
});
