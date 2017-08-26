import {find} from 'lodash';
import constructDependencies from './construct-dependencies';
export default constructDemoDependencies;

function constructDemoDependencies(patterns = {}, pool = []) {
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
