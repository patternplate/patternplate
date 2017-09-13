'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.flat = undefined;

var _lodash = require('lodash');

var _reselect = require('reselect');

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _tree = require('./tree');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var docs = (0, _reselect.createSelector)(function (state) {
	return state.schema.docs;
}, function (state) {
	return state.id;
}, function (state) {
	return state.hideEnabled;
}, function (state) {
	return state.routing.locationBeforeTransitions;
}, function (state) {
	return state.base;
}, function (tree, id, hide, location, base) {
	var context = { hide: hide, id: id, prefix: 'doc', location: location, base: base };
	var t = (0, _tree.sanitize)((0, _lodash.merge)({}, tree), context);

	if (!t.children.some(function (i) {
		return i.id === 'root';
	})) {
		var doc = (0, _tree.enrich)({
			contents: tree.contents,
			href: '/',
			id: tree.id,
			manifest: tree.manifest,
			path: ['/'],
			type: 'doc'
		}, { id: id, config: {}, prefix: '/', location: location, base: base });

		t.children.push(doc);
	}

	return _seamlessImmutable2.default.from(t);
});

exports.default = docs;
var flat = exports.flat = (0, _reselect.createSelector)(docs, _tree.flatten);