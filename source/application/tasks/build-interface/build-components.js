import path from 'path';
import build from './build';
import getComponentSets from './get-component-sets';
import getTargets from './get-targets';
import writeEach from './write-each';
import serverRequire from './server-require';
const getComponent = serverRequire('get-component');

export default buildComponents;

async function buildComponents(datasets, target, context) {
	const {app, automount, spinner} = context;

	// Build component patterns
	return await build(getComponentSets(datasets, automount), {
		async read(set, sets, count) {
			spinner.text = `component ${set.id} ${count}/${sets.length}`;
			return await getComponent(app, set.id, set.env);
		},
		async write(component, set) {
			const base = path.resolve(...[target, ...set._pattern.relative, set._pattern.baseName]);
			const baseName = 'component.js';
			return writeEach(component.buffer, getTargets(base, baseName, set));
		},
		done() {
			spinner.text = 'components';
			spinner.succeed();
		}
	});
}
