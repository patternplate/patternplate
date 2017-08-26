'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hastToHyperscript = require('hast-to-hyperscript');

var _hastToHyperscript2 = _interopRequireDefault(_hastToHyperscript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = toElements;


function toElements(data) {
	if (!data) {
		return null;
	}

	var root = (0, _hastToHyperscript2.default)(_react2.default.createElement, data);
	return root.props.children;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy90by1lbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJ0b0VsZW1lbnRzIiwiZGF0YSIsInJvb3QiLCJjcmVhdGVFbGVtZW50IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O2tCQUNlQSxVOzs7QUFFZixTQUFTQSxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN6QixLQUFJLENBQUNBLElBQUwsRUFBVztBQUNWLFNBQU8sSUFBUDtBQUNBOztBQUVELEtBQU1DLE9BQU8saUNBQUksZ0JBQU1DLGFBQVYsRUFBeUJGLElBQXpCLENBQWI7QUFDQSxRQUFPQyxLQUFLRSxLQUFMLENBQVdDLFFBQWxCO0FBQ0EiLCJmaWxlIjoidG8tZWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRvaCBmcm9tICdoYXN0LXRvLWh5cGVyc2NyaXB0JztcbmV4cG9ydCBkZWZhdWx0IHRvRWxlbWVudHM7XG5cbmZ1bmN0aW9uIHRvRWxlbWVudHMoZGF0YSkge1xuXHRpZiAoIWRhdGEpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHJvb3QgPSB0b2goUmVhY3QuY3JlYXRlRWxlbWVudCwgZGF0YSk7XG5cdHJldHVybiByb290LnByb3BzLmNoaWxkcmVuO1xufVxuIl19