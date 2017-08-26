import {merge} from 'lodash';
import {push} from 'react-router-redux';

export default patchLocation;
export const type = 'PATCH_LOCATION';

function patchLocation(payload) {
	return (dispatch, getState) => {
		const state = getState();
		const location = state.routing.locationBeforeTransitions;
		dispatch(push(merge({}, location, payload)));
	};
}

patchLocation.type = type;
