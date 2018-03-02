const fixturez = require("fixturez");
const errors = require("./load-manifest");
const {loadManifest} = require("./load-manifest");

const f = fixturez(__dirname);

test("throws for missing input", async () => {
  await expect(loadManifest()).rejects.toMatchObject({
    message: expect.stringContaining("expects string")
  });
});

test("throws for missing file", async () => {
  const cwd = f.copy("missing");

  await expect(loadManifest(cwd)).rejects.toMatchObject({
    message: expect.stringContaining("could not find"),
    errno: errors.PATTERNPLATE_ERR_NO_MANIFEST
  });
});

test("throws for malformed file", async () => {
  const cwd = f.copy("malformed");

  await expect(loadManifest(cwd)).rejects.toMatchObject({
    message: expect.stringContaining("Unexpected token"),
    errno: errors.PATTERNPLATE_ERR_MALFORMED_MANIFEST
  });
});

test("throws for empty file", async () => {
  const cwd = f.copy("empty");

  await expect(loadManifest(cwd)).rejects.toMatchObject({
    message: expect.stringContaining("Unexpected end"),
    errno: errors.PATTERNPLATE_ERR_MALFORMED_MANIFEST
  });
});

test("returns default data for empty data", async () => {
  const cwd = f.copy("empty-data");

  const result = await loadManifest(cwd);

  expect(result).toMatchObject({
    version: "1.0.0",
    flag: "alpha"
  });
});
