'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: inline-block;\n\tpadding: 2px 4px;\n\tborder: 1px solid ', ';\n\tborder-radius: 3px;\n\t', '\n'], ['\n\tdisplay: inline-block;\n\tpadding: 2px 4px;\n\tborder: 1px solid ', ';\n\tborder-radius: 3px;\n\t', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTextContent = require('react-addons-text-content');

var _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Flag;


function Flag(props) {
	return _react2.default.createElement(
		StyledText,
		{ className: props.className },
		props.children
	);
}

var StyledText = (0, _styledComponents2.default)(_text2.default)(_templateObject, function (props) {
	return props.theme.border;
}, function (props) {
	var color = getFlagColor((0, _reactAddonsTextContent2.default)(props.children), props.theme);
	return '\n\t\t\tborder-color: ' + color + ';\n\t\t\tcolor: ' + color + ';\n\t\t';
});

function getFlagColor(flag, theme) {
	switch (flag) {
		case 'alpha':
			return theme.error;
		case 'beta':
			return theme.warning;
		case 'rc':
			return theme.info;
		case 'stable':
			return theme.success;
		case 'deprecated':
			return theme.error;
		default:
			return theme.error;
	}
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2ZsYWcuanMiXSwibmFtZXMiOlsiRmxhZyIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJTdHlsZWRUZXh0IiwidGhlbWUiLCJib3JkZXIiLCJjb2xvciIsImdldEZsYWdDb2xvciIsImZsYWciLCJlcnJvciIsIndhcm5pbmciLCJpbmZvIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZUEsSTs7O0FBRWYsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ3BCLFFBQU87QUFBQyxZQUFEO0FBQUEsSUFBWSxXQUFXQSxNQUFNQyxTQUE3QjtBQUF5Q0QsUUFBTUU7QUFBL0MsRUFBUDtBQUNBOztBQUVELElBQU1DLGFBQWEsK0NBQWIsa0JBR2U7QUFBQSxRQUFTSCxNQUFNSSxLQUFOLENBQVlDLE1BQXJCO0FBQUEsQ0FIZixFQUtILGlCQUFTO0FBQ1YsS0FBTUMsUUFBUUMsYUFBYSxzQ0FBS1AsTUFBTUUsUUFBWCxDQUFiLEVBQW1DRixNQUFNSSxLQUF6QyxDQUFkO0FBQ0EsbUNBQ2lCRSxLQURqQix3QkFFVUEsS0FGVjtBQUlBLENBWEksQ0FBTjs7QUFjQSxTQUFTQyxZQUFULENBQXNCQyxJQUF0QixFQUE0QkosS0FBNUIsRUFBbUM7QUFDbEMsU0FBUUksSUFBUjtBQUNDLE9BQUssT0FBTDtBQUNDLFVBQU9KLE1BQU1LLEtBQWI7QUFDRCxPQUFLLE1BQUw7QUFDQyxVQUFPTCxNQUFNTSxPQUFiO0FBQ0QsT0FBSyxJQUFMO0FBQ0MsVUFBT04sTUFBTU8sSUFBYjtBQUNELE9BQUssUUFBTDtBQUNDLFVBQU9QLE1BQU1RLE9BQWI7QUFDRCxPQUFLLFlBQUw7QUFDQyxVQUFPUixNQUFNSyxLQUFiO0FBQ0Q7QUFDQyxVQUFPTCxNQUFNSyxLQUFiO0FBWkY7QUFjQSIsImZpbGUiOiJmbGFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZXh0IGZyb20gJ3JlYWN0LWFkZG9ucy10ZXh0LWNvbnRlbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBGbGFnO1xuXG5mdW5jdGlvbiBGbGFnKHByb3BzKSB7XG5cdHJldHVybiA8U3R5bGVkVGV4dCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+e3Byb3BzLmNoaWxkcmVufTwvU3R5bGVkVGV4dD47XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dClgXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cGFkZGluZzogMnB4IDRweDtcblx0Ym9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJ9O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdCR7cHJvcHMgPT4ge1xuXHRcdGNvbnN0IGNvbG9yID0gZ2V0RmxhZ0NvbG9yKHRleHQocHJvcHMuY2hpbGRyZW4pLCBwcm9wcy50aGVtZSk7XG5cdFx0cmV0dXJuIGBcblx0XHRcdGJvcmRlci1jb2xvcjogJHtjb2xvcn07XG5cdFx0XHRjb2xvcjogJHtjb2xvcn07XG5cdFx0YDtcblx0fX1cbmA7XG5cbmZ1bmN0aW9uIGdldEZsYWdDb2xvcihmbGFnLCB0aGVtZSkge1xuXHRzd2l0Y2ggKGZsYWcpIHtcblx0XHRjYXNlICdhbHBoYSc6XG5cdFx0XHRyZXR1cm4gdGhlbWUuZXJyb3I7XG5cdFx0Y2FzZSAnYmV0YSc6XG5cdFx0XHRyZXR1cm4gdGhlbWUud2FybmluZztcblx0XHRjYXNlICdyYyc6XG5cdFx0XHRyZXR1cm4gdGhlbWUuaW5mbztcblx0XHRjYXNlICdzdGFibGUnOlxuXHRcdFx0cmV0dXJuIHRoZW1lLnN1Y2Nlc3M7XG5cdFx0Y2FzZSAnZGVwcmVjYXRlZCc6XG5cdFx0XHRyZXR1cm4gdGhlbWUuZXJyb3I7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiB0aGVtZS5lcnJvcjtcblx0fVxufVxuIl19