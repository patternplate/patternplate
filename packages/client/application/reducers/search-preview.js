'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reduxActions = require('redux-actions');

const defaultValue = 0;

function onPreviewLocationChange(_, action) {
  const index = Number(action.payload.query['search-preview']);
  return isNaN(index) ? 0 : Math.max(0, index);
}

function onPerformSeach() {
  return 0;
}

exports.default = (0, _reduxActions.handleActions)({
  '@@router/LOCATION_CHANGE': onPreviewLocationChange,
  PERFORM_SEARCH: onPerformSeach
}, defaultValue);