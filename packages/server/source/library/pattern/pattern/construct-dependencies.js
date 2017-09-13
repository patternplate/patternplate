import {find} from 'lodash';
export default constructDependencies;

function constructDependencies(patterns = {}, pool = []) {
	return Object
		.entries(patterns)
		.reduce((result, entry) => {
			const [name, id] = entry;
			const dependency = find(pool, {id});
			if (!dependency) {
				return result;
			}
			dependency.dependencies = constructDependencies(dependency.manifest.patterns, pool);
			result[name] = dependency;
			return result;
		}, {});
}
