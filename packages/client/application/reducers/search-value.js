'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reduxActions = require('redux-actions');

const defaultValue = '';

function onSetSearchLocationChange(_, action) {
  return action.payload.query.search;
}

function onSetSearch(_, action) {
  return action.payload;
}

function onPerformSearch(_, action) {
  return action.payload;
}

exports.default = (0, _reduxActions.handleActions)({
  '@@router/LOCATION_CHANGE': onSetSearchLocationChange,
  SET_SEARCH: onSetSearch,
  PERFORM_SEARCH: onPerformSearch
}, defaultValue);