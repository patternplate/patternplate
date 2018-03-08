const querystring = require("querystring");
const resolveFrom = require("resolve-from");

const LOADER = require.resolve("./loader");

module.exports = webpackEntry;
module.exports.sync = webpackEntrySync;

async function webpackEntry(entry, { cwd = process.cwd() } = {}) {
  return `${LOADER}?${querystring.stringify({
    entry,
    cwd
  })}!`;
}

function webpackEntrySync(entry, { cwd = process.cwd() } = {}) {
  return `${LOADER}?${
    querystring.stringify({
      entry,
      cwd
    })
  }!`;
}
