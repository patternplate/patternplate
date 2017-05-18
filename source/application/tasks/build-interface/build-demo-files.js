import path from 'path';
import {max, padEnd} from 'lodash/fp';
import Observable from 'zen-observable';

import build from './build';
import getFileSets from './get-file-sets';
import getTargets from './get-targets';
import serverRequire from './server-require';
import writeEach from './write-each';
const getPatternFile = serverRequire('get-pattern-file');

export default buildDemoFiles;

function buildDemoFiles(datasets, target, context) {
	return new Observable(observer => {
		const {app, rewriter} = context;
		const fileSets = getFileSets(datasets);
		const idPad = padEnd(max(fileSets.map(e => e.id.length)));

		build(fileSets, {
			read(file, files, count) {
				const set = file.pattern;
				observer.next(`${context.verbose ? 'Demo files: ' : ''}${idPad(file.id)} ${count}/${files.length}`);
				return getPatternFile(app, set.id, {
					outFormats: [file.out],
					baseNames: [path.basename(file.path, path.extname(file.path))],
					environments: [set.env]
				}, file.out, set.env);
			},
			async write(result, file) {
				const pattern = file.pattern;
				const frags = [target, ...pattern.relative, pattern.baseName];
				const base = path.resolve(...frags);
				const baseName = `index.${file.out}`;
				return writeEach(result, getTargets(base, baseName, file.pattern), rewriter);
			},
			done() {
				observer.next(`${context.verbose ? 'Demo files: ' : ''}${fileSets.length}/${fileSets.length}`);
				observer.complete();
			}
		})
		.catch(err => observer.error(err));
	});
}
