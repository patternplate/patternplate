'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

const _reduxActions = require('redux-actions');

const defaultValue = '';

function onLightboxLocationChange(_, action) {
	return action.payload.query.lightbox;
}

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': onLightboxLocationChange
}, defaultValue);