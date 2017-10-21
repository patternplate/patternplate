const path = require("path");
const frontmatter = require("front-matter");
const globby = require("globby");
const { merge } = require("lodash");
const remark = require("remark");
const find = require("unist-util-find");
const sander = require("@marionebl/sander");

const DEFAULT_MANIFEST = {
  version: "1.0.0",
  flag: "alpha",
  options: {}
};

module.exports = loadDocs;
module.exports.loadDocsTree = loadDocsTree;

async function loadDocs(options) {
  const files = await globby([...options.docs, `!${options.readme}`], {
    cwd: options.cwd
  });

  return await Promise.all(
    files.map(async file => {
      const contents = String(await sander.readFile(options.cwd, file));
      const ast = remark().parse(contents);
      const first = find(ast, { type: "heading", depth: 1 });

      const front = frontmatter(contents).attributes;
      const manifest = merge({}, DEFAULT_MANIFEST, front);

      const b = path.basename(file, path.extname(file)).toLowerCase();
      const name = b === "readme" ? path.dirname(file) : b;

      manifest.name = first ? first.children[0].value : name;
      manifest.displayName = manifest.displayName || manifest.name;

      return {
        contents,
        path: file,
        manifest
      };
    })
  );
}

async function loadDocsTree(options) {
  return treeFromPaths(await loadDocs(options));
}

async function treeFromPaths(files) {
  const tree = {
    id: "root",
    children: [],
    type: "doc"
  };

  files.forEach(file => {
    const parts = file.path.split("/");
    let level = tree;

    parts.forEach((part, i) => {
      const existing = level.children.find(c => c.name === part);

      if (existing) {
        level = existing;
        return;
      }

      const id = parts.slice(0, i + 1).join("/");
      const sid = path.join(
        path.dirname(id),
        path.basename(id, path.extname(id))
      );

      const item = {
        name: path.basename(part, path.extname(part)),
        manifest: file.manifest,
        contents: file.contents,
        id: sid,
        path: sid.split("/"),
        type: path.extname(part) ? "doc" : "folder"
      };

      if (item.type === "folder") {
        item.children = [];
      }

      if (part.toLowerCase() === "readme.md") {
        level.contents = file.contents;
        level.manifest = file.manifest;
      } else {
        level.children.push(item);
        level = item;
      }
    });
  });

  return tree;
}
