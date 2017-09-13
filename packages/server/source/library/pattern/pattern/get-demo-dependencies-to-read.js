import {find} from 'lodash';
export default getDemoDependenciesToRead;

function getDemoDependenciesToRead(patterns = {}, pool = []) {
	return Object
		.values(patterns)
		.reduce((result, id) => {
			const dependency = find(pool, {id});
			if (!dependency) {
				return result;
			}
			const sub = getDemoDependenciesToRead(dependency.manifest.demoPatterns, pool);
			const add = [...sub, id].filter(item => result.indexOf(item) === -1);
			return [...result, ...add];
		}, []);
}
