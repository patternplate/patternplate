'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reduxActions = require('redux-actions');

const defaultValue = '';

function onSearchLocationChange(_, action) {
  return action.payload.query.search;
}

function onPerformSeach(_, action) {
  return action.payload;
}

exports.default = (0, _reduxActions.handleActions)({
  '@@router/LOCATION_CHANGE': onSearchLocationChange,
  PERFORM_SEARCH: onPerformSeach
}, defaultValue);