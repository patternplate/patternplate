const path = require("path");
const MemoryFileSystem = require("memory-fs");

module.exports = eject;

const ctx = require.context("raw-loader!./static", true, /.js$/);

function eject() {
  const fs = new MemoryFileSystem();
  fs.mkdirpSync("/static");

  ctx.keys().forEach(key => {
    fs.writeFileSync(path.join("/static", key), ctx(key));
  });

  return fs;
}
