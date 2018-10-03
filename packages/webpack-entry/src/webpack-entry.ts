import * as Querystring from "querystring";

export async function webpackEntry(entry: string[], opts: { cwd: string } = { cwd: process.cwd() }) {
  return webpackEntrySync(entry, opts);
}

export function webpackEntrySync(entry, opts: { cwd: string } = { cwd: process.cwd() }) {
  const LOADER = require.resolve("./loader");

  return `${LOADER}?${Querystring.stringify({
    entry,
    cwd: opts.cwd
  })}!`;
}

export const sync = webpackEntrySync;
export default webpackEntry;
