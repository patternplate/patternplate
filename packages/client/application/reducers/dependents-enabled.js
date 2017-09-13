'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reduxActions = require('redux-actions');

const defaultValue = false;

function onLocationChange(_, action) {
  return action.payload.query['dependents-enabled'] === 'true';
}

exports.default = (0, _reduxActions.handleActions)({
  '@@router/LOCATION_CHANGE': onLocationChange
}, defaultValue);