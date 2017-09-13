import path from 'path';
import {max, padEnd} from 'lodash/fp';
import Observable from 'zen-observable';

import build from './build';
import getTargets from './get-targets';
import getSourceSets from './get-source-sets';
import writeEach from './write-each';
import serverRequire from './server-require';

// Const getPatternSource = serverRequire('get-pattern-source');
// const urlQuery = serverRequire('utilities/url-query');

export default buildSources;

function buildSources(datasets, target, context) {
  return new Observable(observer => {
    const {app, rewriter} = context;
    const sourceSets = getSourceSets(datasets);
    const getSource = getPatternSource(app);

    const idPad = padEnd(
      max(sourceSets.map(e => e.type.length + e.file.id.length + 1))
    );

    build(sourceSets, {
      async read(set, sets, count) {
        observer.next(
          `${context.verbose ? 'Sources: ' : ''}${idPad(
            `${set.type}:${set.file.id}`
          )} ${count}/${sets.length}`
        );
        return getSource(set.file.id, set.type, set.env);
      },
      async write(source, set) {
        const typePath = urlQuery.format({
          pathname: '',
          query: {type: set.type}
        });
        const baseName = path.basename(set.file.id);
        const dirName = path.dirname(set.file.id);
        const base = path.resolve(target, dirName, typePath);
        return writeEach(
          source.body,
          getTargets(base, baseName, set),
          rewriter
        );
      },
      done() {
        observer.next(
          `${context.verbose
            ? 'Sources: '
            : ''}${sourceSets.length}/${sourceSets.length}`
        );
        observer.complete();
      }
    }).catch(err => observer.error(err));
  });
}
