'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _handleActions;

var _reduxActions = require('redux-actions');

var _markBlock = require('../actions/mark-block');

var _markBlock2 = _interopRequireDefault(_markBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultValue = null;

var markBlockHandler = function markBlockHandler(state, _ref) {
	var payload = _ref.payload;
	var active = payload.active,
	    id = payload.id;


	if (active) {
		return id;
	}

	return defaultValue;
};

var locationChangeHandler = function locationChangeHandler() {
	return defaultValue;
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _markBlock2.default, markBlockHandler), _defineProperty(_handleActions, '@@router/LOCATION_CHANGE', locationChangeHandler), _handleActions), defaultValue);