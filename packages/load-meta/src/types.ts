import * as LoadedManifest from "@patternplate/load-manifest";

export interface LoadMetaOptions {
  entry: string[];
  cwd: string;
}

export interface LoadMetaResult {
  errors: Error[];
  patterns: LoadedPatternMeta[];
}

export interface LoadedPatternMeta {
  artifact: string;
  contents: string | null;
  contentType: "pattern";
  path: string;
  source: string;
  files: string[];
  manifest: LoadedManifest.NormalizedManifest;
  rawManifest: Partial<LoadedManifest.NormalizedManifest>;
  id: string;
  errors: Error[];
}

export enum LoadMetaErrorType {
  DuplicateId = 'PATTERNPLATE_ERROR_DUPE_PATTERN'
}
