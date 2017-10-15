import path from "path";
import frontmatter from "front-matter";
import globby from "globby";
import { merge, partition } from "lodash";
import exists from "path-exists";
import remark from "remark";
import find from "unist-util-find";
import * as sander from "sander";
import throat from "throat";

import getEnvironments from "./get-environments";
import json from "./load-json";

const DEFAULT_MANIFEST = {
  displayName: "",
  version: "1.0.0",
  build: true,
  display: true,
  flag: "alpha",
  options: {},
  patterns: {}
};

export async function getPatterns(base) {
  const resolve = path.resolve.bind(null, base);
  const cwd = resolve(".");
  const read = f => json(resolve(f));

  if (!await exists(cwd)) {
    return [];
  }

  const files = await globby(`**/pattern.json`, { cwd });

  const envs = (await getEnvironments(cwd))
    .filter(env => env.display)
    .map(env => env.name);

  const readings = await Promise.all(
    files
      .filter(file =>
        ["@environments", "@docs"].every(i => !file.startsWith(i))
      )
      .map(async file => {
        const id = file.split(path.sep).join("/");
        const [err, data] = await read(file);

        if (err) {
          return err;
        }

        data.displayName = data.displayName || data.name || null;
        const manifest = { ...DEFAULT_MANIFEST, ...data };
        return { id, path: file, manifest, envs };
      })
  );

  const [errors, patterns] = partition(readings, r => r instanceof Error);

  return patterns.map(pattern => {
    pattern.dependencies = getDependencies(pattern, { key: "patterns" });
    pattern.demoDependencies = getDependencies(pattern, {
      key: "demoPatterns"
    });
    pattern.dependents = getDependents(pattern, {
      pool: patterns,
      key: "patterns"
    });
    pattern.demoDependents = getDependents(pattern, {
      pool: patterns,
      key: "demoPatterns"
    });
    return pattern;
  });
}

export async function getPatternTree(base) {
  return treeFromPaths(await getPatterns(base));
}

function getDependencies(pattern, config) {
  return Object.values(pattern.manifest[config.key] || {});
}

function getDependents(pattern, config) {
  const id = path.dirname(pattern.id);

  return config.pool
    .filter(item => getDependencies(item, { key: config.key }).includes(id))
    .filter(item => item.id !== id)
    .map(item => path.dirname(item.id));
}

async function treeFromPaths(files) {
  const tree = {
    id: "root",
    children: []
  };

  await Promise.all(
    files.map(
      throat(1, async file => {
        const parts = file.path.split("/");
        let level = tree;

        return await Promise.all(
          parts.map(
            throat(1, async (id, i) => {
              const existing = level.children.find(c => c.name === id);
              const n = parts[i + 1];
              const itemPath = parts.slice(0, i + 1);

              if (!n) {
                return null;
              }

              const type = getType(n || id);
              const name = getName(id, file.manifest);

              if (existing) {
                level = existing;
                return null;
              }

              const fromPatterns = path.resolve.bind(null, "./patterns");
              const contents = await getDoc(fromPatterns(...itemPath), {
                type
              });

              const ast = remark().parse(contents);
              const first = find(ast, { type: "heading", depth: 1 });
              const front =
                typeof contents === "string"
                  ? frontmatter(contents).attributes
                  : {};
              const manifest = merge({}, DEFAULT_MANIFEST, front);
              manifest.name = first ? first.children[0].value : name;
              manifest.displayName = manifest.displayName || manifest.name;

              const item = {
                contents,
                name,
                manifest: type === "folder" ? manifest : file.manifest,
                id: parts.slice(0, i + 1).join("/"),
                path: itemPath,
                type
              };

              level.children.push(item);

              if (item.type === "folder") {
                item.children = [];
                level = item;
              } else {
                item.dependents = file.dependents;
                item.demoDependents = file.demoDependents;
                item.dependencies = file.dependencies;
                item.demoDependencies = file.demoDependencies;
                item.envs = file.envs;
              }

              return null;
            })
          )
        );
      })
    )
  );

  return tree;
}

function getName(basename, manifest) {
  if (basename === "pattern.json") {
    return manifest.name;
  }
  return basename;
}

function getType(basename) {
  if (basename === "pattern.json") {
    return "pattern";
  }
  return "folder";
}

async function getDoc(itemPath, context) {
  const baseName = context.type === "pattern" ? "index.md" : "readme.md";
  const file = path.resolve(itemPath, baseName);

  if (!await exists(file)) {
    return "";
  }
  return String(await sander.readFile(file));
}
