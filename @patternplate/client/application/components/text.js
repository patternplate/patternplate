'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n'], ['\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Text;


function Text(props) {
	return _react2.default.createElement(
		StyledText,
		{
			is: props.is,
			className: props.className
		},
		props.children
	);
}

Text.propTypes = {
	is: _react.PropTypes.string,
	className: _react.PropTypes.string,
	children: _react.PropTypes.string.isRequired,
	size: _react.PropTypes.oneOf(['s', 'm', 'l']).isRequired
};

var StyledText = (0, _styledComponents2.default)((0, _tagHoc2.default)(['size'])('div'))(_templateObject);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3RleHQuanMiXSwibmFtZXMiOlsiVGV4dCIsInByb3BzIiwiaXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJzaXplIiwib25lT2YiLCJTdHlsZWRUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZUEsSTs7O0FBRWYsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ3BCLFFBQ0M7QUFBQyxZQUFEO0FBQUE7QUFDQyxPQUFJQSxNQUFNQyxFQURYO0FBRUMsY0FBV0QsTUFBTUU7QUFGbEI7QUFJRUYsUUFBTUc7QUFKUixFQUREO0FBUUE7O0FBRURKLEtBQUtLLFNBQUwsR0FBaUI7QUFDaEJILEtBQUksaUJBQUVJLE1BRFU7QUFFaEJILFlBQVcsaUJBQUVHLE1BRkc7QUFHaEJGLFdBQVUsaUJBQUVFLE1BQUYsQ0FBU0MsVUFISDtBQUloQkMsT0FBTSxpQkFBRUMsS0FBRixDQUFRLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQVIsRUFBeUJGO0FBSmYsQ0FBakI7O0FBT0EsSUFBTUcsYUFBYSxnQ0FBTyxzQkFBSSxDQUFDLE1BQUQsQ0FBSixFQUFjLEtBQWQsQ0FBUCxDQUFiLGlCQUFOIiwiZmlsZSI6InRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMgYXMgdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGFnIGZyb20gJ3RhZy1ob2MnO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuXG5mdW5jdGlvbiBUZXh0KHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZFRleHRcblx0XHRcdGlzPXtwcm9wcy5pc31cblx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxuXHRcdFx0PlxuXHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdDwvU3R5bGVkVGV4dD5cblx0KTtcbn1cblxuVGV4dC5wcm9wVHlwZXMgPSB7XG5cdGlzOiB0LnN0cmluZyxcblx0Y2xhc3NOYW1lOiB0LnN0cmluZyxcblx0Y2hpbGRyZW46IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHNpemU6IHQub25lT2YoWydzJywgJ20nLCAnbCddKS5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKHRhZyhbJ3NpemUnXSkoJ2RpdicpKWBcblx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbmA7XG4iXX0=