import * as Querystring from "querystring";

async function webpackEntry(entry: string[], opts: { cwd: string } = { cwd: process.cwd() }) {
  return webpackEntrySync(entry, opts);
}

function webpackEntrySync(entry, opts: { cwd: string } = { cwd: process.cwd() }) {
  const LOADER = require.resolve("./loader");

  return `${LOADER}?${Querystring.stringify({
    entry,
    cwd: opts.cwd
  })}!`;
}

webpackEntry.sync = webpackEntrySync;

export = webpackEntry;
