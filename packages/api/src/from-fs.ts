import * as T from "./types";
import * as requireFromString from "require-from-string";

import stringHash = require("string-hash");

export function fromFs<T = unknown>(fs: T.FsLike): (sourceFile: string, filename?: string) => T {
  return <V = T>(sourceFile: string, filename?: string): V =>
    getExports<V>(String(fs.readFileSync(sourceFile)), filename || sourceFile);
}

// TODO: Remove memory leak
const exportsCache = new Map();

function getExports<T>(source: string, filename: string): T {
  const hash = stringHash(source);

  if (!exportsCache.has(hash)) {
    exportsCache.set(hash, requireFromString(source, filename));
  }

  return exportsCache.get(hash);
}
