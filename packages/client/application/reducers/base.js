'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBase = getBase;

const _reduxActions = require('redux-actions');

const _depth = require('./depth');

function getBase(pathname) {
  const depth = (0, _depth.getDepth)(pathname);

  return depth > 0 ? '/' + pathname.split('/').filter(Boolean).slice(0, depth).join('/') + '/' : '/';
}

exports.default = (0, _reduxActions.handleAction)('@@router/LOCATION_CHANGE', {
  next: function next(_, _ref) {
    const pathname = _ref.payload.pathname;

    return getBase(pathname);
  }
}, '/');