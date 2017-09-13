import {handleActions} from 'redux-actions';

const defaultValue = '';

function onSetSearchLocationChange(_, action) {
	return action.payload.query.search;
}

function onSetSearch(_, action) {
	return action.payload;
}

function onPerformSearch(_, action) {
	return action.payload;
}

export default handleActions({
	'@@router/LOCATION_CHANGE': onSetSearchLocationChange,
	'SET_SEARCH': onSetSearch,
	'PERFORM_SEARCH': onPerformSearch
}, defaultValue);
