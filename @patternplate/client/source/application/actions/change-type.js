import assert from 'assert';
import {includes, merge} from 'lodash';
import urlQuery from '../utils/url-query';
import {patchLocation} from './';

export default changeType;
export const type = 'CHANGE_TYPE';

function changeType(input) {
	assert.equal(typeof input, 'string', 'input for changeType action must be of type string');

	return (dispatch, getState) => {
		const location = getState().routing.locationBeforeTransitions;
		const parsed = urlQuery.parse(location.query.source || '');
		const type = includes(['source', 'transformed'], input) ? input : 'source';
		const query = {type};
		const source = urlQuery.format(merge({}, parsed, {query}));
		dispatch(patchLocation({query: {source}}));
	};
}

changeType.type = type;
