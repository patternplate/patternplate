import {camelCase, snakeCase} from 'lodash';
import {patchLocation} from './';

export function toggle(key) {
	const property = camelCase(key);

	const fn = (payload = {}) => {
		return (dispatch, getState) => {
			const next = ('forced' in payload) ? payload.forced : !getState()[property];
			dispatch(patchLocation({query: {[key]: next}}));
		};
	};

	fn.type = `TOGGLE_${snakeCase(key).toUpperCase()}`;
	fn.property = property;
	fn.key = key;
	return fn;
}
