import path from 'path';
import {max, padEnd} from 'lodash/fp';
import Observable from 'zen-observable';

import build from './build';
import getEnvSets from './get-env-sets';
import getTargets from './get-targets';
import writeEach from './write-each';
import serverRequire from './server-require';

// Const getPatternMetaData = serverRequire('get-pattern-meta-data');

export default buildData;

function buildData(datasets, target, context) {
  return new Observable(observer => {
    const {app} = context;
    const envSets = getEnvSets(datasets);
    const idPad = padEnd(max(envSets.map(e => e.id.length)));

    build(envSets, {
      async read(set, sets, count) {
        observer.next(
          `${context.verbose ? 'Data: ' : ''}${idPad(
            set.id
          )} ${count}/${sets.length}`
        );
        return getPatternMetaData(app, set.id, set.env);
      },
      async write(json, set, sets, count) {
        observer.next(
          `${context.verbose ? 'Data: ' : ''}${idPad(
            set.id
          )} ${count}/${sets.length}`
        );
        const base = path.resolve(target, ...set.relative);
        const baseName = `${set.baseName}.json`;
        const targets = getTargets(base, baseName, set);
        return writeEach(JSON.stringify(json), targets);
      },
      done() {
        observer.next(
          `${context.verbose
            ? 'Data: '
            : ''}${envSets.length}/${envSets.length}`
        );
        observer.complete();
      }
    }).catch(err => observer.error(err));
  });
}
