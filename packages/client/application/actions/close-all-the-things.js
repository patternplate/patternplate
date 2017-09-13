'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = closeAllTheThings;
var type = exports.type = 'CLOSE_ALL_THE_THINGS';

function closeAllTheThings() {
  return function (dispatch) {
    dispatch((0, _.dismissAllMessages)());
    dispatch((0, _.patchLocation)({
      query: {
        'issue': null,
        'lightbox': null,
        'menu-enabled': null,
        'search-enabled': null,
        'source': null,
        'source-expanded': null
      }
    }));
  };
}

closeAllTheThings.type = type;