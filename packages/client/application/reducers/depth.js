'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDepth = getDepth;

const _reduxActions = require('redux-actions');

function getDepth(pathname) {
  const fragments = pathname.split('/').filter(Boolean);

  const fragmentIndex = ['pattern', 'doc'].map((known) => {
    return fragments.indexOf(known);
  }).find((index) => {
    return index !== -1;
  });

  const index = fragmentIndex === null ? fragments.length : fragmentIndex;
  return fragments.slice(0, index).filter(Boolean).length;
}

exports.default = (0, _reduxActions.handleAction)('@@router/LOCATION_CHANGE', {
  next: function next(_, _ref) {
    const pathname = _ref.payload.pathname;

    return getDepth(pathname);
  }
}, '.');