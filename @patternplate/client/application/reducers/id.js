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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9pZC5qcyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwiXyIsInBheWxvYWQiLCJiYXNlIiwicGF0aG5hbWUiLCJkZXBlbmRlbmNpZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLENBQWpCLGVBQXVDO0FBQUEsS0FBbEJDLE9BQWtCLFFBQWxCQSxPQUFrQjtBQUFBLEtBQVBDLElBQU8sU0FBUEEsSUFBTzs7QUFDdEMsUUFBTywrQkFBZ0JELFFBQVFFLFFBQXhCLEVBQWtDRCxJQUFsQyxLQUEyQyxHQUFsRDtBQUNBOztrQkFFYyxzQ0FBdUI7QUFDckMsNkJBQTRCSDtBQURTLENBQXZCLEVBRVo7QUFDRkssZUFBYyxDQUFDLE1BQUQ7QUFEWixDQUZZLEMiLCJmaWxlIjoiaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0SWRCeVBhdGhuYW1lIGZyb20gJy4uL3V0aWxzL2dldC1pZC1ieS1wYXRobmFtZSc7XG5pbXBvcnQgaGFuZGxlRGVwZW5kZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2hhbmRsZS1kZXBlbmRlbnQtYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIGhhbmRsZXIoXywge3BheWxvYWR9LCB7YmFzZX0pIHtcblx0cmV0dXJuIGdldElkQnlQYXRobmFtZShwYXlsb2FkLnBhdGhuYW1lLCBiYXNlKSB8fCAnLyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZURlcGVuZGVudEFjdGlvbnMoe1xuXHQnQEByb3V0ZXIvTE9DQVRJT05fQ0hBTkdFJzogaGFuZGxlclxufSwge1xuXHRkZXBlbmRlbmNpZXM6IFsnYmFzZSddXG59KTtcbiJdfQ==