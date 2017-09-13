'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getComponents = require('./get-components');

var _getComponents2 = _interopRequireDefault(_getComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = getMountIds;


function getMountIds(datasets, automount) {
	const componentPatterns = (0, _getComponents2.default)(datasets, automount);
	return componentPatterns.map(pattern => pattern.id);
}
module.exports = exports['default'];