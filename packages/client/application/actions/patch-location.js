'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _lodash = require('lodash');

var _reactRouterRedux = require('react-router-redux');

exports.default = patchLocation;
var type = exports.type = 'PATCH_LOCATION';

function patchLocation(payload) {
	return function (dispatch, getState) {
		var state = getState();
		var location = state.routing.locationBeforeTransitions;
		dispatch((0, _reactRouterRedux.push)((0, _lodash.merge)({}, location, payload)));
	};
}

patchLocation.type = type;