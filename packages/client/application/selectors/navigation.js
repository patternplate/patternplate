'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flat = undefined;

const _lodash = require('lodash');

const _reselect = require('reselect');

const _tree = require('./tree');

const navigation = (0, _reselect.createSelector)((state) => {
  return state.schema.meta;
}, (state) => {
  return state.config.hierarchy;
}, (state) => {
  return state.id;
}, (state) => {
  return state.hideEnabled;
}, (state) => {
  return state.routing.locationBeforeTransitions;
}, (state) => {
  return state.base;
}, (tree, config, id, hide, location, base) => {
  const context = { base, hide, config, id, prefix: 'pattern', location };
  return (0, _tree.sanitize)((0, _lodash.merge)({}, tree), context);
});

exports.default = navigation;
const flat = exports.flat = (0, _reselect.createSelector)(navigation, _tree.flatten);