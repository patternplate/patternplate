import {handleActions} from 'redux-actions';

const defaultValue = 'index';

function onEnvironmentLocationChange(_, action) {
	return action.payload.query.environment || defaultValue;
}

export default handleActions({
	'@@router/LOCATION_CHANGE': onEnvironmentLocationChange
}, defaultValue);
