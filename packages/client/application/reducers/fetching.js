'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promiseThunkAction = require('../actions/promise-thunk-action');

var _actions = require('../actions');

exports.default = (0, _promiseThunkAction.handlePromiseThunkAction)(_actions.loadSchema, {
	start: function start() {
		return true;
	},
	success: function success() {
		return false;
	},
	error: function error() {
		return false;
	}
}, {
	defaultValue: false
});