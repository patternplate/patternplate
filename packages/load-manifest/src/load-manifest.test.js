const {loadManifest} = require("./load-manifest");

test("throws for empty input", async () => {
  await expect(loadManifest()).rejects.toMatchObject({
    message: expect.stringContaining("expects string")
  })
});
