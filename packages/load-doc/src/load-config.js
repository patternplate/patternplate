const globby = require("globby");
const sander = require("@marionebl/sander");

const FILES = ["README.md", "readme.md", "index.md"];

module.exports = loadDoc;

async function loadDoc({ cwd }) {
  const [file] = await globby(FILES, { cwd });
  if (!file) {
    return null;
  }
  return sander.readFile(cwd, file);
}
