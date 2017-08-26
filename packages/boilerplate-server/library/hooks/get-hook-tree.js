'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = getHookTree;

var _getHookDependencies = require('./get-hook-dependencies');

var _getHookDependencies2 = _interopRequireDefault(_getHookDependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getHookTree(registered) {
	return registered.reduce((registry, hook) => {
		const amend = {
			[hook.name]: (0, _getHookDependencies2.default)(hook.name, registered)
		};
		return _extends({}, registry, amend);
	}, {});
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2dldC1ob29rLXRyZWUuanMiXSwibmFtZXMiOlsiZ2V0SG9va1RyZWUiLCJyZWdpc3RlcmVkIiwicmVkdWNlIiwicmVnaXN0cnkiLCJob29rIiwiYW1lbmQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFFd0JBLFc7O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxXQUFULENBQXFCQyxVQUFyQixFQUFpQztBQUMvQyxRQUFPQSxXQUNMQyxNQURLLENBQ0UsQ0FBQ0MsUUFBRCxFQUFXQyxJQUFYLEtBQW9CO0FBQzNCLFFBQU1DLFFBQVE7QUFDYixJQUFDRCxLQUFLRSxJQUFOLEdBQWEsbUNBQW9CRixLQUFLRSxJQUF6QixFQUErQkwsVUFBL0I7QUFEQSxHQUFkO0FBR0Esc0JBQ0lFLFFBREosRUFFSUUsS0FGSjtBQUlBLEVBVEssRUFTSCxFQVRHLENBQVA7QUFVQSIsImZpbGUiOiJnZXQtaG9vay10cmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEhvb2tEZXBlbmRlbmNpZXMgZnJvbSAnLi9nZXQtaG9vay1kZXBlbmRlbmNpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIb29rVHJlZShyZWdpc3RlcmVkKSB7XG5cdHJldHVybiByZWdpc3RlcmVkXG5cdFx0LnJlZHVjZSgocmVnaXN0cnksIGhvb2spID0+IHtcblx0XHRcdGNvbnN0IGFtZW5kID0ge1xuXHRcdFx0XHRbaG9vay5uYW1lXTogZ2V0SG9va0RlcGVuZGVuY2llcyhob29rLm5hbWUsIHJlZ2lzdGVyZWQpXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ucmVnaXN0cnksXG5cdFx0XHRcdC4uLmFtZW5kXG5cdFx0XHR9O1xuXHRcdH0sIHt9KTtcbn1cbiJdfQ==