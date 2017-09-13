'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = searchPreview;
var type = exports.type = 'SEARCH_PREVIEW';

var MOVEMENTS = {
	up: -1,
	down: 1
};

function searchPreview(payload) {
	if (typeof payload === 'number') {
		return function (dispatch) {
			dispatch((0, _.patchLocation)({
				query: {
					'search-preview': payload
				}
			}));
		};
	}

	return function (dispatch, getState) {
		var state = getState();
		var delta = MOVEMENTS[payload] || 0;

		dispatch((0, _.patchLocation)({
			query: {
				'search-preview': state.searchPreview + delta
			}
		}));
	};
}

searchPreview.type = type;