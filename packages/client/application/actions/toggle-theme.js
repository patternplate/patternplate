'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _ = require('./');

exports.default = toggleTheme;
const type = exports.type = 'TOGGLE_THEME';

function toggleTheme(forced) {
  return function (dispatch, getState) {
    const theme = forced ? forced : getState().theme === 'dark' ? 'light' : 'dark';
    dispatch((0, _.patchLocation)({
      query: {
        theme
      }
    }));
  };
}

toggleTheme.type = type;