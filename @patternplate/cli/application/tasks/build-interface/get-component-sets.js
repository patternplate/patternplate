'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _getComponents = require('./get-components');

var _getComponents2 = _interopRequireDefault(_getComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports.default = getComponentSets;


function getComponentSets(datasets, automount) {
	const components = (0, _getComponents2.default)(datasets, automount);
	return components.reduce((sets, set) => {
		const amend = set.environmentNames.map(name => (0, _lodash.merge)({}, set, { env: name }));
		return [].concat(_toConsumableArray(sets), _toConsumableArray(amend));
	}, []);
}
module.exports = exports['default'];