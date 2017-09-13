import {handleActions} from 'redux-actions';

const defaultValue = '';

function onLightboxLocationChange(_, action) {
	return action.payload.query.lightbox;
}

export default handleActions({
	'@@router/LOCATION_CHANGE': onLightboxLocationChange
}, defaultValue);
