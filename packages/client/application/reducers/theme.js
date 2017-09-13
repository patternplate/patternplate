'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxActions = require('redux-actions');

var defaultValue = 'light';

var locationChangeHandler = function locationChangeHandler(_, _ref) {
	var payload = _ref.payload;

	return payload.query.theme || defaultValue;
};

exports.default = (0, _reduxActions.handleActions)({
	'@@router/LOCATION_CHANGE': locationChangeHandler
}, defaultValue);