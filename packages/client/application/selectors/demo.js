'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSrc = undefined;

const _queryString = require('query-string');

const _queryString2 = _interopRequireDefault(_queryString);

const _reselect = require('reselect');

const _urlQuery = require('../utils/url-query');

const _urlQuery2 = _interopRequireDefault(_urlQuery);

const _item = require('./item');

const _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const selectEnv = (0, _reselect.createSelector)((state) => {
  return state.environment;
}, (state) => {
  return state.schema.envs;
}, (env, envs) => {
  return Array.isArray(envs) ? envs.find((e) => {
    return e.name === env;
  }) : { name: 'index' };
});

const selectSrc = exports.selectSrc = (0, _reselect.createSelector)(_item2.default, (state) => {
  return state.base;
}, selectEnv, (state) => {
  return state.pattern;
}, (state) => {
  return state.mountEnabled;
}, (item, base, env, pattern, mount) => {
  if (!item) {
    return null;
  }

  const pathname = _urlQuery2.default.format({
    pathname: base + 'demo/' + item.id + '/index.html',
    query: {
      environment: env.name
    }
  });

  const query = _queryString2.default.stringify({
    reloadTime: pattern.reloadTime,
    mount
  });

  return pathname + '?' + query;
});