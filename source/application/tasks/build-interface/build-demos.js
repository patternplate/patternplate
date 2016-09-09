import path from 'path';

import build from './build';
import getEnvSets from './get-env-sets';
import getTargets from './get-targets';
import writeEach from './write-each';
import serverRequire from './server-require';

const getPatternDemo = serverRequire('get-pattern-demo');

export default buildDemos;

async function buildDemos(datasets, target, context) {
	const {app, spinner, rewriter} = context;

	return await build(getEnvSets(datasets), {
		async read(set, sets, count) {
			spinner.text = `demo ${set.id} ${count}/${sets.length}`;
			return await getPatternDemo(app, set.id, {environments: set.env}, set.env);
		},
		async write(demo, set) {
			const base = path.resolve(target, ...set._pattern.relative);
			const baseName = set._pattern.name;
			writeEach(demo, getTargets(base, baseName, set), rewriter);
		},
		done() {
			spinner.text = `demos`;
			spinner.succeed();
		}
	});
}
