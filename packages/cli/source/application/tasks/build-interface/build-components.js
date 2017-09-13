import path from 'path';
import {max, padEnd} from 'lodash/fp';
import Observable from 'zen-observable';

import build from './build';
import getComponentSets from './get-component-sets';
import getTargets from './get-targets';
import writeEach from './write-each';
import serverRequire from './server-require';
// Const getComponent = serverRequire('get-component');

export default buildComponents;

function buildComponents(datasets, target, context) {
  return new Observable(observer => {
    const {app, automount, rewriter} = context;
    const sets = getComponentSets(datasets, automount);
    const idPad = padEnd(max(sets.map(set => set.id.length)));

    // Build component patterns
    build(sets, {
      async read(set, sets, count) {
        observer.next(
          `${context.verbose ? 'Automount components: ' : ''}${idPad(
            set.id
          )} ${count}/${sets.length}`
        );
        return ((await getComponent(app, set.id, set.env)) || {}).buffer;
      },
      async write(source, set, sets, count) {
        const base = path.resolve(...[target, ...set.relative, set.baseName]);
        const baseName = 'component.js';
        if (source) {
          return writeEach(source, getTargets(base, baseName, set), rewriter);
        }
      },
      done() {
        observer.next(
          `${context.verbose
            ? 'Automount components: '
            : ''}${sets.length}/${sets.length}`
        );
        observer.complete();
      }
    }).catch(err => observer.error(err));
  });
}
