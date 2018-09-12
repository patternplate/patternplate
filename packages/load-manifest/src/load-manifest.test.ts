const path = require("path");
const fixturez = require("fixturez");
const errors = require("./load-manifest");
const {loadManifest} = require("./load-manifest");

const f = fixturez(__dirname);

test("throws for missing input", async () => {
  await expect(loadManifest({cwd: null})).rejects.toMatchObject({
    message: expect.stringContaining("expects string")
  });
});

test("throws for missing file", async () => {
  const cwd = f.copy("missing-pattern");

  await expect(loadManifest({cwd})).rejects.toMatchObject({
    message: expect.stringContaining("could not find"),
    errno: errors.PATTERNPLATE_ERR_NO_MANIFEST
  });
});

test("throws for malformed file", async () => {
  const cwd = f.copy("malformed");

  await expect(loadManifest({cwd})).rejects.toMatchObject({
    message: expect.stringContaining("Unexpected token"),
    errno: errors.PATTERNPLATE_ERR_MALFORMED_MANIFEST
  });
});

test("throws for empty file", async () => {
  const cwd = f.copy("empty");

  await expect(loadManifest({cwd})).rejects.toMatchObject({
    message: expect.stringContaining("Unexpected end"),
    errno: errors.PATTERNPLATE_ERR_MALFORMED_MANIFEST
  });
});

test("throws for missing pattern.json next to package.json without options", async () => {
  const cwd = f.copy("missing-pattern");

  await expect(loadManifest({cwd})).rejects.toMatchObject({
    message: expect.stringContaining("contains no patternplate"),
    errno: errors.PATTERNPLATE_ERR_NO_MANIFEST
  });
});

test("returns default data for empty data", async () => {
  const cwd = f.copy("empty-data");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    version: "1.0.0",
    flag: "alpha"
  });
});

test("ignores package.json if not decorated", async () => {
  const cwd = f.copy("pkg-undecorated");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "name": "pattern"
  });
});

test("honors package.json if decorated", async () => {
  const cwd = f.copy("pkg");
  const result = await loadManifest({cwd});

  expect(result.file).toBe(path.join(cwd, "package.json"));
});

test("uses version from package.json", async () => {
  const cwd = f.copy("pkg-version");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "version": "2.0.0"
  });
});

test("discards other data from package.json", async () => {
  const cwd = f.copy("pkg-discard");
  const result = await loadManifest({cwd});

  expect(result.manifest).not.toMatchObject({
    "dependencies": {
      "@patternplate/cli": "1.0.0"
    }
  });
});

test("uses displayName from package.json[patternplate]", async () => {
  const cwd = f.copy("pkg-display-name");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "displayName": "Package"
  });
});

test("uses options from package.json[patternplate]", async () => {
  const cwd = f.copy("pkg-options");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "options": { "some": "thing" }
  });
});

test("uses tags from pattern.json[tags]", async () => {
  const cwd = f.copy("pattern-tags");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "tags": expect.arrayContaining(["a", "b", "c"])
  });
});


test("uses tags from package.json[tags]", async () => {
  const cwd = f.copy("pkg-tags");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "tags": expect.arrayContaining(["a", "b", "c"])
  });
});

test("uses description from pattern.json[description]", async () => {
  const cwd = f.copy("pattern-description");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "description": "pattern"
  });
});


test("uses description from package.json[description]", async () => {
  const cwd = f.copy("pkg-description");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "description": "pkg"
  });
});

test("uses flag from pattern.json[flag]", async () => {
  const cwd = f.copy("pattern-flag");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "flag": "beta"
  });
});

test("uses flag from package.json[patternplate][flag]", async () => {
  const cwd = f.copy("pkg-flag");
  const result = await loadManifest({cwd});

  expect(result.manifest).toMatchObject({
    "flag": "beta"
  });
});
