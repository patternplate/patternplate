import path from "path";
import { max, padEnd } from "lodash/fp";
import Observable from "zen-observable";

import build from "./build";
import getEnvSets from "./get-env-sets";
import getTargets from "./get-targets";
import writeEach from "./write-each";
import serverRequire from "./server-require";

// Const getPatternDemo = serverRequire('get-pattern-demo');

export default buildDemos;

function buildDemos(datasets, target, context) {
  return new Observable(observer => {
    const { app, rewriter } = context;

    const envs = getEnvSets(datasets);
    const idPad = padEnd(max(envs.map(env => env.id.length)));

    build(envs, {
      async read(set, sets, count) {
        observer.next(
          `${context.verbose ? "Demos: " : ""}${idPad(
            set.id
          )} ${count}/${envs.length}`
        );
        return await getPatternDemo(
          app,
          set.id,
          { environments: set.env },
          set.env
        );
      },
      async write(demo, set, sets, count) {
        const base = path.resolve(target, ...set.relative);
        const baseName = set.name;
        writeEach(demo, getTargets(base, baseName, set), rewriter);
      },
      done() {
        observer.next(
          `${context.verbose ? "Demos: " : ""}${envs.length}/${envs.length}`
        );
        observer.complete();
      }
    }).catch(err => observer.error(err));
  });
}
