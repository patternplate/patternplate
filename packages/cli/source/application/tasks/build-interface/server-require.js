import deepRequire from './deep-require';

export default serverRequire;

function serverRequire(id) {
	return deepRequire(`@patternplate/server/library/${id}`);
}
