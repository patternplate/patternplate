const path = require("path");
const url = require("url");
const loadDoc = require("@patternplate/load-doc");
const frontmatter = require("front-matter");
const globby = require("globby");
const { flatten, merge, partition } = require("lodash");
const loadJsonFile = require("load-json-file");
const loadSourceMap = require("load-source-map");
const pFilter = require("p-filter");
const precinct = require("precinct");
const remark = require("remark");
const resolveFrom = require("resolve-from");
const find = require("unist-util-find");
const sander = require("@marionebl/sander");
const throat = require("throat");

const MANIFEST_NAME = "pattern.json";

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

  const candidates = await pFilter(pairs, pair => {
    return sander.exists(path.dirname(pair.source), MANIFEST_NAME);
  });

  const inspected = await candidates.reduce(async (accing, pair) => {
    const acc = await accing;
    const { source, artifact } = pair;
    const patternBase = path.dirname(source);
    const manifestPath = path.join(patternBase, MANIFEST_NAME);

    const base = path.dirname(path.relative(options.cwd, patternBase));
    const relativeManifestPath = path.relative(options.cwd, manifestPath);

    if (acc.patterns.some(p => relativeManifestPath === p.path)) {
      return acc;
    }

    const [err, data] = await json(manifestPath);

    if (err) {
      acc.errors.push(err)
      return acc;
    }

    const id = path
      .join(base, data.name)
      .split(path.sep)
      .join("/");

    data.displayName = data.displayName || data.name || null;
    const manifest = { ...DEFAULT_MANIFEST, ...data };

    acc.patterns.push({
      id,
      artifact,
      contentType: "pattern",
      source: path.relative(options.cwd, source),
      files: await getFiles(source, { cwd: options.cwd }),
      path: relativeManifestPath,
      manifest,
      errors: []
    });

    return acc;
  }, Promise.resolve({
    errors: [],
    patterns: []
  }));

  const {patterns} = inspected;
  return patterns;
}

async function loadMetaTree(options) {
  return {id: 'root', children: await loadMeta(options)};
}

async function getFiles(source, options) {
  const cwd = path.dirname(source);
  return (await globby(["*", `!${MANIFEST_NAME}`], { cwd })).map(file =>
    path.relative(options.cwd, path.join(cwd, file))
  );
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
