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


function toElements(children) {
	if (!Array.isArray(children)) {
		return children;
	}

	var root = (0, _hastToHyperscript2.default)(_react2.default.createElement, {
		type: 'element',
		tagName: 'div',
		children: children
	});

	return root.props.children;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9jb2RlL3RvLWVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbInRvRWxlbWVudHMiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsInJvb3QiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInRhZ05hbWUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O2tCQUNlQSxVOzs7QUFFZixTQUFTQSxVQUFULENBQW9CQyxRQUFwQixFQUE4QjtBQUM3QixLQUFJLENBQUNDLE1BQU1DLE9BQU4sQ0FBY0YsUUFBZCxDQUFMLEVBQThCO0FBQzdCLFNBQU9BLFFBQVA7QUFDQTs7QUFFRCxLQUFNRyxPQUFPLGlDQUFJLGdCQUFNQyxhQUFWLEVBQXlCO0FBQ3JDQyxRQUFNLFNBRCtCO0FBRXJDQyxXQUFTLEtBRjRCO0FBR3JDTjtBQUhxQyxFQUF6QixDQUFiOztBQU1BLFFBQU9HLEtBQUtJLEtBQUwsQ0FBV1AsUUFBbEI7QUFDQSIsImZpbGUiOiJ0by1lbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdG9oIGZyb20gJ2hhc3QtdG8taHlwZXJzY3JpcHQnO1xuZXhwb3J0IGRlZmF1bHQgdG9FbGVtZW50cztcblxuZnVuY3Rpb24gdG9FbGVtZW50cyhjaGlsZHJlbikge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHR9XG5cblx0Y29uc3Qgcm9vdCA9IHRvaChSZWFjdC5jcmVhdGVFbGVtZW50LCB7XG5cdFx0dHlwZTogJ2VsZW1lbnQnLFxuXHRcdHRhZ05hbWU6ICdkaXYnLFxuXHRcdGNoaWxkcmVuXG5cdH0pO1xuXG5cdHJldHVybiByb290LnByb3BzLmNoaWxkcmVuO1xufVxuIl19