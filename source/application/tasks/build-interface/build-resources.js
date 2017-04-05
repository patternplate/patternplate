import path from 'path';
import Observable from 'zen-observable';

import build from './build';
import getTargets from './get-targets';
import getSourceSets from './get-source-sets';
import writeEach from './write-each';
import serverRequire from './server-require';

// const getPatternSource = serverRequire('get-pattern-source');
// const urlQuery = serverRequire('utilities/url-query');

export default buildResources;

function buildResources(resources, target) {
	return new Observable(observer => {
		build(resources, {
			async read(source) {
				observer.next(source.id);
				return await source.content;
			},
			async write(source, set) {
				const baseName = path.basename(set.id);
				const dirName = path.dirname(set.id);
				const filePath = path.resolve(target, dirName, `${baseName}.${set.type}`);
				return writeEach(source, [filePath]);
			},
			done() {
				observer.complete();
			}
		}).catch(err => observer.error(err));
	});
}
