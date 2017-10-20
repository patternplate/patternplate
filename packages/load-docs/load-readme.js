const { resolve, sep } = require("path");
const { find } = require("lodash");
const sander = require("@marionebl/sander");

const defaults = {
  fallback: true,
  cache: null,
  baseNames: ["README.md", "Readme.md", "readme.md", "index.md"]
};

async function getExistingBaseName(basePath, baseNames) {
  const exist = await Promise.all(
    baseNames.map(baseName => resolve(basePath, baseName)).map(async path => {
      return {
        path,
        exists: await sander.exists(path)
      };
    })
  );

  return (find(exist, "exists") || {}).path;
}

async function getMarkdown(id, base, options) {
  const basePath = resolve(base, id.split("/").join(sep));
  const markdownPath = await getExistingBaseName(basePath, options.baseNames);

  if (markdownPath) {
    const buffer = await sander.readFile(markdownPath);
    return buffer.toString("utf-8");
  }

  return "";
}

module.exports = async function getReadme(id, base, options) {
  const settings = { ...defaults, ...options };
  return await getMarkdown(id, base, settings);
};
