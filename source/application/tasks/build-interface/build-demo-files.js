import path from 'path';
import build from './build';
import getFileSets from './get-file-sets';
import getTargets from './get-targets';
import serverRequire from './server-require';
import writeEach from './write-each';
const getPatternFile = serverRequire('get-pattern-file');

export default buildDemoFiles;

async function buildDemoFiles(datasets, target, context) {
	const {app, spinner, rewriter} = context;
	const fileSets = getFileSets(datasets);

	return await build(fileSets, {
		async read(file, files, count) {
			const set = file.pattern;
			spinner.text = `demo files ${set.id} ${count}/${files.length}`;
			return await getPatternFile(app, set.id, {
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
			spinner.text = `files`;
			spinner.succeed();
		}
	});
}
