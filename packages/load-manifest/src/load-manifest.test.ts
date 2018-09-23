import * as Path from "path";
import * as LoadManifest from "./load-manifest";
import * as Fs from "fs";

jest.mock("fs", (): Partial<typeof Fs> => {
  const MemFs = require("memfs");
  MemFs.fs.set = (data: any) => {
    MemFs.vol.reset();
    MemFs.vol.fromJSON(data);
  };
  return MemFs.fs;
});

const MockFs = Fs as typeof Fs & { set(data: any): void };

test("throws for missing input", async () => {
  await expect(LoadManifest.loadManifest({ cwd: null })).rejects.toMatchObject({
    message: expect.stringContaining("expects string")
  });
});

test("throws for missing file", async () => {
  MockFs.set({
    "/package.json": JSON.stringify({ name: "pkg" })
  });

  await expect(LoadManifest.loadManifest({ cwd: "/" })).rejects.toMatchObject({
    message: expect.stringContaining("could not find"),
    errno: LoadManifest.PATTERNPLATE_ERR_NO_MANIFEST
  });
});

test("throws for malformed file", async () => {
  MockFs.set({
    "/package.json": '{ "some": "thing", }'
  });

  await expect(LoadManifest.loadManifest({ cwd: "/" })).rejects.toMatchObject({
    message: expect.stringContaining("Unexpected token"),
    errno: LoadManifest.PATTERNPLATE_ERR_MALFORMED_MANIFEST
  });
});

test("throws for empty file", async () => {
  MockFs.set({
    "/pattern.json": ""
  });

  await expect(LoadManifest.loadManifest({ cwd: "/" })).rejects.toMatchObject({
    message: expect.stringContaining("Unexpected end"),
    errno: LoadManifest.PATTERNPLATE_ERR_MALFORMED_MANIFEST
  });
});

/* test("throws for missing pattern.json next to package.json without options", async () => {
  const cwd = f.copy("missing-pattern");

  await expect(LoadManifest.loadManifest({ cwd })).rejects.toMatchObject({
    message: expect.stringContaining("contains no patternplate"),
    errno: LoadManifest.PATTERNPLATE_ERR_NO_MANIFEST
  });
}); */

test("throws for empty data", async () => {
  MockFs.set({
    "/pattern.json": JSON.stringify({})
  });

  await expect(LoadManifest.loadManifest({ cwd: "/" })).rejects.toMatchObject({
    message: expect.stringContaining("required property 'name'")
  });
});

test("ignores package.json if not decorated", async () => {
  MockFs.set({
    "/package.json": JSON.stringify({ name: "pkg" }),
    "/pattern.json": JSON.stringify({ name: "pattern" })
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    name: "pattern"
  });
});

test("honors package.json if decorated", async () => {
  MockFs.set({
    "/package.json": JSON.stringify({ name: "pkg", patternplate: {} }),
    "/pattern.json": JSON.stringify({ name: "pattern" })
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });
  expect(result.file).toBe("/package.json");
});

test("uses version from package.json", async () => {
  const data = {
    name: "pkg",
    version: "2.0.0",
    patternplate: {}
  };

  MockFs.set({
    "/package.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    version: data.version
  });
});

test("discards other data from package.json", async () => {
  const data = {
    name: "pkg",
    patternplate: {},
    dependencies: {
      "@patternplate/cli": "1.0.0"
    }
  };

  MockFs.set({
    "/package.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).not.toMatchObject({
    dependencies: {
      "@patternplate/cli": "1.0.0"
    }
  });
});

test("uses displayName from package.json[patternplate]", async () => {
  const data = {
    name: "pkg",
    patternplate: {
      displayName: "Package"
    }
  };

  MockFs.set({
    "/package.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    displayName: "Package"
  });
});

test("uses options from package.json[patternplate]", async () => {
  const data = {
    name: "pkg",
    patternplate: {
      options: {
        some: "thing"
      }
    }
  };

  MockFs.set({
    "/package.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    options: { some: "thing" }
  });
});

test("uses tags from pattern.json[tags]", async () => {
  const data = {
    name: "pkg",
    tags: ["a", "b", "c"]
  };

  MockFs.set({
    "/pattern.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    tags: expect.arrayContaining(["a", "b", "c"])
  });
});

test("uses tags from package.json[tags]", async () => {
  const data = {
    name: "pkg",
    tags: ["a", "b", "c"],
    patternplate: {}
  };

  MockFs.set({
    "/package.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    tags: expect.arrayContaining(["a", "b", "c"])
  });
});

test("uses description from pattern.json[description]", async () => {
  const data = {
    name: "pkg",
    description: "pattern"
  };

  MockFs.set({
    "/pattern.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    description: "pattern"
  });
});

test("uses description from package.json[description]", async () => {
  const data = {
    name: "pkg",
    description: "pkg",
    patternplate: {}
  };

  MockFs.set({
    "/package.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    description: "pkg"
  });
});

test("uses flag from pattern.json[flag]", async () => {
  const data = {
    name: "pkg",
    flag: "beta"
  };

  MockFs.set({
    "/pattern.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    flag: data.flag
  });
});

test("uses flag from package.json[patternplate][flag]", async () => {
  const data = {
    name: "pkg",
    patternplate: {
      flag: "beta"
    }
  };

  MockFs.set({
    "/package.json": JSON.stringify(data)
  });

  const result = await LoadManifest.loadManifest({ cwd: "/" });

  expect(result.manifest).toMatchObject({
    flag: "beta"
  });
});
