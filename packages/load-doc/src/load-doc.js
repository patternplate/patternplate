const path = require("path");
const globby = require("globby");
const sander = require("@marionebl/sander");

const FILES = ["README.md", "readme.md", "index.md"];

module.exports = loadDoc;

async function loadDoc({ cwd }) {
  const [file] = await globby(FILES, { cwd });
  if (!file) {
    return {
      filepath: null,
      contents: null
    };
  }
  return {
    filepath: path.join(cwd, file),
    contents: await sander.readFile(cwd, file)
  }
}
