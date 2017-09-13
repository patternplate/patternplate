'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = require('../actions');

var _promiseThunkAction = require('../actions/promise-thunk-action');

exports.default = (0, _promiseThunkAction.handlePromiseThunkAction)(_actions.loadSchema, {
	success: function success(state, action) {
		return action.payload;
	}
});