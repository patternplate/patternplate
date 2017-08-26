import {get} from 'lodash';

function unwrap(fn, path) {
	return e => fn(get(e, path));
}

export default unwrap;
