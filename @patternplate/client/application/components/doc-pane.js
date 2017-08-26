'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\t&::before {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-radius: ', ';\n\t\tbackground: ', ';\n\t}\n'], ['\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\t&::before {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tborder-radius: ', ';\n\t\tbackground: ', ';\n\t}\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 2;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n\tpadding: 10px 15px;\n'], ['\n\tposition: relative;\n\tz-index: 2;\n\theight: 100%;\n\twidth: 100%;\n\tbox-sizing: border-box;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n\tpadding: 10px 15px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _markdown = require('./common/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = DocPane;


function DocPane(props) {
	return _react2.default.createElement(
		StyledDocPane,
		{ className: props.className, hermit: props.hermit },
		_react2.default.createElement(
			StyledScrollbox,
			null,
			_react2.default.createElement(_markdown2.default, { source: props.doc, linkable: false })
		)
	);
}

var BORDER_RADIUS = 10;

var StyledDocPane = _styledComponents2.default.div(_templateObject, function (props) {
	return props.hermit ? BORDER_RADIUS + 'px' : '0 ' + BORDER_RADIUS + 'px ' + BORDER_RADIUS + 'px 0';
}, function (props) {
	return props.theme.tint;
});

var StyledScrollbox = _styledComponents2.default.div(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2RvYy1wYW5lLmpzIl0sIm5hbWVzIjpbIkRvY1BhbmUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImhlcm1pdCIsImRvYyIsIkJPUkRFUl9SQURJVVMiLCJTdHlsZWREb2NQYW5lIiwiZGl2IiwidGhlbWUiLCJ0aW50IiwiU3R5bGVkU2Nyb2xsYm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7a0JBRWVBLE87OztBQUVmLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3ZCLFFBQ0M7QUFBQyxlQUFEO0FBQUEsSUFBZSxXQUFXQSxNQUFNQyxTQUFoQyxFQUEyQyxRQUFRRCxNQUFNRSxNQUF6RDtBQUNDO0FBQUMsa0JBQUQ7QUFBQTtBQUNDLHVEQUFVLFFBQVFGLE1BQU1HLEdBQXhCLEVBQTZCLFVBQVUsS0FBdkM7QUFERDtBQURELEVBREQ7QUFPQTs7QUFFRCxJQUFNQyxnQkFBZ0IsRUFBdEI7O0FBRUEsSUFBTUMsZ0JBQWdCLDJCQUFPQyxHQUF2QixrQkFhYTtBQUFBLFFBQVNOLE1BQU1FLE1BQU4sR0FBa0JFLGFBQWxCLGlCQUEyQ0EsYUFBM0MsV0FBOERBLGFBQTlELFNBQVQ7QUFBQSxDQWJiLEVBY1U7QUFBQSxRQUFTSixNQUFNTyxLQUFOLENBQVlDLElBQXJCO0FBQUEsQ0FkVixDQUFOOztBQWtCQSxJQUFNQyxrQkFBa0IsMkJBQU9ILEdBQXpCLGtCQUFOIiwiZmlsZSI6ImRvYy1wYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi9jb21tb24vbWFya2Rvd24nO1xuXG5leHBvcnQgZGVmYXVsdCBEb2NQYW5lO1xuXG5mdW5jdGlvbiBEb2NQYW5lKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZERvY1BhbmUgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IGhlcm1pdD17cHJvcHMuaGVybWl0fT5cblx0XHRcdDxTdHlsZWRTY3JvbGxib3g+XG5cdFx0XHRcdDxNYXJrZG93biBzb3VyY2U9e3Byb3BzLmRvY30gbGlua2FibGU9e2ZhbHNlfS8+XG5cdFx0XHQ8L1N0eWxlZFNjcm9sbGJveD5cblx0XHQ8L1N0eWxlZERvY1BhbmU+XG5cdCk7XG59XG5cbmNvbnN0IEJPUkRFUl9SQURJVVMgPSAxMDtcblxuY29uc3QgU3R5bGVkRG9jUGFuZSA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Jjo6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnJztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0ei1pbmRleDogMTtcblx0XHR0b3A6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy5oZXJtaXQgPyBgJHtCT1JERVJfUkFESVVTfXB4YCA6IGAwICR7Qk9SREVSX1JBRElVU31weCAke0JPUkRFUl9SQURJVVN9cHggMGB9O1xuXHRcdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGludH07XG5cdH1cbmA7XG5cbmNvbnN0IFN0eWxlZFNjcm9sbGJveCA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMjtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0b3ZlcmZsb3c6IHNjcm9sbDtcblx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5gO1xuIl19