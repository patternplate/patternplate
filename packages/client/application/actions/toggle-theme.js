'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = toggleTheme;
var type = exports.type = 'TOGGLE_THEME';

function toggleTheme(forced) {
	return function (dispatch, getState) {
		var theme = forced ? forced : getState().theme === 'dark' ? 'light' : 'dark';
		dispatch((0, _.patchLocation)({
			query: {
				theme: theme
			}
		}));
	};
}

toggleTheme.type = type;