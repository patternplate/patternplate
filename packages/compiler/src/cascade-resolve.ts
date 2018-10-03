import * as Fs from "fs";
import * as Path from "path";
import * as resolveFrom from "resolve-from";
import { getPkg } from "./get-pkg";

export function cascadeResolve(id: string, {bases, cwd}: { bases: string[], cwd: string }): string {
  const result = bases.reduce((resolved, base) => {
    if (resolved) {
      return resolved;
    }
    return ((resolveFrom as any).silent || resolveFrom)(base, id);
  }, '');

  if (typeof result === "string") {
    return result;
  }

  const relation = getImportRelation(id);

  if (relation !== ImportRelation.Id) {
    const pathBases = bases.map(base => Path.join(base, id));
    throw new Error(`${relation}ly required file "${id}" does not exist at ${pathBases.join(", ")}`);
  }

  // Global require path
  const pkg = getPkg(cwd) || { dependencies: {}, devDependencies: {}};
  const deps = Object.keys(pkg.dependencies || {});
  const devDeps = Object.keys(pkg.devDependencies || {});

  if (deps.indexOf(id) === -1 && devDeps.indexOf(id) === -1 && !Fs.existsSync(Path.join(cwd, "lerna.json"))) {
    throw new Error(`"${id}" is not installed as dependency at ${cwd}/package.json. Please make sure to install it via npm.`);
  }

  const fragments = id.split("/");
  const pkgFragments = id.charAt(0) === "@"
    ? fragments.slice(0, 2)
    : fragments.slice(0, 1);

  const pkgId = pkgFragments.join("/");
  const pkgManifest = (resolveFrom as any).silent(process.cwd(), `${pkgId}/package`);

  if (pkgManifest) {
    const pkg = require(pkgManifest);
    throw new Error(`"${pkgId}" can be resolved, but "${id.replace(pkgId, '')}" is not available, it might be corrupted.\nPlease reinstall your node_modules and file an issue at ${pkg.bugs.url} if the problem persists.`);
  } else {
    throw new Error(`Could not resolve "${id}" from ${bases.join(", ")}`);
  }
}

export enum ImportRelation {
  Relative = 'Relative',
  Absolute = 'Absolute',
  Id = 'Id'
}

function getImportRelation(path: string): ImportRelation {
  if (path.charAt(0) === ".") {
    return ImportRelation.Relative;
  }

  if (path.charAt(0) === "/") {
    return ImportRelation.Absolute;
  }

  return ImportRelation.Id;
}
