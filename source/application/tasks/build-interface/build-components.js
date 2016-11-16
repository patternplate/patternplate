import path from 'path';
import {max, padEnd} from 'lodash/fp';
import ora from 'ora';
import build from './build';
import getComponentSets from './get-component-sets';
import getTargets from './get-targets';
import writeEach from './write-each';
import serverRequire from './server-require';
const getComponent = serverRequire('get-component');

export default buildComponents;

async function buildComponents(datasets, target, context) {
	const {app, automount, jobPad, rewriter} = context;
	const spinner = ora().start();
	const sets = getComponentSets(datasets, automount);
	const idPad = padEnd(max(sets.map(set => set.id.length)));

	// Build component patterns
	return await build(sets, {
		async read(set, sets, count) {
			spinner.text = `${jobPad('component')} ${idPad(set.id)} ${count}/${sets.length}`;
			return ((await getComponent(app, set.id, set.env)) || {}).buffer;
		},
		async write(source, set, sets, count) {
			spinner.text = `${jobPad('component')} ${idPad(set.id)} ${count}/${sets.length}`;
			const base = path.resolve(...[target, ...set._pattern.relative, set._pattern.baseName]);
			const baseName = 'component.js';
			if (source) {
				return writeEach(source, getTargets(base, baseName, set), rewriter);
			}
		},
		done() {
			spinner.text = `${jobPad('component')} ${sets.length}/${sets.length}`;
			spinner.succeed();
		}
	});
}
