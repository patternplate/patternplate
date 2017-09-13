'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var defaultValue = 'index';

function onEnvironmentLocationChange(_, action) {
	return action.payload.query.environment || defaultValue;
}

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': onEnvironmentLocationChange
}, defaultValue);