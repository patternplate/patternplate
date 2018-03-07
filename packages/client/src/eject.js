const MemoryFileSystem = require("memory-fs");

module.exports = eject;

function eject() {
  const fs = new MemoryFileSystem();

  fs.mkdirpSync("/static");
  fs.writeFileSync("/static/client.js", require("raw-loader!../lib/static/client.js"));
  fs.writeFileSync("/static/client.js.map", require("raw-loader!../lib/static/client.js.map"));

  fs.writeFileSync("/static/vendors.js", require("raw-loader!../lib/static/vendors.js"));
  fs.writeFileSync("/static/vendors.js.map", require("raw-loader!../lib/static/vendors.js.map"));

  return fs;
}
