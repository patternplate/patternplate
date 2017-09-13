'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPackageString;

const _lodash = require('lodash');

function getPackageString(dependencies, data) {
  for (var _len = arguments.length, overrides = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    overrides[_key - 2] = arguments[_key];
  }

  const definition = _lodash.merge.apply(undefined, [data].concat(overrides));
  definition.dependencies = dependencies;
  return JSON.stringify(definition, null, '  ');
}
module.exports = exports.default;