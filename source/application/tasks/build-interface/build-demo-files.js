import path from 'path';
import Observable from 'zen-observable';

import build from './build';
import getFileSets from './get-file-sets';
import getTargets from './get-targets';
import serverRequire from './server-require';
import writeEach from './write-each';
const getPatternFile = serverRequire('get-pattern-file');

export default buildDemoFiles;

function buildDemoFiles(dataset, target, context) {
	return new Observable(observer => {
		const {app, rewriter} = context;
		const fileSets = getFileSets([dataset]);

		if (!fileSets.length) {
			return observer.complete();
		}

		build(fileSets, {
			read(file) {
				const set = file.pattern;
				observer.next(file.id);
				return getPatternFile(app, set.id, {
					outFormats: [file.out],
					baseNames: [path.basename(file.path, path.extname(file.path))],
					environments: [set.env]
				}, file.out, set.env);
			},
			async write(result, file) {
				const pattern = file.pattern._pattern;
				const frags = [target, ...pattern.relative, pattern.baseName];
				const base = path.resolve(...frags);
				const baseName = `index.${file.out}`;
				return writeEach(result, getTargets(base, baseName, file.pattern), rewriter);
			},
			done() {
				observer.complete();
			}
		})
		.catch(err => observer.error(err));
	});
}
