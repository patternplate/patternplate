const fs = require("fs");
const p = require("path");
const MemoryFileSystem = require("memory-fs");
const globby = require("globby");

const path = p.posix || p;

module.exports = eject;

function eject() {
  const vfs = new MemoryFileSystem();
  vfs.mkdirpSync("/static");

  const files = globby.sync(["*"], {cwd: path.join(__dirname, "static")});

  files.forEach(file => {
    const source = path.join(__dirname, "static", file); ;
    const target = path.join("/static", file);
    vfs.writeFileSync(target, fs.readFileSync(source));
  });

  return vfs;
}
