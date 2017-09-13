'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require('lodash');

var _getComponentIds = require('./get-component-ids');

var _getComponentIds2 = _interopRequireDefault(_getComponentIds);

var _getEnvSets = require('./get-env-sets');

var _getEnvSets2 = _interopRequireDefault(_getEnvSets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports.default = getFileSets;


function getFileSets(datasets, automount) {
	const envSets = (0, _getEnvSets2.default)(datasets);
	const componentIds = (0, _getComponentIds2.default)(datasets, automount);

	// multiply with demo files
	return envSets.reduce((sets, set) => {
		const mounts = componentIds.includes(set.id);
		const types = mounts ? ['css'] : ['css', 'js'];

		const amend = types.map(type => {
			const demo = (0, _lodash.find)(set.files, { out: type, concern: 'demo' });
			const index = (0, _lodash.find)(set.files, { out: type, concern: 'index' });
			const file = demo || index;
			if (file) {
				file.pattern = (0, _lodash.merge)({}, set);
				return file;
			}
			return null;
		}).filter(Boolean);

		return [].concat(_toConsumableArray(sets), _toConsumableArray(amend));
	}, []);
}
module.exports = exports['default'];