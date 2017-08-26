'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = withToggle;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _reactRedux = require('react-redux');

var _lodash = require('lodash');

var _shortcuts = require('../shortcuts');

var _shortcuts2 = _interopRequireDefault(_shortcuts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = (0, _lodash.values)((0, _shortcuts2.default)());

function withToggle(action) {
	var shortcut = s.find(function (i) {
		return i.key === action.key;
	});

	(0, _assert2.default)(shortcut, action + ' passed to withToggle has no matching shortcut found for ' + action.key);

	return function (Component) {
		var mapProps = function mapProps(state) {
			var enabled = state[action.property];
			return { enabled: enabled, shortcut: shortcut };
		};
		return (0, _reactRedux.connect)(mapProps)(Component);
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb25uZWN0b3JzL3dpdGgtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbIndpdGhUb2dnbGUiLCJzIiwiYWN0aW9uIiwic2hvcnRjdXQiLCJmaW5kIiwiaSIsImtleSIsIm1hcFByb3BzIiwiZW5hYmxlZCIsInN0YXRlIiwicHJvcGVydHkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQU93QkEsVTs7QUFQeEI7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsSUFBSSxvQkFBTywwQkFBUCxDQUFWOztBQUVlLFNBQVNELFVBQVQsQ0FBb0JFLE1BQXBCLEVBQTRCO0FBQzFDLEtBQU1DLFdBQVdGLEVBQUVHLElBQUYsQ0FBTztBQUFBLFNBQUtDLEVBQUVDLEdBQUYsS0FBVUosT0FBT0ksR0FBdEI7QUFBQSxFQUFQLENBQWpCOztBQUVBLHVCQUFPSCxRQUFQLEVBQW9CRCxNQUFwQixpRUFBc0ZBLE9BQU9JLEdBQTdGOztBQUVBLFFBQU8scUJBQWE7QUFDbkIsTUFBTUMsV0FBVyxTQUFYQSxRQUFXLFFBQVM7QUFDekIsT0FBTUMsVUFBVUMsTUFBTVAsT0FBT1EsUUFBYixDQUFoQjtBQUNBLFVBQU8sRUFBQ0YsZ0JBQUQsRUFBVUwsa0JBQVYsRUFBUDtBQUNBLEdBSEQ7QUFJQSxTQUFPLHlCQUFRSSxRQUFSLEVBQWtCSSxTQUFsQixDQUFQO0FBQ0EsRUFORDtBQU9BIiwiZmlsZSI6IndpdGgtdG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge3ZhbHVlc30gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBzaG9ydGN1dHMgZnJvbSAnLi4vc2hvcnRjdXRzJztcblxuY29uc3QgcyA9IHZhbHVlcyhzaG9ydGN1dHMoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhUb2dnbGUoYWN0aW9uKSB7XG5cdGNvbnN0IHNob3J0Y3V0ID0gcy5maW5kKGkgPT4gaS5rZXkgPT09IGFjdGlvbi5rZXkpO1xuXG5cdGFzc2VydChzaG9ydGN1dCwgYCR7YWN0aW9ufSBwYXNzZWQgdG8gd2l0aFRvZ2dsZSBoYXMgbm8gbWF0Y2hpbmcgc2hvcnRjdXQgZm91bmQgZm9yICR7YWN0aW9uLmtleX1gKTtcblxuXHRyZXR1cm4gQ29tcG9uZW50ID0+IHtcblx0XHRjb25zdCBtYXBQcm9wcyA9IHN0YXRlID0+IHtcblx0XHRcdGNvbnN0IGVuYWJsZWQgPSBzdGF0ZVthY3Rpb24ucHJvcGVydHldO1xuXHRcdFx0cmV0dXJuIHtlbmFibGVkLCBzaG9ydGN1dH07XG5cdFx0fTtcblx0XHRyZXR1cm4gY29ubmVjdChtYXBQcm9wcykoQ29tcG9uZW50KTtcblx0fTtcbn1cbiJdfQ==