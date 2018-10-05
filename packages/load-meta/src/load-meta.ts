import * as Fs from "fs";
import * as Util from "util";
import * as Path from "path";
import * as Url from "url";
import * as globby from "globby";
import * as LoadedManifest from "@patternplate/load-manifest";
import { loadDoc } from "@patternplate/load-doc";
import { getFiles } from "./get-files";
import { getSourceMap } from "./get-source-map";
import { safeLoadManifest } from "./safe-load-manifest";
import { PatternplateDuplicateIdError } from "./dupe-id-error";
import * as Types from "./types";

export const PATTERNPLATE_ERROR_DUPE_PATTERN = Types.LoadMetaErrorType.DuplicateId;

const exists = Util.promisify(Fs.exists);

const DEFAULT_MANIFEST = {
  displayName: "",
  version: "1.0.0",
  build: true,
  display: true,
  flag: "alpha",
  options: {},
};

interface Pair {
  artifact: string;
  source: string;
}

export async function loadMeta(options: Types.LoadMetaOptions): Promise<Types.LoadMetaResult> {
  const list = await globby(options.entry, { cwd: options.cwd });
  const entries = await Promise.all(
    list.map(async bundle => {
      const file = Path.join(options.cwd, bundle);
      const map = await getSourceMap(file);

      return {
        path: file,
        map
      };
    })
  );

  const pairs = await entries.reduce<Promise<Pair[]>>(async (accp, b) => {
    const acc = await accp;
    const artifact = Path.relative(options.cwd, b.path);

    if (!b.map) {
      const pair = {
        artifact,
        source: artifact
      };

      acc.push(pair);
      return acc;
    }

    const sources = await Promise.all(
      b.map.sources
        .map(sourceUrl => {
          const parsed = Url.parse(sourceUrl);
          return parsed.path;
        })
        .filter((path): path is string => typeof path === 'string')
        .map(async relativePath => {
          const resolvedPath = Path.resolve(Path.dirname(b.path), relativePath);

          if (await exists(resolvedPath)) {
            return {
              artifact,
              source: resolvedPath
            };
          }

          const resolved = Path.join(b.map.sourceRoot || options.cwd, resolvedPath);

          if (await exists(resolved)) {
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

  return await pairs
    .reduce<Promise<Types.LoadMetaResult>>(
      async (accing: Promise<Types.LoadMetaResult>, pair: Pair) => {
        const acc = await accing;
        const { source, artifact } = pair;
        const cwd = Path.resolve(options.cwd, Path.dirname(source));
        const [err, rawResult] = await safeLoadManifest({ cwd });

        if (err) {
          if (err.errno !== LoadedManifest.PATTERNPLATE_ERR_NO_MANIFEST) {
            acc.errors.push(err);
          }
          return acc;
        }

        const result = rawResult as LoadedManifest.LoadedManifest;
        const { file, manifest: data, raw } = result;
        const relativeManifestPath = Path.relative(options.cwd, file);

        if (acc.patterns.some(p => relativeManifestPath === p.path)) {
          return acc;
        }

        // TODO: Move second stage normalizations to load-manifest
        data.displayName = data.displayName || data.name || '';
        const manifest = Object.assign({}, DEFAULT_MANIFEST, data);

        const previous = acc.patterns.find(
          pattern => pattern.id === manifest.name
        );

        if (previous) {
          const relPath = Path.relative(process.cwd(), file);
          const err = new PatternplateDuplicateIdError(
            `Found duplicated pattern "${previous.id}" at "${relPath}" already present at "${previous.path}"`
          );
          acc.errors.push(err);
          return acc;
        }

        const { contents } = await loadDoc({ cwd });

        acc.patterns.push({
          id: manifest.name,
          artifact,
          contents: contents ? String(contents) : null,
          contentType: "pattern",
          source: Path.relative(options.cwd, source),
          files: await getFiles(source, { cwd: options.cwd }),
          path: relativeManifestPath,
          manifest,
          rawManifest: raw,
          errors: []
        });

        return acc;
      },
      Promise.resolve({
        errors: [],
        patterns: []
      })
    );
}
