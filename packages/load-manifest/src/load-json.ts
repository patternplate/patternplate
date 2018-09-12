import * as Types from './types';
const loadJsonFile = require("load-json-file");

class ManlformedManifestError extends Error {
  public errno = Types.ManifestErrorType.MalformedManifest;
}

export async function loadJSON(file: string): Promise<unknown> {
  try {
    return await loadJsonFile(file);
  } catch (err) {
    throw new ManlformedManifestError(err.message);
  }
}
