const querystring = require("querystring");
const resolvePkg = require("resolve-pkg");
const resolveFrom = require("resolve-from");

const SELF = resolvePkg("@patternplate/webpack-entry");
const LOADER = resolveFrom(SELF, "./lib/loader");

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
