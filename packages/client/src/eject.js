const fs = require("fs");
const path = require("path");
const MemoryFileSystem = require("memory-fs");
const globby = require("globby");

module.exports = eject;

function eject() {
  const vfs = new MemoryFileSystem();
  vfs.mkdirpSync("/static");

  if (process.env.BUNDLE === "@patternplate/cli") {
    const ctx = require.context("raw-loader!./static", true, /.js$/);

    ctx.keys().forEach(key => vfs.writeFileSync(path.join("/static", key), ctx(key)));

  } else {
    const files = globby.sync(["*.js"], {cwd: path.join(__dirname, "static")});

    files.forEach(file => {
      const source = path.join(__dirname, "static", file); ;
      const target = path.join("/static", file);
      vfs.writeFileSync(target, fs.readFileSync(source));
    });
  }

  return vfs;
}
