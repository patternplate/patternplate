'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = resizeDemo;
var type = exports.type = 'RESIZE_DEMO';

function resizeDemo(payload) {
	return function (dispatch) {
		dispatch((0, _.patchLocation)({
			query: {
				width: payload.x,
				height: payload.y
			}
		}));
	};
}

resizeDemo.type = type;