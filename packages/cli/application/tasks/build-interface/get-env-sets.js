'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _lodash = require('lodash');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

exports.default = getEnvSets;


function getEnvSets(sets) {
  const s = Array.isArray(sets) ? sets : [];

  return s.reduce((sets, set) => {
    const amend = (set.environmentNames || []).map(name => (0, _lodash.merge)({}, set, { env: name }));
    return [].concat(_toConsumableArray(sets), _toConsumableArray(amend));
  }, []);
}
module.exports = exports.default;