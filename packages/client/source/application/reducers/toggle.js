import assert from 'assert';
import {handleActions} from 'redux-actions';

export default (action, options = {}) => {
	assert(typeof action === 'function', `toggle needs an action to create a handler for, received ${action} of type ${typeof action}`);

	return handleActions({
		'@@router/LOCATION_CHANGE': (_, {payload}) => {
			if (!(action.key in payload.query)) {
				return options.defaultValue;
			}
			return payload.query[action.key] === 'true';
		}
	}, options.defaultValue);
};
