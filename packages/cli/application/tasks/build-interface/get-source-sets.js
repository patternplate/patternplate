'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _lodash = require('lodash');

const _getEnvSets = require('./get-env-sets');

const _getEnvSets2 = _interopRequireDefault(_getEnvSets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; }  return Array.from(arr);  }

exports.default = getSourceSets;


function getSourceSets(datasets) {
  return getSourceFileSets(datasets).reduce((sets, set) => {
    const isDoc = set.file.type === 'documentation';
    const isIndex = set.file.concern === 'index';
    const hasDemo = sets.some(sibling => {
      return sibling.id === set.id && sibling.file.type === set.file.type && sibling.file.concern === 'demo';
    });
    const types = isDoc || isIndex && hasDemo ? ['source'] : ['source', 'transformed'];
    const amend = types.map(type => {
      return (0, _lodash.merge)({}, set, { type });
    });
    return [].concat(_toConsumableArray(sets), _toConsumableArray(amend));
  }, []);
}

function getSourceFileSets(datasets) {
  const envSets = (0, _getEnvSets2.default)(datasets);
  return envSets.reduce((sets, set) => {
    const amend = set.files.map(file => {
      return (0, _lodash.merge)({}, set, { file });
    });
    return [].concat(_toConsumableArray(sets), _toConsumableArray(amend));
  }, []);
}
module.exports = exports.default;