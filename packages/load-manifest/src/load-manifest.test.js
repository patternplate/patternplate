const fixturez = require("fixturez");
const {PATTERNPLATE_ERR_NO_MANIFEST} = require("./load-manifest");
const {loadManifest} = require("./load-manifest");

const f = fixturez(__dirname);

test("throws for empty input", async () => {
  await expect(loadManifest()).rejects.toMatchObject({
    message: expect.stringContaining("expects string")
  })
});

test("throws for missing file", async () => {
  const cwd = f.copy("empty");

  await expect(loadManifest(cwd)).rejects.toMatchObject({
    message: expect.stringContaining("could not find"),
    errno: PATTERNPLATE_ERR_NO_MANIFEST
  })
});
