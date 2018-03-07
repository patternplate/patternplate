const path = require("path");
const globby = require("globby");
const mm = require("micromatch");
const pkgDir = require("pkg-dir");
const MemoryFileSystem = require("memory-fs");
const resolvePkg = require("resolve-pkg");
const sander = require("@marionebl/sander");

const self = resolvePkg("@patternplate/client");

module.exports = async function eject(pattern = []) {
  const fs = new MemoryFileSystem();
  const cwd = path.join(self, "./lib");
  const files = await globby(["**/*"], {cwd});

  await Promise.all(files.map(async file => {
    if (!mm(file, pattern, {basename: true})) {
      return;
    }
    const p = file.charAt(0) === '/' ? file : `/${file}`;
    fs.mkdirpSync(path.dirname(p));
    fs.writeFileSync(p, await sander.readFile(cwd, file));
  }));

  return fs;
};
