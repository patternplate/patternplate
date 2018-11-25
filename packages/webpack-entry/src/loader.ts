import * as LoaderUtils from "loader-utils";
import * as Path from "path";
import * as exists from "path-exists";
import * as Fs from "fs";
import * as globby from "globby";
import * as Util from "util";
import * as requireFromString from "require-from-string";
import * as resolveFrom from "resolve-from";
import { loader } from "webpack";
import * as Querystring from "querystring";

import globParent = require("glob-parent");
const debug = Util.debuglog("patternplate");

export default async function webpackEntry(
  this: loader.LoaderContext
): Promise<ReturnType<loader.Loader>> {
  const cb = this.async();
  const options =
    typeof this.query === "string"
      ? Querystring.parse(this.query.slice(1))
      : this.query;

  options.entries = Array.isArray(options.entry)
    ? options.entry
    : [options.entry];

  const rawRelative = resolveFrom(__dirname, "raw-loader");
  const rawLoader = toUnix(Path.relative(process.cwd(), rawRelative));
  const files = await getFiles(options);
  const parent = globParent(options.entry);
  const parentFull = Path.join(options.cwd, parent);
  const rel = Path.relative(process.cwd(), parentFull);

  this.addContextDependency(parentFull);

  debug("webpack context", parent, "=>", `./${rel}`);

  const reg = await Promise.all(
    files.map(async file => {
      const full = Path.join(options.cwd, file);
      const rawRel = toUnix(Path.relative(process.cwd(), full));
      const exported = await getExported(full, { fs: this.fs });
      const rel = toRel(rawRel);

      const mod = [`module.exports['${file}'] = require('${rel}');`];

      if (exported.indexOf("js") === -1) {
        mod.push(
          `module.exports['${file}'].js = function() { return require('./${rawLoader}!${rel}'); };`
        );
      }

      if (exported.indexOf("css") === -1 && (await exists(ext(".css", full)))) {
        mod.push(
          `module.exports['${file}'].css = function() { return require('${toRel(
            ext(".css", rel)
          )}'); };`
        );
      }

      if (
        exported.indexOf("html") === -1 &&
        (await exists(ext(".html", full)))
      ) {
        mod.push(
          `module.exports['${file}'].html = function() { return require('${toRel(
            ext(".html", rel)
          )}'); };`
        );
      }

      return mod.join("\n");
    })
  );

  cb(null, reg.join("\n"));
}

function getFiles(options) {
  const cwd = options.cwd || process.cwd();
  return globby(options.entries, { cwd });
}

function toUnix(input) {
  return input.split(Path.sep).join("/");
}

function toRel(rawRel) {
  return rawRel.charAt(0) === "." ? rawRel : `./${rawRel}`;
}

function ext(e, ...input) {
  const parsed = Path.posix.parse(Path.join(...input));
  parsed.base = `${Path.posix.basename(
    parsed.base,
    Path.posix.extname(parsed.base)
  )}${e}`;
  parsed.ext = e;
  return toUnix(Path.posix.format(parsed));
}

async function getExported(modulePath, { fs }) {
  const code = String(Fs.readFileSync(modulePath));

  try {
    return Object.keys(requireFromString(code, modulePath));
  } catch (err) {
    return [];
  }
}
