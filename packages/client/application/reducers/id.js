'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getIdByPathname = require('../utils/get-id-by-pathname');

var _getIdByPathname2 = _interopRequireDefault(_getIdByPathname);

var _handleDependentActions = require('../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handler(_, _ref, _ref2) {
	var payload = _ref.payload;
	var base = _ref2.base;

	return (0, _getIdByPathname2.default)(payload.pathname, base) || '/';
}

exports.default = (0, _handleDependentActions2.default)({
	'@@router/LOCATION_CHANGE': handler
}, {
	dependencies: ['base']
});