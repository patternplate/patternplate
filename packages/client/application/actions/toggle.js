'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;

const _lodash = require('lodash');

const _ = require('./');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function toggle(key) {
  const property = (0, _lodash.camelCase)(key);

  const fn = function fn() {
    const payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch, getState) {
      const next = 'forced' in payload ? payload.forced : !getState()[property];
      dispatch((0, _.patchLocation)({ query: _defineProperty({}, key, next) }));
    };
  };

  fn.type = 'TOGGLE_' + (0, _lodash.snakeCase)(key).toUpperCase();
  fn.property = property;
  fn.key = key;
  return fn;
}