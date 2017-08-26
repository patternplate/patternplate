'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 18px;\n\tline-height: 27px;\n\tcolor: ', ';\n\tmargin-top: 4.5px;\n'], ['\n\tfont-size: 18px;\n\tline-height: 27px;\n\tcolor: ', ';\n\tmargin-top: 4.5px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _text = require('../../text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _styledComponents2.default)(MarkdownItem)(_templateObject, function (props) {
	return props.theme.color;
});


function MarkdownItem(props) {
	return _react2.default.createElement(
		_text2.default,
		{ className: props.className, is: 'li' },
		props.children
	);
}

MarkdownItem.propTypes = {
	children: _react.PropTypes.any.isRequired,
	className: _react.PropTypes.string
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9tYXJrZG93bi1pdGVtLmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duSXRlbSIsInByb3BzIiwidGhlbWUiLCJjb2xvciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7a0JBRWUsZ0NBQU9BLFlBQVAsQyxrQkFHTDtBQUFBLFFBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsS0FBckI7QUFBQSxDOzs7QUFJVixTQUFTSCxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUM1QixRQUNDO0FBQUE7QUFBQSxJQUFNLFdBQVdBLE1BQU1HLFNBQXZCLEVBQWtDLElBQUcsSUFBckM7QUFDRUgsUUFBTUk7QUFEUixFQUREO0FBS0E7O0FBRURMLGFBQWFNLFNBQWIsR0FBeUI7QUFDeEJELFdBQVUsaUJBQUVFLEdBQUYsQ0FBTUMsVUFEUTtBQUV4QkosWUFBVyxpQkFBRUs7QUFGVyxDQUF6QiIsImZpbGUiOiJtYXJrZG93bi1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuLi8uLi90ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKE1hcmtkb3duSXRlbSlgXG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI3cHg7XG5cdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0bWFyZ2luLXRvcDogNC41cHg7XG5gO1xuXG5mdW5jdGlvbiBNYXJrZG93bkl0ZW0ocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8VGV4dCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gaXM9XCJsaVwiPlxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdDwvVGV4dD5cblx0KTtcbn1cblxuTWFya2Rvd25JdGVtLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IHQuYW55LmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogdC5zdHJpbmdcbn07XG4iXX0=