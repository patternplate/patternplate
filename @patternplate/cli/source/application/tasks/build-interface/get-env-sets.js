import {merge} from 'lodash';
export default getEnvSets;

function getEnvSets(sets) {
	const s = Array.isArray(sets) ? sets : [];

	return s.reduce((sets, set) => {
		const amend = (set.environmentNames || []).map(name => merge({}, set, {env: name}));
		return [...sets, ...amend];
	}, []);
}
