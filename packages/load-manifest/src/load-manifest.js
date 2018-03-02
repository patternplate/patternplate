const sander = require("@marionebl/sander");

const PATTERNPLATE_ERR_NO_MANIFEST = 'PATTERNPLATE_ERR_NO_MANIFEST';

module.exports = {
  PATTERNPLATE_ERR_NO_MANIFEST,
  loadManifest
};

const map = fn => Promise.all(['pattern.json', 'package.json'].map(fn));

async function loadManifest(dir) {
  if (typeof dir !== "string") {
    throw new Error(`load-manifest dir expects string, received ${dir}, typeof ${dir}`);
  }

  const files = await map(f => sander.exists(dir, f));

  if (!files.some(Boolean)) {
    const err = new Error(`load-manifest could not find pattern.json, package.json in ${dir}`);
    err.errno = PATTERNPLATE_ERR_NO_MANIFEST;
    throw err;
  }
}
