import * as Types from './types';

const DEFAULT_MANIFEST = {
  name: "",
  displayName: "",
  description: "",
  flag: "alpha",
  options: {},
  tags: [],
  version: "1.0.0",
};

const EMPTY_MANIFEST = {
  name: "",
  displayName: "",
  description: "",
  flag: "",
  options: {},
  tags: [],
  version: ""
}

export function normalize(rawData: unknown, {isPatternPkg, withDefaults}: Types.ManifestNormalizeOptions): Types.NormalizedManifest {
  const normalized = Object.assign({}, withDefaults ? DEFAULT_MANIFEST : EMPTY_MANIFEST) as Types.NormalizedManifest;

  if (typeof rawData !== 'object') {
    return normalized;
  }

  const data = rawData as { [key: string]: unknown };

  if (data.hasOwnProperty('name') && typeof data.name === 'string') {
    normalized.name = data.name;
  }

  if (data.hasOwnProperty('version') && typeof data.version === 'string') {
    normalized.version = data.version;
  }

  if (data.hasOwnProperty('tags') && Array.isArray(data.tags)) {
    normalized.tags = data.tags.filter(t => typeof t === 'string');
  }

  if (data.hasOwnProperty('description') && typeof data.description === 'string') {
    normalized.description = data.description;
  }

  const rawSourceData = isPatternPkg ? data.patternplate : data;

  if (typeof rawSourceData !== 'object') {
    return normalized;
  }

  const sourceData = rawSourceData as { [key: string]: unknown };

  if (sourceData.hasOwnProperty("displayName") && typeof sourceData.displayName === 'string') {
    normalized.displayName = sourceData.displayName;
  }

  if (sourceData.hasOwnProperty("options") && typeof sourceData.options === 'object') {
    normalized.options = sourceData.options as { [key: string]: unknown };
  }

  if (sourceData.hasOwnProperty("flag") && typeof sourceData.flag === 'string') {
    normalized.flag = sourceData.flag;
  }

  return normalized;
}
