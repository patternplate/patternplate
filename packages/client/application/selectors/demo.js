'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.selectSrc = undefined;

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _reselect = require('reselect');

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectEnv = (0, _reselect.createSelector)(function (state) {
	return state.environment;
}, function (state) {
	return state.schema.envs;
}, function (env, envs) {
	return Array.isArray(envs) ? envs.find(function (e) {
		return e.name === env;
	}) : { name: 'index' };
});

var selectSrc = exports.selectSrc = (0, _reselect.createSelector)(_item2.default, function (state) {
	return state.base;
}, selectEnv, function (state) {
	return state.pattern;
}, function (state) {
	return state.mountEnabled;
}, function (item, base, env, pattern, mount) {
	if (!item) {
		return null;
	}

	var pathname = _urlQuery2.default.format({
		pathname: base + 'demo/' + item.id + '/index.html',
		query: {
			environment: env.name
		}
	});

	var query = _queryString2.default.stringify({
		reloadTime: pattern.reloadTime,
		mount: mount
	});

	return pathname + '?' + query;
});