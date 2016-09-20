import {find, merge} from 'lodash';
import getComponentIds from './get-component-ids';
import getEnvSets from './get-env-sets';

export default getFileSets;

function getFileSets(datasets, automount) {
	const envSets = getEnvSets(datasets);
	const componentIds = getComponentIds(datasets, automount);

	// multiply with demo files
	return envSets.reduce((sets, set) => {
		const mounts = componentIds.includes(set.id);
		const types = mounts ? ['css'] : ['css', 'js'];

		const amend = types.map(type => {
			const demo = find(set.files, {out: type, concern: 'demo'});
			const index = find(set.files, {out: type, concern: 'index'});
			const file = demo || index;
			if (file) {
				file.pattern = merge({}, set);
				return file;
			}
			return null;
		}).filter(Boolean);

		return [...sets, ...amend];
	}, []);
}
