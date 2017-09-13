import {handleActions} from 'redux-actions';

const defaultValue = 0;

function onPreviewLocationChange(_, action) {
	const index = Number(action.payload.query['search-preview']);
	return isNaN(index) ? 0 : Math.max(0, index);
}

function onPerformSeach() {
	return 0;
}

export default handleActions({
	'@@router/LOCATION_CHANGE': onPreviewLocationChange,
	'PERFORM_SEARCH': onPerformSeach
}, defaultValue);
