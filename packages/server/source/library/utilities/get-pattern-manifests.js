import path from "path";
import { partition } from "lodash";
import getPatternManifest from "./get-pattern-manifest";
import readTree from "../filesystem/read-tree";

async function getPatternManifests(id, base, options = {}) {
  const patternPath = id.split("/").join(path.sep);
  const paths = await readTree(path.resolve(base, patternPath), options.cache);

  const patternIDs = paths
    .filter(item => path.basename(item) === "pattern.json")
    .filter(item => !item.includes("@environments"))
    .map(item => path.dirname(item))
    .map(item => path.relative(base, item))
    .map(item => item.split(path.sep).join("/"));

  const fetchManifest = pid => getPatternManifest(pid, base);
  const jobs = patternIDs.map(fetchManifest);
  const readings = await Promise.all(jobs);
  const [errs, manifests] = partition(readings, ([err]) => err !== null);
  return [errs.map(err => err[0]), manifests.map(m => m[1])];
}

export default getPatternManifests;
