'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var defaultValue = false;

function onLocationChange(_, action) {
	return action.payload.query['demo-dependencies-enabled'] === 'true';
}

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': onLocationChange
}, defaultValue);