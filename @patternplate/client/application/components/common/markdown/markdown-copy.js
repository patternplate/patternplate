'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tmargin: 0 0 16px 0;\n\tfont-size: 18px;\n\tline-height: 27px;\n\tcolor: ', ';\n'], ['\n\tmargin: 0 0 16px 0;\n\tfont-size: 18px;\n\tline-height: 27px;\n\tcolor: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _text = require('../../text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _styledComponents2.default)(MarkdownCopy)(_templateObject, function (props) {
	return props.theme.color;
});


function MarkdownCopy(props) {
	return _react2.default.createElement(
		_text2.default,
		{ className: props.className, is: 'p' },
		props.children
	);
}

MarkdownCopy.propTypes = {
	children: _react.PropTypes.any.isRequired,
	className: _react.PropTypes.string
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9tYXJrZG93bi1jb3B5LmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duQ29weSIsInByb3BzIiwidGhlbWUiLCJjb2xvciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiYW55IiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7a0JBRWUsZ0NBQU9BLFlBQVAsQyxrQkFJTDtBQUFBLFFBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsS0FBckI7QUFBQSxDOzs7QUFHVixTQUFTSCxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUM1QixRQUNDO0FBQUE7QUFBQSxJQUFNLFdBQVdBLE1BQU1HLFNBQXZCLEVBQWtDLElBQUcsR0FBckM7QUFDRUgsUUFBTUk7QUFEUixFQUREO0FBS0E7O0FBRURMLGFBQWFNLFNBQWIsR0FBeUI7QUFDeEJELFdBQVUsaUJBQUVFLEdBQUYsQ0FBTUMsVUFEUTtBQUV4QkosWUFBVyxpQkFBRUs7QUFGVyxDQUF6QiIsImZpbGUiOiJtYXJrZG93bi1jb3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuLi8uLi90ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKE1hcmtkb3duQ29weSlgXG5cdG1hcmdpbjogMCAwIDE2cHggMDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMjdweDtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuYDtcblxuZnVuY3Rpb24gTWFya2Rvd25Db3B5KHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFRleHQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IGlzPVwicFwiPlxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdDwvVGV4dD5cblx0KTtcbn1cblxuTWFya2Rvd25Db3B5LnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IHQuYW55LmlzUmVxdWlyZWQsXG5cdGNsYXNzTmFtZTogdC5zdHJpbmdcbn07XG4iXX0=