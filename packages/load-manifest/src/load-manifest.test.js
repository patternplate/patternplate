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
