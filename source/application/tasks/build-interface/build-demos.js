import path from 'path';
import {max, padEnd} from 'lodash/fp';
import ora from 'ora';

import build from './build';
import getEnvSets from './get-env-sets';
import getTargets from './get-targets';
import writeEach from './write-each';
import serverRequire from './server-require';

const getPatternDemo = serverRequire('get-pattern-demo');

export default buildDemos;

async function buildDemos(datasets, target, context) {
	const {app, rewriter, jobPad} = context;
	const spinner = ora().start();

	const envs = getEnvSets(datasets);
	const idPad = padEnd(max(envs.map(env => env.id.length)));

	try {
		return await build(envs, {
			async read(set, sets, count) {
				spinner.text = `${jobPad('demo')} ${idPad(set.id)} ${count}/${envs.length}`;
				return await getPatternDemo(app, set.id, {environments: set.env}, set.env);
			},
			async write(demo, set, sets, count) {
				spinner.text = `${jobPad('demo')} ${idPad(set.id)} ${count}/${envs.length}`;
				const base = path.resolve(target, ...set._pattern.relative);
				const baseName = set._pattern.name;
				writeEach(demo, getTargets(base, baseName, set), rewriter);
			},
			done() {
				spinner.text = `${jobPad('demo')} ${envs.length}/${envs.length}`;
				spinner.succeed();
			}
		});
	} catch (error) {
		spinner.fail();
		throw error;
	}
}
