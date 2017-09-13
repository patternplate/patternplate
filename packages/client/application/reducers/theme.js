'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reduxActions = require('redux-actions');

const defaultValue = 'light';

const locationChangeHandler = function locationChangeHandler(_, _ref) {
  const payload = _ref.payload;

  return payload.query.theme || defaultValue;
};

exports.default = (0, _reduxActions.handleActions)({
  '@@router/LOCATION_CHANGE': locationChangeHandler
}, defaultValue);