const path = require("path");
const loadJsonFile = require("load-json-file");
const sander = require("@marionebl/sander");

const PATTERNPLATE_ERR_NO_MANIFEST = 'PATTERNPLATE_ERR_NO_MANIFEST';
const PATTERNPLATE_ERR_MALFORMED_MANIFEST = 'PATTERNPLATE_ERR_MALFORMED_MANIFEST';

const DEFAULT_MANIFEST = {
  displayName: "",
  version: "1.0.0",
  build: true,
  display: true,
  flag: "alpha",
  options: {},
  patterns: {}
};

module.exports = {
  PATTERNPLATE_ERR_NO_MANIFEST,
  PATTERNPLATE_ERR_MALFORMED_MANIFEST,
  loadManifest
};

const map = fn => Promise.all(['package.json', 'pattern.json'].map(fn));

async function loadManifest(dir) {
  if (typeof dir !== "string") {
    throw new Error(`load-manifest dir expects string, received ${dir}, typeof ${dir}`);
  }

  const files = (await map(async f => (await sander.exists(dir, f)) ? f : null)).filter(Boolean);
  const file = files[0];

  if (!file) {
    const err = new Error(`load-manifest could not find pattern.json, package.json in ${dir}`);
    err.errno = PATTERNPLATE_ERR_NO_MANIFEST;
    throw err;
  }

  const fullPath = path.resolve(dir, file);
  const data = await loadJSON(fullPath);

  return Object.assign({}, DEFAULT_MANIFEST, data);
}

async function loadJSON(file) {
  try {
    return await loadJsonFile(file);
  } catch (err) {
    err.errno = PATTERNPLATE_ERR_MALFORMED_MANIFEST;
    throw err;
  }
}
