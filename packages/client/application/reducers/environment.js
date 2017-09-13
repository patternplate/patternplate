'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reduxActions = require('redux-actions');

const defaultValue = 'index';

function onEnvironmentLocationChange(_, action) {
  return action.payload.query.environment || defaultValue;
}

exports.default = (0, _reduxActions.handleActions)({
  '@@router/LOCATION_CHANGE': onEnvironmentLocationChange
}, defaultValue);