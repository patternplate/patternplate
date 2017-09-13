'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createRelationSelector;

var _reselect = require('reselect');

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _find = require('../utils/find');

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRelationSelector(key, selectItem) {
	return (0, _reselect.createSelector)(_navigation2.default, selectItem, function (patterns, item) {
		if (!item) {
			return [];
		}
		return (item[key] || []).map(function (id) {
			return (0, _find2.default)(patterns, 'pattern/' + id, { type: 'pattern' });
		}).filter(Boolean);
	});
}