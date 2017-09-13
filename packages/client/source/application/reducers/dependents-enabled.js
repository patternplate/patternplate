import {handleActions} from 'redux-actions';

const defaultValue = false;

function onLocationChange(_, action) {
	return action.payload.query['dependents-enabled'] === 'true';
}

export default handleActions({
	'@@router/LOCATION_CHANGE': onLocationChange
}, defaultValue);
