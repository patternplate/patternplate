'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = openDocumentation;
var type = exports.type = 'OPEN_DOCUMENTATION';

function openDocumentation() {
	return function (dispatch, getState) {
		var state = getState();
		var pathname = state.base;
		dispatch((0, _.patchLocation)({ pathname: pathname }));
	};
}

openDocumentation.key = '';
openDocumentation.property = '';
openDocumentation.type = type;