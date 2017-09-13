'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = withToggle;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _reactRedux = require('react-redux');

var _lodash = require('lodash');

var _shortcuts = require('../shortcuts');

var _shortcuts2 = _interopRequireDefault(_shortcuts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = (0, _lodash.values)((0, _shortcuts2.default)());

function withToggle(action) {
	var shortcut = s.find(function (i) {
		return i.key === action.key;
	});

	(0, _assert2.default)(shortcut, action + ' passed to withToggle has no matching shortcut found for ' + action.key);

	return function (Component) {
		var mapProps = function mapProps(state) {
			var enabled = state[action.property];
			return { enabled: enabled, shortcut: shortcut };
		};
		return (0, _reactRedux.connect)(mapProps)(Component);
	};
}