import path from 'path';
import {max, padEnd} from 'lodash/fp';
import ora from 'ora';
import build from './build';
import getEnvSets from './get-env-sets';
import getTargets from './get-targets';
import writeEach from './write-each';
import serverRequire from './server-require';

const getPatternMetaData = serverRequire('get-pattern-meta-data');

export default buildData;

async function buildData(datasets, target, context) {
	const {app, jobPad} = context;
	const spinner = ora().start();
	const envSets = getEnvSets(datasets);
	const idPad = padEnd(max(envSets.map(e => e.id.length)));

	return await build(envSets, {
		async read(set, sets, count) {
			spinner.text = `${jobPad('data')} ${idPad(set.id)} ${count}/${sets.length}`;
			return getPatternMetaData(app, set.id, set.env);
		},
		async write(json, set, sets, count) {
			spinner.text = `${jobPad('data')} ${idPad(set.id)} ${count}/${sets.length}`;
			const base = path.resolve(target, ...set._pattern.relative);
			const baseName = `${set._pattern.baseName}.json`;
			const targets = getTargets(base, baseName, set);
			return writeEach(JSON.stringify(json), targets);
		},
		done() {
			spinner.text = `${jobPad('data')} ${envSets.length}/${envSets.length}`;
			spinner.succeed();
		}
	});
}
