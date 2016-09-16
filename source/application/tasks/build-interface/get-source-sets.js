import {merge} from 'lodash';
import getEnvSets from './get-env-sets';
export default getSourceSets;

function getSourceSets(datasets) {
	return getSourceFileSets(datasets)
		.reduce((sets, set) => {
			const types = set.file.type === 'documentation' ?
				['source'] : ['source', 'transformed'];
			const amend = types.map(type => {
				return merge({}, set, {type});
			});
			return [...sets, ...amend];
		}, []);
}

function getSourceFileSets(datasets) {
	const envSets = getEnvSets(datasets);
	return envSets.reduce((sets, set) => {
		const amend = set.files.map(file => {
			return merge({}, set, {file});
		});
		return [...sets, ...amend];
	}, []);
}
