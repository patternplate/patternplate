import path from "path";
import { max, padEnd } from "lodash/fp";
import Observable from "zen-observable";

import build from "./build";
import getTargets from "./get-targets";
import getSourceSets from "./get-source-sets";
import writeEach from "./write-each";
import serverRequire from "./server-require";

export default buildResources;

function buildResources(resources, target, context) {
  return new Observable(observer => {
    const idPad = padEnd(max(resources.map(r => r.id.length)));

    build(resources, {
      async read(source, _, count) {
        observer.next(
          `${context.verbose ? "Resources: " : ""}${idPad(
            source.id
          )} ${count}/${resources.length}`
        );
        return await source.content;
      },
      async write(source, set) {
        const baseName = path.basename(set.id);
        const dirName = path.dirname(set.id);
        const filePath = path.resolve(
          target,
          dirName,
          `${baseName}.${set.type}`
        );
        return writeEach(source, [filePath]);
      },
      done() {
        observer.next(
          `${context.verbose
            ? "Resources: "
            : ""}${resources.length}/${resources.length}`
        );
        observer.complete();
      }
    }).catch(err => observer.error(err));
  });
}
