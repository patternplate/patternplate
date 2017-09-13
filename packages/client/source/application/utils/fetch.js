import 'isomorphic-fetch';
import {merge} from 'lodash';

export default fetch;

const defaultHeaders = {
	headers: {accept: 'application/json'},
	credentials: 'include'
};

function fetch(uri, userHeaders) {
	const headers = userHeaders === false ?
		{} :
		merge({}, userHeaders, defaultHeaders);

	return global.fetch(uri, headers);
}
