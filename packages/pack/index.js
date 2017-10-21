const MemoryFS = require("memory-fs");
const webpack = require("webpack");

module.exports = function pack(options) {
  const fs = new MemoryFS();

  return new Promise((resolve, reject) => {
    options.output.filename = "pack.js";
    options.output.path = "/";

    const compiler = webpack(options);
    compiler.outputFileSystem = fs;

    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      const info = stats.toJson();

      if (info.errors.length > 0) {
        return reject(info.errors);
      }

      if (info.warnings.length > 0) {
        console.warn(info.warnings);
      }

      resolve(fs.readFileSync("/pack.js"));
    });
  });
};
