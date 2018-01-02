const globby = require("globby");
const querystring = require("querystring");

const LOADER = require.resolve("./loader");

module.exports = webpackEntry;
module.exports.sync = webpackEntrySync;

async function webpackEntry(entry, { cwd = process.cwd() } = {}) {
  return toEntry(await globby(entry || [], { cwd }));
}

function webpackEntrySync(entry, { cwd = process.cwd() } = {}) {
  return toEntry(globby.sync(entry || [], { cwd }));
}

function toEntry(files) {
  const q = querystring.stringify({
    entries: JSON.stringify(
      files.reduce((acc, file) => {
        acc[file] = file;
        return acc;
      }, {})
    )
  });

  return `${LOADER}?${q}!`;
}
