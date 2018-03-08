module.exports = normalize;

const DEFAULT_MANIFEST = {
  displayName: "",
  flag: "alpha",
  options: {},
  tags: [],
  version: "1.0.0",
};

function normalize(data, {isPatternPkg}) {
  const normalized = Object.assign({}, DEFAULT_MANIFEST);

  if (data.hasOwnProperty('name')) {
    normalized.name = data.name;
  }

  if (data.hasOwnProperty('version')) {
    normalized.version = data.version;
  }

  if (data.hasOwnProperty('tags')) {
    normalized.tags = data.tags;
  }

  if (data.hasOwnProperty('description')) {
    normalized.description = data.description;
  }

  const sourceData = isPatternPkg ? data.patternplate : data;

  if (sourceData.hasOwnProperty("displayName")) {
    normalized.displayName = sourceData.displayName;
  }

  if (sourceData.hasOwnProperty("options")) {
    normalized.options = sourceData.options;
  }

  if (sourceData.hasOwnProperty("flag")) {
    normalized.flag = sourceData.flag;
  }

  return normalized;
}
