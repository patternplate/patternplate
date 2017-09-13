'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRelationSelector;

const _reselect = require('reselect');

const _navigation = require('./navigation');

const _navigation2 = _interopRequireDefault(_navigation);

const _find = require('../utils/find');

const _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRelationSelector(key, selectItem) {
  return (0, _reselect.createSelector)(_navigation2.default, selectItem, (patterns, item) => {
    if (!item) {
      return [];
    }
    return (item[key] || []).map((id) => {
      return (0, _find2.default)(patterns, 'pattern/' + id, { type: 'pattern' });
    }).filter(Boolean);
  });
}