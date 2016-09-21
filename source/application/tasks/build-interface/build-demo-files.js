import path from 'path';
import {padEnd, max} from 'lodash/fp';
import ora from 'ora';
import build from './build';
import getFileSets from './get-file-sets';
import getTargets from './get-targets';
import serverRequire from './server-require';
import writeEach from './write-each';
const getPatternFile = serverRequire('get-pattern-file');

export default buildDemoFiles;

async function buildDemoFiles(datasets, target, context) {
	const {app, rewriter, jobPad} = context;
	const fileSets = getFileSets(datasets);

	if (!fileSets.length) {
		return;
	}

	const spinner = ora().start();
	const idPad = padEnd(max(fileSets.map(s => s.id.length)));

	return await build(fileSets, {
		async read(file, files, count) {
			const set = file.pattern;
			spinner.text = `${jobPad('demo files')} ${idPad(file.id)} ${count}/${files.length}`;
			return await getPatternFile(app, set.id, {
				outFormats: [file.out],
				baseNames: [path.basename(file.path, path.extname(file.path))],
				environments: [set.env]
			}, file.out, set.env);
		},
		async write(result, file, files, count) {
			const pattern = file.pattern._pattern;
			spinner.text = `${jobPad('demo files')} ${idPad(file.id)} ${count}/${files.length}`;
			const frags = [target, ...pattern.relative, pattern.baseName];
			const base = path.resolve(...frags);
			const baseName = `index.${file.out}`;
			return writeEach(result, getTargets(base, baseName, file.pattern), rewriter);
		},
		done() {
			spinner.text = `${jobPad('demo files')} ${fileSets.length}/${fileSets.length}`;
			spinner.succeed();
		}
	});
}
