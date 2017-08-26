import {find} from 'lodash';
export default getPatternManifestsData;

function getPatternManifestsData(base, patterns = {}, pool = []) {
	return Object.values(patterns).map(id => {
		const dependency = find(pool, {id});

		if (!dependency) {
			throw new Error(`Could not find dependency ${id}`);
		}

		return [dependency, ...getPatternManifestsData(base, dependency.patterns, pool)];
	});
}
