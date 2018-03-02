const path = require("path");
const url = require("url");
// const AggregateError = require("aggregate-error");
const globby = require("globby");
const loadJsonFile = require("load-json-file");
const loadSourceMap = require("load-source-map");
const pFilter = require("p-filter");
const sander = require("@marionebl/sander");

const PATTERNPLATE_DUPE_PATTERN = 'PATTERNPLATE_DUPE_PATTERN';
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
module.exports.loadMetaResult = loadMetaResult;
module.exports.loadMetaTree = loadMetaTree;

module.exports.PATTERNPLATE_DUPE_PATTERN = PATTERNPLATE_DUPE_PATTERN;

async function loadMeta(options) {
  const [err, result] = await loadMetaResult(options);
  if (err) {
    throw err;
  }
  return result;
}

async function loadMetaResult(options) {
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

    data.displayName = data.displayName || data.name || null;
    const manifest = Object.assign({}, DEFAULT_MANIFEST, data);

    const previous = acc.patterns.find(pattern => pattern.id === manifest.name);

    if (previous) {
      const relPath = path.relative(process.cwd(), manifestPath);
      const err = new Error(`Found duplicated pattern "${previous.id}" at "${relPath}" already present at "${previous.path}"`);
      err.errno = PATTERNPLATE_DUPE_PATTERN;
      acc.errors.push(err);
      return acc;
    }

    acc.patterns.push({
      id: manifest.name,
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

  const {patterns, errors} = inspected;

  return [
    errors.length > 0 ? errors : null,
    patterns
  ];
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
