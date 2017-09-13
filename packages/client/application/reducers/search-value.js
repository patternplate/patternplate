'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var defaultValue = '';

function onSetSearchLocationChange(_, action) {
	return action.payload.query.search;
}

function onSetSearch(_, action) {
	return action.payload;
}

function onPerformSearch(_, action) {
	return action.payload;
}

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': onSetSearchLocationChange,
	'SET_SEARCH': onSetSearch,
	'PERFORM_SEARCH': onPerformSearch
}, defaultValue);