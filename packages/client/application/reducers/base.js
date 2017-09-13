'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getBase = getBase;

var _reduxActions = require('redux-actions');

var _depth = require('./depth');

function getBase(pathname) {
	var depth = (0, _depth.getDepth)(pathname);

	return depth > 0 ? '/' + pathname.split('/').filter(Boolean).slice(0, depth).join('/') + '/' : '/';
}

exports.default = (0, _reduxActions.handleAction)('@@router/LOCATION_CHANGE', {
	next: function next(_, _ref) {
		var pathname = _ref.payload.pathname;

		return getBase(pathname);
	}
}, '/');