'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'LOAD_PATTERN_DEMO_SUCCESS':
			if (action.payload.id in state) {
				return (0, _lodash.omit)(state, action.payload.id);
			}
			return state;
		case 'LOAD_PATTERN_DEMO_ERROR':
			return (0, _lodash.merge)({}, state, _defineProperty({}, action.payload.id, action.payload.error));
		default:
			return state;
	}
};