'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _reduxActions = require('redux-actions');

var _actions = require('../actions');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultValue = {
	height: 0,
	width: 0
};

exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _actions.windowResize, onWindowResize), defaultValue);


function onWindowResize(state, _ref) {
	var payload = _ref.payload;

	var next = { width: payload.width, height: payload.height };
	if (!(0, _lodash.isEqual)(next, state)) {
		return next;
	}
	return state;
}