'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: ', ';\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 10px 20px;\n'], ['\n\tbackground: ', ';\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 10px 20px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tcolor: #fff;\n'], ['\n\tcolor: #fff;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Message;


function Message(props) {
	return _react2.default.createElement(
		StyledMessage,
		null,
		_react2.default.createElement(
			StyledMessageContent,
			null,
			props.message
		)
	);
}

var StyledMessage = _styledComponents2.default.div(_templateObject, function (props) {
	return props.theme.error;
});

var StyledMessageContent = _styledComponents2.default.pre(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL21lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZSIsInByb3BzIiwibWVzc2FnZSIsIlN0eWxlZE1lc3NhZ2UiLCJkaXYiLCJ0aGVtZSIsImVycm9yIiwiU3R5bGVkTWVzc2FnZUNvbnRlbnQiLCJwcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWVBLE87OztBQUVmLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3ZCLFFBQ0M7QUFBQyxlQUFEO0FBQUE7QUFDQztBQUFDLHVCQUFEO0FBQUE7QUFDRUEsU0FBTUM7QUFEUjtBQURELEVBREQ7QUFPQTs7QUFFRCxJQUFNQyxnQkFBZ0IsMkJBQU9DLEdBQXZCLGtCQUNTO0FBQUEsUUFBU0gsTUFBTUksS0FBTixDQUFZQyxLQUFyQjtBQUFBLENBRFQsQ0FBTjs7QUFPQSxJQUFNQyx1QkFBdUIsMkJBQU9DLEdBQTlCLGtCQUFOIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XG5cbmZ1bmN0aW9uIE1lc3NhZ2UocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkTWVzc2FnZT5cblx0XHRcdDxTdHlsZWRNZXNzYWdlQ29udGVudD5cblx0XHRcdFx0e3Byb3BzLm1lc3NhZ2V9XG5cdFx0XHQ8L1N0eWxlZE1lc3NhZ2VDb250ZW50PlxuXHRcdDwvU3R5bGVkTWVzc2FnZT5cblx0KTtcbn1cblxuY29uc3QgU3R5bGVkTWVzc2FnZSA9IHN0eWxlZC5kaXZgXG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3J9O1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMTBweCAyMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkTWVzc2FnZUNvbnRlbnQgPSBzdHlsZWQucHJlYFxuXHRjb2xvcjogI2ZmZjtcbmA7XG4iXX0=