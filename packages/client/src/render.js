const path = require("path");
const loadJsonFile = require("load-json-file");
const renderPage = require("./app/render-page");

const MANIFEST_PATH = path.resolve(__dirname, "static", "manifest.json");

module.exports = (url, state) => {
  return loadJsonFile(MANIFEST_PATH)
    .then(manifest => renderPage(url, state, manifest));
}
