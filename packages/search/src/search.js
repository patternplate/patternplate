const Fuse = require("fuse.js");

module.exports = {
  create
};

function create(items) {
  return new Fuse(items, {
    id: "id",
    keys: [
      "id",
      "contents",
      "manifest.displayName",
      "manifest.description",
      "manifest.name",
      "manifest.version",
      "manifest.tags",
      "manifest.flag"
    ]
  });
}
