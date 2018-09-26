import * as Fs from "fs";
import * as Path from "path";
import { normalize } from "./normalize";
import * as Types from "./types";
import { loadJSON } from "./load-json";
import * as Errors from "./errors";
import * as ValidateManifest from "@patternplate/validate-manifest";

/**
 * Legacy, remove around 8.x
 */
export const PATTERNPLATE_ERR_NO_MANIFEST = Types.ManifestErrorType.NoManifest;
export const PATTERNPLATE_ERR_MALFORMED_MANIFEST =
  Types.ManifestErrorType.MalformedManifest;

export async function loadManifest({
  cwd
}: Types.LoadManifestOptions): Promise<Types.LoadedManifest> {
  if (typeof cwd !== "string") {
    throw new Error(
      `load-manifest cwd expects string, received ${cwd}, typeof ${cwd}`
    );
  }

  const files = ["package.json", "pattern.json"].filter(file => Fs.existsSync(Path.join(cwd, file)));

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

    const validate = isPatternPkg ? ValidateManifest.validatePackage : ValidateManifest.validatePatternJson;
    const [validationError, valid] = validate({ target: data, name: fullPath });

    if (!valid) {
      throw validationError;
    }

    return {
      file: fullPath,
      manifest,
      raw: manifest
    };
  }

  const validate = isPatternPkg ? ValidateManifest.validatePackage : ValidateManifest.validatePatternJson;
  const [validationError, valid] = validate({ target: data, name: fullPath });

  if (!valid) {
    throw validationError;
  }

  return {
    file: fullPath,
    manifest: normalize(data, { isPatternPkg, withDefaults: true }),
    raw: normalize(data, { isPatternPkg, withDefaults: false })
  };
}
