import * as Path from "path";
import * as Fs from "fs";
import * as Types from "@patternplate/types";
import * as Util from "util";
import * as globby from "globby";
import { merge } from "lodash";
import * as shortid from "shortid";
import * as LoadManifest from "@patternplate/load-manifest";

const readFile = Util.promisify(Fs.readFile);

const frontmatter = require("front-matter");
const remark = require("remark");
const find = require("unist-util-find");

export interface LoadDocsOptions {
  docs: string[];
  cwd: string;
}

export interface Doc {
  id: string;
  contents: string;
  contentType: Types.ContentType;
  path: string;
  manifest: Types.PatternManifest;
  rawManifest: unknown;
}

export async function loadDocs(options: LoadDocsOptions): Promise<Doc[]> {
  const files = await globby([...options.docs], {
    cwd: options.cwd
  });

  return await Promise.all<Doc>(
    files.map(async file => {
      const raw = await readFile(Path.join(options.cwd, file));
      const contents = raw ? String(raw) : "";
      const ast = remark().parse(contents);
      const first = find(ast, { type: "heading", depth: 1 });

      const front = frontmatter(contents).attributes;
      const manifest = LoadManifest.normalize(front, { isPatternPkg: false, withDefaults: true });

      const b = Path.basename(file, Path.extname(file)).toLowerCase();
      const name = b === "readme" ? Path.dirname(file) : b;

      manifest.name =
        manifest.name ||
        (first
          ? (first.children[0].value || "").replace(/[^\w]/g, "-")
          : manifest.name || shortid.generate()
        ).toLowerCase();

      manifest.displayName =
        manifest.displayName || (first ? first.children[0].value : name);

      return {
        id: toUnix(stripExt(file)),
        contents,
        contentType: Types.ContentType.Doc,
        path: file,
        manifest,
        rawManifest: front
      };
    })
  );
}

export async function loadDocsTree(options) {
  return {
    id: "root",
    children: await loadDocs(options),
    type: "root"
  };
}

function toUnix(path: string): string {
  return path.split(Path.sep).join("/");
}

function stripExt(path: string): string {
  return Path.join(
    Path.dirname(path),
    Path.basename(path, Path.extname(path))
  );
}
