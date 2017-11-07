const path = require("path");
const url = require("url");
const loadDoc = require("@patternplate/load-doc");
const frontmatter = require("front-matter");
const globby = require("globby");
const { flatten, merge, partition } = require("lodash");
const loadJsonFile = require("load-json-file");
const loadSourceMap = require("load-source-map");
const precinct = require("precinct");
const remark = require("remark");
const resolveFrom = require("resolve-from");
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

  const pairs = await entries.reduce(async (accp, b) => {
    const acc = await accp;
    const artifact = path.relative(options.cwd, b.path);

    if (!b.map) {
      const pair = {
        artifact,
        source: artifact
      };

      acc.push(pair);
      return acc;
    }

    const sources = await Promise.all(
      b.map.sources.map(async s => {
        const { path: p } = url.parse(s);
        const pa = path.resolve(path.dirname(b.path), p);

        if (await sander.exists(pa)) {
          return {
            artifact,
            source: pa
          };
        }

        const resolved = path.join(b.map.sourceRoot || options.cwd, pa);

        if (await sander.exists(resolved)) {
          return {
            artifact,
            source: resolved
          };
        }
      })
    );

    Array.prototype.push.apply(acc, sources.filter(Boolean));
    return acc;
  }, Promise.resolve([]));

  const candidates = await Promise.all(
    pairs
      .filter(async pair => {
        const manifestPath = path.join(
          path.dirname(pair.source),
          "package.json"
        );
        return await sander.exists(manifestPath);
      })
      .map(async pair => {
        const { source, artifact } = pair;
        const patternBase = path.dirname(source);
        const manifestPath = path.join(patternBase, "package.json");

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
        return {
          id,
          artifact,
          source,
          files: await getFiles(source, { cwd: options.cwd }),
          path: relativeManifestPath,
          manifest,
          errors: []
        };
      })
  );

  const [, patterns] = partition(candidates, r => r instanceof Error);

  const patternWithDeps = await Promise.all(
    patterns.map(async p => {
      const { deps, error } = await getDeps(p, patterns, options);
      p.dependencies = deps;
      p.errors = [...p.errors, ...error];
      return p;
    })
  );

  return patternWithDeps.map(p => {
    p.dependents = getDependents(p.id, patternWithDeps);
    return p;
  });
}

async function loadMetaTree(options) {
  return treeFromPaths(await loadMeta(options));
}

async function getFiles(source, options) {
  const cwd = path.dirname(source);
  return (await globby(["*", "!pattern.json"], { cwd })).map(file =>
    path.relative(options.cwd, path.join(cwd, file))
  );
}

async function getDeps(p, pool, options) {
  const { error, external } = await getReferences(p.source, p.files, options);

  return {
    error,
    deps: external
      .map(ext => pool.find(p => p.files.includes(ext)))
      .filter(Boolean)
      .map(p => p.id)
  };
}

async function getReferences(sourceFile, files, options) {
  const base = path.dirname(sourceFile);
  const content = String(await sander.readFile(sourceFile));

  const found = precinct(content).map(i => {
    try {
      return path.relative(options.cwd, resolveFrom(base, i));
    } catch (err) {
      return err;
    }
  });

  const [error, mods] = partition(found, i => i instanceof Error);
  const [local, external] = partition(mods, i => files.includes(i));

  const sub = await Promise.all(
    local.map(loc => getReferences(loc, files, options))
  );

  return {
    local: [...local, ...flatten(sub.map(s => s.local))],
    external: [...external, ...flatten(sub.map(s => s.external))],
    error: [...error, ...flatten(sub.map(s => s.error))]
  };
}

function getDependents(id, pool) {
  return pool
    .filter(p => p.dependencies.includes(id) && p.id !== id)
    .map(p => p.id);
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
              const existing = (level.children || []).find(c => c.name === id);
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

              const contents = String(
                await loadDoc({ cwd: path.join(...itemPath) })
              );

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

              if (item.type === "folder" && !contents) {
                return null;
              }

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
  if (basename === "package.json") {
    return manifest.name;
  }
  return basename;
}

function getType(basename) {
  if (basename === "package.json") {
    return "pattern";
  }
  return "folder";
}
