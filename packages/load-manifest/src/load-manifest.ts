import * as Fs from "fs";
import * as Path from "path";
import { normalize } from "./normalize";
import * as Types from "./types";
import { loadJSON } from "./load-json";
import * as Errors from "./errors";
import * as Util from "util";

const exists = Util.promisify(Fs.exists);

/**
 * Legacy, remove around 8.x
 */
export const PATTERNPLATE_ERR_NO_MANIFEST = Types.ManifestErrorType.NoManifest;
export const PATTERNPLATE_ERR_MALFORMED_MANIFEST =
  Types.ManifestErrorType.MalformedManifest;

export async function loadManifest({
  cwd
}: Types.LoadManifestOptions): Promise<Types.LoadedManifest> {
  const map = <T>(fn: (file: string) => Promise<T | null>) =>
    Promise.all(["package.json", "pattern.json"].map(fn));

  if (typeof cwd !== "string") {
    throw new Error(
      `load-manifest cwd expects string, received ${cwd}, typeof ${cwd}`
    );
  }

  const read = async (f: string): Promise<string | null> => ((await exists(Path.join(cwd, f))) ? f : null);
  const files = (await map(read)).filter((p): p is string => typeof p === 'string');
  const file = files[0];

  if (!file) {
    throw new Errors.NoManifestError(
      `load-manifest could not find pattern.json, package.json in ${cwd}`
    );
  }

  const fullPath = Path.resolve(cwd, file);
  const data = await loadJSON(fullPath);

  const isPkg = Path.basename(file) === "package.json";
  const isPatternPkg =
    typeof data === "object" && typeof (data as any).patternplate === "object";
  const needsPattern = isPkg && !isPatternPkg;

  if (needsPattern && files.length === 1) {
    throw new Errors.NoManifestError(
      `load-manifest could not find pattern.json in ${cwd} and package.json contains no patternplate object`
    );
  }

  const second = files[1];

  if (needsPattern && files.length === 2 && typeof second === "string") {
    const fullPath = Path.resolve(cwd, second);
    const data = await loadJSON(fullPath);
    const manifest = normalize(data, { isPatternPkg, withDefaults: false });

    return {
      file: fullPath,
      manifest,
      raw: manifest
    };
  }

  return {
    file: fullPath,
    manifest: normalize(data, { isPatternPkg, withDefaults: true }),
    raw: normalize(data, { isPatternPkg, withDefaults: false })
  };
}
