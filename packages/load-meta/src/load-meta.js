const path = require("path");
const url = require("url");
const globby = require("globby");
const loadSourceMap = require("load-source-map");
const pFilter = require("p-filter");
const sander = require("@marionebl/sander");
const {loadManifest, PATTERNPLATE_ERR_NO_MANIFEST} = require("@patternplate/load-manifest");
const loadDoc = require("@patternplate/load-doc");

const PATTERNPLATE_ERROR_DUPE_PATTERN = 'PATTERNPLATE_ERROR_DUPE_PATTERN';

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
module.exports.PATTERNPLATE_ERROR_DUPE_PATTERN = PATTERNPLATE_ERROR_DUPE_PATTERN;

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

  return await pairs.reduce(async (accing, pair) => {
    const acc = await accing;
    const { source, artifact } = pair;
    const cwd = path.join(options.cwd, path.dirname(source));
    const [err, result] = await json({cwd});

    if (err) {
      if (err.errno !== PATTERNPLATE_ERR_NO_MANIFEST) {
        acc.errors.push(err);
      }
      return acc;
    }

    const {file, manifest: data, raw} = result;
    const base = path.dirname(path.relative(options.cwd, cwd));
    const relativeManifestPath = path.relative(options.cwd, file);

    if (acc.patterns.some(p => relativeManifestPath === p.path)) {
      return acc;
    }

    data.displayName = data.displayName || data.name || null;
    const manifest = Object.assign({}, DEFAULT_MANIFEST, data);

    const previous = acc.patterns.find(pattern => pattern.id === manifest.name);

    if (previous) {
      const relPath = path.relative(process.cwd(), file);
      const err = new Error(`Found duplicated pattern "${previous.id}" at "${relPath}" already present at "${previous.path}"`);
      err.errno = PATTERNPLATE_ERROR_DUPE_PATTERN;
      acc.errors.push(err);
      return acc;
    }

    const {contents} = await loadDoc({cwd});

    acc.patterns.push({
      id: manifest.name,
      artifact,
      contents: contents ? String(contents) : null,
      contentType: "pattern",
      source: path.relative(options.cwd, source),
      files: await getFiles(source, { cwd: options.cwd }),
      path: relativeManifestPath,
      manifest,
      rawManifest: raw,
      errors: []
    });

    return acc;
  }, Promise.resolve({
    errors: [],
    patterns: []
  }));
}

async function getFiles(source, options) {
  const cwd = path.dirname(source);
  return (await globby(["*", "!package.json", "!pattern.json"], { cwd })).map(file =>
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

async function json(options) {
  try {
    return [null, await loadManifest(options)];
  } catch (err) {
    return [err];
  }
}
