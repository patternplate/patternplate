'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flat = undefined;

var _lodash = require('lodash');

var _reselect = require('reselect');

var _tree = require('./tree');

var navigation = (0, _reselect.createSelector)(function (state) {
  return state.schema.meta;
}, function (state) {
  return state.config.hierarchy;
}, function (state) {
  return state.id;
}, function (state) {
  return state.hideEnabled;
}, function (state) {
  return state.routing.locationBeforeTransitions;
}, function (state) {
  return state.base;
}, function (tree, config, id, hide, location, base) {
  var context = { base: base, hide: hide, config: config, id: id, prefix: 'pattern', location: location };
  return (0, _tree.sanitize)((0, _lodash.merge)({}, tree), context);
});

exports.default = navigation;
var flat = exports.flat = (0, _reselect.createSelector)(navigation, _tree.flatten);