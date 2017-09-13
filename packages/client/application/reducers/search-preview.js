'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var defaultValue = 0;

function onPreviewLocationChange(_, action) {
	var index = Number(action.payload.query['search-preview']);
	return isNaN(index) ? 0 : Math.max(0, index);
}

function onPerformSeach() {
	return 0;
}

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': onPreviewLocationChange,
	'PERFORM_SEARCH': onPerformSeach
}, defaultValue);