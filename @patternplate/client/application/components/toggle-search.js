'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tfill: ', ';\n'], ['\n\tfill: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 0;\n'], ['\n\tfont-size: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = require('./common/icon');

var _icon2 = _interopRequireDefault(_icon);

var _link = require('./common/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = SearchButton;


function SearchButton(props) {
	return _react2.default.createElement(
		StyledLink,
		{
			title: 'Enable search ' + props.shortcut.toString(),
			query: { 'search-enabled': !props.enabled }
		},
		_react2.default.createElement(StyledIcon, {
			base: props.base,
			symbol: 'search'
		}),
		'Search'
	);
}

SearchButton.propTypes = {
	base: _react.PropTypes.string,
	enabled: _react.PropTypes.bool,
	location: _react.PropTypes.any,
	shortcut: _react.PropTypes.any
};

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject, function (props) {
	return props.theme.color;
});

var StyledLink = (0, _styledComponents2.default)(_link2.default)(_templateObject2);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3RvZ2dsZS1zZWFyY2guanMiXSwibmFtZXMiOlsiU2VhcmNoQnV0dG9uIiwicHJvcHMiLCJzaG9ydGN1dCIsInRvU3RyaW5nIiwiZW5hYmxlZCIsImJhc2UiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibG9jYXRpb24iLCJhbnkiLCJTdHlsZWRJY29uIiwidGhlbWUiLCJjb2xvciIsIlN0eWxlZExpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O2tCQUVlQSxZOzs7QUFFZixTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUM1QixRQUNDO0FBQUMsWUFBRDtBQUFBO0FBQ0MsNkJBQXdCQSxNQUFNQyxRQUFOLENBQWVDLFFBQWYsRUFEekI7QUFFQyxVQUFPLEVBQUMsa0JBQWtCLENBQUNGLE1BQU1HLE9BQTFCO0FBRlI7QUFJQyxnQ0FBQyxVQUFEO0FBQ0MsU0FBTUgsTUFBTUksSUFEYjtBQUVDLFdBQU87QUFGUixJQUpEO0FBQUE7QUFBQSxFQUREO0FBWUE7O0FBRURMLGFBQWFNLFNBQWIsR0FBeUI7QUFDeEJELE9BQU0saUJBQUVFLE1BRGdCO0FBRXhCSCxVQUFTLGlCQUFFSSxJQUZhO0FBR3hCQyxXQUFVLGlCQUFFQyxHQUhZO0FBSXhCUixXQUFVLGlCQUFFUTtBQUpZLENBQXpCOztBQU9BLElBQU1DLGFBQWEsK0NBQWIsa0JBQ0c7QUFBQSxRQUFTVixNQUFNVyxLQUFOLENBQVlDLEtBQXJCO0FBQUEsQ0FESCxDQUFOOztBQUlBLElBQU1DLGFBQWEsK0NBQWIsa0JBQU4iLCJmaWxlIjoidG9nZ2xlLXNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi9jb21tb24vaWNvbic7XG5pbXBvcnQgTGluayBmcm9tICcuL2NvbW1vbi9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQnV0dG9uO1xuXG5mdW5jdGlvbiBTZWFyY2hCdXR0b24ocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkTGlua1xuXHRcdFx0dGl0bGU9e2BFbmFibGUgc2VhcmNoICR7cHJvcHMuc2hvcnRjdXQudG9TdHJpbmcoKX1gfVxuXHRcdFx0cXVlcnk9e3snc2VhcmNoLWVuYWJsZWQnOiAhcHJvcHMuZW5hYmxlZH19XG5cdFx0XHQ+XG5cdFx0XHQ8U3R5bGVkSWNvblxuXHRcdFx0XHRiYXNlPXtwcm9wcy5iYXNlfVxuXHRcdFx0XHRzeW1ib2w9XCJzZWFyY2hcIlxuXHRcdFx0XHQvPlxuXHRcdFx0U2VhcmNoXG5cdFx0PC9TdHlsZWRMaW5rPlxuXHQpO1xufVxuXG5TZWFyY2hCdXR0b24ucHJvcFR5cGVzID0ge1xuXHRiYXNlOiB0LnN0cmluZyxcblx0ZW5hYmxlZDogdC5ib29sLFxuXHRsb2NhdGlvbjogdC5hbnksXG5cdHNob3J0Y3V0OiB0LmFueVxufTtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uKWBcblx0ZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxuXHRmb250LXNpemU6IDA7XG5gO1xuIl19