'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\t&::before {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-radius: ', ';\n\t\tbackground: ', ';\n\t}\n'], ['\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\t&::before {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-radius: ', ';\n\t\tbackground: ', ';\n\t}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 2;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n'], ['\n\tposition: relative;\n\tz-index: 2;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _code = require('./common/code');

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = CodePane;


function CodePane(props) {
	return _react2.default.createElement(
		StyledCodePane,
		{ className: props.className, hermit: props.hermit },
		_react2.default.createElement(
			StyledScrollbox,
			null,
			_react2.default.createElement(
				_code2.default,
				{ block: true, language: 'html' },
				props.source
			)
		)
	);
}

var BORDER_RADIUS = 10;

var StyledCodePane = _styledComponents2.default.div(_templateObject, function (props) {
	return props.hermit ? BORDER_RADIUS + 'px' : '0 ' + BORDER_RADIUS + 'px ' + BORDER_RADIUS + 'px 0';
}, function (props) {
	return props.theme.tint;
});

var StyledScrollbox = _styledComponents2.default.div(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvZGUtcGFuZS5qcyJdLCJuYW1lcyI6WyJDb2RlUGFuZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiaGVybWl0Iiwic291cmNlIiwiQk9SREVSX1JBRElVUyIsIlN0eWxlZENvZGVQYW5lIiwiZGl2IiwidGhlbWUiLCJ0aW50IiwiU3R5bGVkU2Nyb2xsYm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7a0JBRWVBLFE7OztBQUVmLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3hCLFFBQ0M7QUFBQyxnQkFBRDtBQUFBLElBQWdCLFdBQVdBLE1BQU1DLFNBQWpDLEVBQTRDLFFBQVFELE1BQU1FLE1BQTFEO0FBQ0M7QUFBQyxrQkFBRDtBQUFBO0FBQ0M7QUFBQTtBQUFBLE1BQU0sV0FBTixFQUFZLFVBQVMsTUFBckI7QUFDRUYsVUFBTUc7QUFEUjtBQUREO0FBREQsRUFERDtBQVNBOztBQUVELElBQU1DLGdCQUFnQixFQUF0Qjs7QUFFQSxJQUFNQyxpQkFBaUIsMkJBQU9DLEdBQXhCLGtCQWFhO0FBQUEsUUFBU04sTUFBTUUsTUFBTixHQUFrQkUsYUFBbEIsaUJBQTJDQSxhQUEzQyxXQUE4REEsYUFBOUQsU0FBVDtBQUFBLENBYmIsRUFjVTtBQUFBLFFBQVNKLE1BQU1PLEtBQU4sQ0FBWUMsSUFBckI7QUFBQSxDQWRWLENBQU47O0FBa0JBLElBQU1DLGtCQUFrQiwyQkFBT0gsR0FBekIsa0JBQU4iLCJmaWxlIjoiY29kZS1wYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQ29kZSBmcm9tICcuL2NvbW1vbi9jb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgQ29kZVBhbmU7XG5cbmZ1bmN0aW9uIENvZGVQYW5lKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZENvZGVQYW5lIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSBoZXJtaXQ9e3Byb3BzLmhlcm1pdH0+XG5cdFx0XHQ8U3R5bGVkU2Nyb2xsYm94PlxuXHRcdFx0XHQ8Q29kZSBibG9jayBsYW5ndWFnZT1cImh0bWxcIj5cblx0XHRcdFx0XHR7cHJvcHMuc291cmNlfVxuXHRcdFx0XHQ8L0NvZGU+XG5cdFx0XHQ8L1N0eWxlZFNjcm9sbGJveD5cblx0XHQ8L1N0eWxlZENvZGVQYW5lPlxuXHQpO1xufVxuXG5jb25zdCBCT1JERVJfUkFESVVTID0gMTA7XG5cbmNvbnN0IFN0eWxlZENvZGVQYW5lID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQmOjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR6LWluZGV4OiAxO1xuXHRcdHRvcDogMDtcblx0XHRyaWdodDogMDtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogMDtcblx0XHRib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLmhlcm1pdCA/IGAke0JPUkRFUl9SQURJVVN9cHhgIDogYDAgJHtCT1JERVJfUkFESVVTfXB4ICR7Qk9SREVSX1JBRElVU31weCAwYH07XG5cdFx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aW50fTtcblx0fVxuYDtcblxuY29uc3QgU3R5bGVkU2Nyb2xsYm94ID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAyO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRvdmVyZmxvdzogc2Nyb2xsO1xuXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5gO1xuIl19