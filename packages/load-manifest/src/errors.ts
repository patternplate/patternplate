import * as Types from './types';

export class NoManifestError extends Error {
  public errno = Types.ManifestErrorType.NoManifest;
}
