'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reduxActions = require('redux-actions');

exports.default = (0, _reduxActions.createAction)('WINDOW_RESIZE', (_ref) => {
  let width = _ref.width,
      height = _ref.height;
  return {
    width,
    height
  };
});