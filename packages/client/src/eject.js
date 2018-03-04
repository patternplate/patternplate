const path = require("path");
const globby = require("globby");
const micromatch = require("micromatch");
const pkgDir = require("pkg-dir");
const MemoryFileSystem = require("memory-fs");
const sander = require("@marionebl/sander");

module.exports = async function eject(pattern = []) {
  const fs = new MemoryFileSystem();
  const cwd = path.join(await pkgDir(__dirname), "./lib");

  const files = await globby(["**/*"], {cwd});

  await Promise.all(files.map(async file => {
    if (!micromatch.any(file, pattern, { matchBase: true })) {
      return;
    }
    const p = file.charAt(0) === '/' ? file : `/${file}`;
    fs.mkdirpSync(path.dirname(p));
    fs.writeFileSync(p, await sander.readFile(cwd, file));
  }));

  return fs;
};
