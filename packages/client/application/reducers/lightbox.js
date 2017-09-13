'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var defaultValue = '';

function onLightboxLocationChange(_, action) {
	return action.payload.query.lightbox;
}

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': onLightboxLocationChange
}, defaultValue);