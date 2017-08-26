'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getIdByPathname;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _urlQuery = require('./url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIdByPathname(pathname) {
	var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

	var parsed = _urlQuery2.default.parse(pathname);
	return _path2.default.relative(base, parsed.pathname);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9nZXQtaWQtYnktcGF0aG5hbWUuanMiXSwibmFtZXMiOlsiZ2V0SWRCeVBhdGhuYW1lIiwicGF0aG5hbWUiLCJiYXNlIiwicGFyc2VkIiwicGFyc2UiLCJyZWxhdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3dCQSxlOztBQUh4Qjs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxlQUFULENBQXlCQyxRQUF6QixFQUErQztBQUFBLEtBQVpDLElBQVksdUVBQUwsR0FBSzs7QUFDN0QsS0FBTUMsU0FBUyxtQkFBU0MsS0FBVCxDQUFlSCxRQUFmLENBQWY7QUFDQSxRQUFPLGVBQUtJLFFBQUwsQ0FBY0gsSUFBZCxFQUFvQkMsT0FBT0YsUUFBM0IsQ0FBUDtBQUNBIiwiZmlsZSI6ImdldC1pZC1ieS1wYXRobmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHVybFF1ZXJ5IGZyb20gJy4vdXJsLXF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SWRCeVBhdGhuYW1lKHBhdGhuYW1lLCBiYXNlID0gJy8nKSB7XG5cdGNvbnN0IHBhcnNlZCA9IHVybFF1ZXJ5LnBhcnNlKHBhdGhuYW1lKTtcblx0cmV0dXJuIHBhdGgucmVsYXRpdmUoYmFzZSwgcGFyc2VkLnBhdGhuYW1lKTtcbn1cbiJdfQ==