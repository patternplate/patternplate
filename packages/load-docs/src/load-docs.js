const path = require("path");
const frontmatter = require("front-matter");
const globby = require("globby");
const { merge } = require("lodash");
const remark = require("remark");
const find = require("unist-util-find");
const sander = require("@marionebl/sander");
const shortid = require("shortid");

const DEFAULT_MANIFEST = {
  version: "1.0.0",
  flag: "alpha",
  options: {}
};

module.exports = loadDocs;
module.exports.loadDocsTree = loadDocsTree;

async function loadDocs(options) {
  const files = await globby([...options.docs], {
    cwd: options.cwd
  });

  return await Promise.all(
    files.map(async file => {
      const raw = await sander.readFile(options.cwd, file);
      const contents = raw ? String(raw) : '';
      const ast = remark().parse(contents);
      const first = find(ast, { type: "heading", depth: 1 });

      const front = frontmatter(contents).attributes;
      const manifest = merge({}, DEFAULT_MANIFEST, front);

      const b = path.basename(file, path.extname(file)).toLowerCase();
      const name = b === "readme" ? path.dirname(file) : b;

      manifest.name = manifest.name || (first ? (first.children[0].value || '').replace(/[^\w]/g, '-') : (manifest.name || shortid.generate())).toLowerCase();
      manifest.displayName = manifest.displayName || (first ? first.children[0].value : name);

      const rawPath = path.join(path.dirname(file), path.basename(file, path.extname(file)));
      const id = rawPath.split(path.sep).join("/");

      return {
        id,
        contents,
        contentType: "doc",
        path: file,
        manifest,
        rawManifest: front
      };
    })
  );
}

async function loadDocsTree(options) {
  return {
    id: "root",
    children: await loadDocs(options),
    type: "root"
  };
}
