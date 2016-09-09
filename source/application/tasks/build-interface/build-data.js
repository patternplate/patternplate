import path from 'path';
import build from './build';
import getEnvSets from './get-env-sets';
import getTargets from './get-targets';
import writeEach from './write-each';
import serverRequire from './server-require';

const getPatternMetaData = serverRequire('get-pattern-meta-data');

export default buildData;

async function buildData(datasets, target, context) {
	const {app, spinner} = context;

	return await build(getEnvSets(datasets), {
		async read(set, sets, count) {
			spinner.text = `data ${set.id} ${count}/${sets.length}`;
			return getPatternMetaData(app, set.id, set.env);
		},
		async write(json, set) {
			const base = path.resolve(target, ...set._pattern.relative);
			const baseName = `${set._pattern.baseName}.json`;
			const targets = getTargets(base, baseName, set);
			return writeEach(JSON.stringify(json), targets);
		},
		done() {
			spinner.text = `data`;
			spinner.succeed();
		}
	});
}
