export enum ManifestErrorType {
  NoManifest = "PATTERNPLATE_ERR_NO_MANIFEST",
  MalformedManifest = "PATTERNPLATE_ERR_MALFORMED_MANIFEST"
}

export interface LoadManifestOptions {
  cwd: string;
}

export interface LoadedManifest {
  file: string;
  manifest: NormalizedManifest;
  raw: Partial<NormalizedManifest>;
}

export interface ManifestNormalizeOptions {
  isPatternPkg: boolean;
  withDefaults: boolean;
}

export interface NormalizedManifest {
  name: string;
  displayName: string;
  options: { [key: string]: unknown };
  version: string;
  tags: string[];
  flag: string;
  description: string;
}
