import {merge} from 'lodash';
export default getEnvSets;

function getEnvSets(sets) {
	return sets.reduce((sets, set) => {
		const amend = set.environmentNames.map(name => merge({}, set, {env: name}));
		return [...sets, ...amend];
	}, []);
}
