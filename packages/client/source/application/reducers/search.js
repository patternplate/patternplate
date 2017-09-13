import {handleActions} from 'redux-actions';

const defaultValue = '';

function onSearchLocationChange(_, action) {
	return action.payload.query.search;
}

function onPerformSeach(_, action) {
	return action.payload;
}

export default handleActions({
	'@@router/LOCATION_CHANGE': onSearchLocationChange,
	'PERFORM_SEARCH': onPerformSeach
}, defaultValue);
