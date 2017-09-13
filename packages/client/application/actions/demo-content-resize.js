'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

exports.default = (0, _reduxActions.createAction)('DEMO_CONTENT_RESIZE', function (_ref) {
  var width = _ref.width,
      height = _ref.height;
  return { width: width, height: height };
});