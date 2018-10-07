import * as Fuse from "fuse.js";

export function create(items): Fuse {
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
