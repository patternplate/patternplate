import throat from 'throat';
import {sync as resolve} from 'resolve';
import {max, padEnd} from 'lodash/fp';
import {merge} from 'lodash';
import Observable from 'zen-observable';
import getPatternIds from './get-pattern-ids';
import isPattern from './is-pattern';

export default patternMetaData;

const getPatternMetaData = require(resolve(
  '@patternplate/server/library/get-pattern-meta-data'
));

function patternMetaData(app, client, server) {
  return new Observable(observer => {
    let count = 1;

    getPatternIds(app, client, server)
      .then(patterns => patterns.filter(isPattern))
      .then(patterns => {
        const idPad = padEnd(max(patterns.map(p => p.id.length)));

        const jobs = patterns.map(
          throat(1, async pattern => {
            observer.next({
              message: `${idPad(pattern.id)} ${count}/${patterns.length}`
            });
            const data = await getPatternMetaData(server, pattern.id, 'index');

            merge(data, pattern, {
              variants: {},
              environmentNames: data.environments.map(env => env.name)
            });

            count += 1;
            observer.next({data});
            return data;
          })
        );

        return Promise.all(jobs).then(() => {
          observer.next({message: `${patterns.length}/${patterns.length}`});
          observer.complete();
        });
      });
  });
}
