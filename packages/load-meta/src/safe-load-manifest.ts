import * as LoadManifest from "@patternplate/load-manifest";

export type SafeLoadManifestResult =
  | [null, LoadManifest.LoadedManifest]
  | [SafeLoadManifestError];

export interface SafeLoadManifestError extends Error {
  errno: LoadManifest.ManifestErrorType;
}

export async function safeLoadManifest(
  options: LoadManifest.LoadManifestOptions
): Promise<SafeLoadManifestResult> {
  try {
    return [null, await LoadManifest.loadManifest(options)];
  } catch (err) {
    return [err];
  }
}
