'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getDepth = getDepth;

var _reduxActions = require('redux-actions');

function getDepth(pathname) {
	var fragments = pathname.split('/').filter(Boolean);

	var fragmentIndex = ['pattern', 'doc'].map(function (known) {
		return fragments.indexOf(known);
	}).find(function (index) {
		return index !== -1;
	});

	var index = fragmentIndex === null ? fragments.length : fragmentIndex;
	return fragments.slice(0, index).filter(Boolean).length;
}

exports.default = (0, _reduxActions.handleAction)('@@router/LOCATION_CHANGE', {
	next: function next(_, _ref) {
		var pathname = _ref.payload.pathname;

		return getDepth(pathname);
	}
}, '.');