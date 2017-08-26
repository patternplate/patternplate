import {omit, merge} from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case 'LOAD_PATTERN_DEMO_SUCCESS':
			if (action.payload.id in state) {
				return omit(state, action.payload.id);
			}
			return state;
		case 'LOAD_PATTERN_DEMO_ERROR':
			return merge({}, state, {[action.payload.id]: action.payload.error});
		default:
			return state;
	}
};
