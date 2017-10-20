const path = require("path");
const url = require("url");
const frontmatter = require("front-matter");
const globby = require("globby");
const { merge, partition, uniq } = require("lodash");
const loadJsonFile = require("load-json-file");
const loadSourceMap = require("load-source-map");
const remark = require("remark");
const find = require("unist-util-find");
const sander = require("@marionebl/sander");
const throat = require("throat");

const DEFAULT_MANIFEST = {
  displayName: "",
  version: "1.0.0",
  build: true,
  display: true,
  flag: "alpha",
  options: {},
  patterns: {}
};

module.exports = loadMeta;
module.exports.loadMetaTree = loadMetaTree;

async function loadMeta(options) {
  const list = await globby(options.entry, { cwd: options.cwd });

  const entries = await Promise.all(
    list.map(async bundle => {
      const file = path.join(options.cwd, bundle);
      const map = await getSourceMap(file);

      return {
        path: file,
        map
      };
    })
  );

  const sources = uniq(
    await entries.filter(b => Boolean(b.map)).reduce(async (accp, b) => {
      const acc = await accp;

      const sources = await Promise.all(
        b.map.sources.map(async s => {
          const { path: p } = url.parse(s);
          const pa = path.resolve(path.dirname(b.path), p);

          if (await sander.exists(pa)) {
            return pa;
          }

          const resolved = path.join(b.map.sourceRoot || options.cwd, pa);

          if (await sander.exists(resolved)) {
            return resolved;
          }
        })
      );

      Array.prototype.push.apply(acc, sources.filter(Boolean));
      return acc;
    }, Promise.resolve([]))
  );

  const candidates = (await Promise.all(
    sources.map(async source => {
      const patternBase = path.dirname(source);
      const manifestPath = path.join(patternBase, "pattern.json");

      if (await sander.exists(manifestPath)) {
        const base = path.dirname(path.relative(options.cwd, patternBase));
        const relativeManifestPath = path.relative(options.cwd, manifestPath);
        const [err, data] = await json(manifestPath);

        if (err) {
          return err;
        }

        const id = path
          .join(base, data.name)
          .split(path.sep)
          .join("/");

        data.displayName = data.displayName || data.name || null;
        const manifest = { ...DEFAULT_MANIFEST, ...data };
        return { id, path: relativeManifestPath, manifest };
      }
      return false;
    })
  )).filter(Boolean);

  const [, patterns] = partition(candidates, r => r instanceof Error);

  // TODO: implement dependency lookups
  return patterns.map(pattern => {
    pattern.dependencies = [];
    pattern.demoDependencies = [];
    pattern.dependents = [];
    pattern.demoDependents = [];
    return pattern;
  });
}

async function loadMetaTree(options) {
  return treeFromPaths(await loadMeta(options));
}

function getSourceMap(jsFile) {
  return new Promise((resolve, reject) => {
    loadSourceMap(jsFile, (err, sourcemap) => {
      if (err) {
        return reject(err);
      }
      resolve(sourcemap);
    });
  });
}

async function json(jsonFile) {
  try {
    return [null, await loadJsonFile(jsonFile)];
  } catch (err) {
    return [err];
  }
}

async function treeFromPaths(files) {
  const tree = {
    id: "root",
    children: []
  };

  await Promise.all(
    files.map(
      throat(1, async file => {
        const parts = file.path.split("/");
        let level = tree;

        return await Promise.all(
          parts.map(
            throat(1, async (id, i) => {
              const existing = level.children.find(c => c.name === id);
              const n = parts[i + 1];
              const itemPath = parts.slice(0, i + 1);

              if (!n) {
                return null;
              }

              const type = getType(n || id);
              const name = getName(id, file.manifest);

              if (existing) {
                level = existing;
                return null;
              }

              const fromPatterns = path.resolve.bind(null, "./patterns");
              const contents = await getDoc(fromPatterns(...itemPath), {
                type
              });

              const ast = remark().parse(contents);
              const first = find(ast, { type: "heading", depth: 1 });
              const front =
                typeof contents === "string"
                  ? frontmatter(contents).attributes
                  : {};
              const manifest = merge({}, DEFAULT_MANIFEST, front);
              manifest.name = first ? first.children[0].value : name;
              manifest.displayName = manifest.displayName || manifest.name;

              const item = {
                contents,
                name,
                manifest: type === "folder" ? manifest : file.manifest,
                id: parts.slice(0, i + 1).join("/"),
                path: itemPath,
                type
              };

              level.children.push(item);

              if (item.type === "folder") {
                item.children = [];
                level = item;
              } else {
                item.dependents = file.dependents;
                item.demoDependents = file.demoDependents;
                item.dependencies = file.dependencies;
                item.demoDependencies = file.demoDependencies;
                item.envs = file.envs;
              }

              return null;
            })
          )
        );
      })
    )
  );

  return tree;
}

function getName(basename, manifest) {
  if (basename === "pattern.json") {
    return manifest.name;
  }
  return basename;
}

function getType(basename) {
  if (basename === "pattern.json") {
    return "pattern";
  }
  return "folder";
}

async function getDoc(itemPath, context) {
  const baseName = context.type === "pattern" ? "index.md" : "readme.md";
  const file = path.resolve(itemPath, baseName);

  if (!await sander.exists(file)) {
    return "";
  }
  return String(await sander.readFile(file));
}
