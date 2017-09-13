import {find} from 'lodash';
export default getDependenciesToRead;

function getDependenciesToRead(patterns = {}, pool = []) {
	return Object
		.values(patterns)
		.reduce((result, id) => {
			const dependency = find(pool, {id});
			if (!dependency) {
				return result;
			}
			const sub = getDependenciesToRead(dependency.manifest.patterns, pool);
			const add = [...sub, id].filter(item => result.indexOf(item) === -1);
			return [...result, ...add];
		}, []);
}
