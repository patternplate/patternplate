const path = require("path");
const loadJsonFile = require("load-json-file");
const sander = require("@marionebl/sander");

const normalize = require("./normalize");

const PATTERNPLATE_ERR_NO_MANIFEST = 'PATTERNPLATE_ERR_NO_MANIFEST';
const PATTERNPLATE_ERR_MALFORMED_MANIFEST = 'PATTERNPLATE_ERR_MALFORMED_MANIFEST';

module.exports = {
  PATTERNPLATE_ERR_NO_MANIFEST,
  PATTERNPLATE_ERR_MALFORMED_MANIFEST,
  loadManifest
};

const map = fn => Promise.all(['package.json', 'pattern.json'].map(fn));

async function loadManifest({cwd}) {
  if (typeof cwd !== "string") {
    throw new Error(`load-manifest cwd expects string, received ${cwd}, typeof ${cwd}`);
  }

  const files = (await map(async f => (await sander.exists(cwd, f)) ? f : null)).filter(Boolean);
  const file = files[0];

  if (!file) {
    const err = new Error(`load-manifest could not find pattern.json, package.json in ${cwd}`);
    err.errno = PATTERNPLATE_ERR_NO_MANIFEST;
    throw err;
  }

  const fullPath = path.resolve(cwd, file);
  const data = await loadJSON(fullPath);

  const isPkg = path.basename(file) === "package.json";
  const isPatternPkg = typeof data.patternplate === "object";
  const needsPattern = isPkg && !isPatternPkg;

  if (needsPattern && files.length === 1) {
    const err = new Error(`load-manifest could not find pattern.json in ${cwd}, package.json contains no patternplate object`);
    err.errno = PATTERNPLATE_ERR_NO_MANIFEST;
    throw err;
  }

  if (needsPattern && files.length === 2) {
    const fullPath = path.resolve(cwd, files[1]);
    const data = await loadJSON(fullPath);
    return {
      file: fullPath,
      manifest: normalize(data, {isPatternPkg})
    };
  }

  return {
    file: fullPath,
    manifest: normalize(data, {isPatternPkg})
  };
}

async function loadJSON(file) {
  try {
    return await loadJsonFile(file);
  } catch (err) {
    err.errno = PATTERNPLATE_ERR_MALFORMED_MANIFEST;
    throw err;
  }
}
