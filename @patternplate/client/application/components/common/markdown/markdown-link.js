'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 18px;\n\tline-height: 27px;\n\tcolor: ', ';\n\ttext-decoration: none;\n\t&:link, &:visited {\n\t\tcolor: ', ';\n\t}\n\t&:hover, &:active {\n\t\ttext-decoration: underline;\n\t}\n'], ['\n\tfont-size: 18px;\n\tline-height: 27px;\n\tcolor: ', ';\n\ttext-decoration: none;\n\t&:link, &:visited {\n\t\tcolor: ', ';\n\t}\n\t&:hover, &:active {\n\t\ttext-decoration: underline;\n\t}\n']);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('../link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = MarkdownLink;


function MarkdownLink(props) {
	var parsed = _url2.default.parse(props.href || './');
	var abs = absolute(props.href);
	var href = abs ? props.href : parsed.pathname;
	var query = abs ? {} : _queryString2.default.parse(parsed.query);

	return _react2.default.createElement(
		StyledLink,
		{
			external: abs,
			href: href,
			query: query
		},
		props.children
	);
}

var StyledLink = (0, _styledComponents2.default)(_link2.default)(_templateObject, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.active;
});

function absolute(href) {
	var parsed = _url2.default.parse(href || './');
	if (parsed.protocol) {
		return true;
	}
	if (href.startsWith('/api/static/')) {
		return true;
	}
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9tYXJrZG93bi9tYXJrZG93bi1saW5rLmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duTGluayIsInByb3BzIiwicGFyc2VkIiwicGFyc2UiLCJocmVmIiwiYWJzIiwiYWJzb2x1dGUiLCJwYXRobmFtZSIsInF1ZXJ5IiwiY2hpbGRyZW4iLCJTdHlsZWRMaW5rIiwidGhlbWUiLCJjb2xvciIsImFjdGl2ZSIsInByb3RvY29sIiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUNlQSxZOzs7QUFFZixTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUM1QixLQUFNQyxTQUFTLGNBQUlDLEtBQUosQ0FBVUYsTUFBTUcsSUFBTixJQUFjLElBQXhCLENBQWY7QUFDQSxLQUFNQyxNQUFNQyxTQUFTTCxNQUFNRyxJQUFmLENBQVo7QUFDQSxLQUFNQSxPQUFPQyxNQUFNSixNQUFNRyxJQUFaLEdBQW1CRixPQUFPSyxRQUF2QztBQUNBLEtBQU1DLFFBQVFILE1BQU0sRUFBTixHQUFXLHNCQUFZRixLQUFaLENBQWtCRCxPQUFPTSxLQUF6QixDQUF6Qjs7QUFFQSxRQUNDO0FBQUMsWUFBRDtBQUFBO0FBQ0MsYUFBVUgsR0FEWDtBQUVDLFNBQU1ELElBRlA7QUFHQyxVQUFPSTtBQUhSO0FBS0VQLFFBQU1RO0FBTFIsRUFERDtBQVNBOztBQUVELElBQU1DLGFBQWEsK0NBQWIsa0JBR0k7QUFBQSxRQUFTVCxNQUFNVSxLQUFOLENBQVlDLEtBQXJCO0FBQUEsQ0FISixFQU1LO0FBQUEsUUFBU1gsTUFBTVUsS0FBTixDQUFZRSxNQUFyQjtBQUFBLENBTkwsQ0FBTjs7QUFhQSxTQUFTUCxRQUFULENBQWtCRixJQUFsQixFQUF3QjtBQUN2QixLQUFNRixTQUFTLGNBQUlDLEtBQUosQ0FBVUMsUUFBUSxJQUFsQixDQUFmO0FBQ0EsS0FBSUYsT0FBT1ksUUFBWCxFQUFxQjtBQUNwQixTQUFPLElBQVA7QUFDQTtBQUNELEtBQUlWLEtBQUtXLFVBQUwsQ0FBZ0IsY0FBaEIsQ0FBSixFQUFxQztBQUNwQyxTQUFPLElBQVA7QUFDQTtBQUNEIiwiZmlsZSI6Im1hcmtkb3duLWxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2xpbmsnO1xuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25MaW5rO1xuXG5mdW5jdGlvbiBNYXJrZG93bkxpbmsocHJvcHMpIHtcblx0Y29uc3QgcGFyc2VkID0gdXJsLnBhcnNlKHByb3BzLmhyZWYgfHwgJy4vJyk7XG5cdGNvbnN0IGFicyA9IGFic29sdXRlKHByb3BzLmhyZWYpO1xuXHRjb25zdCBocmVmID0gYWJzID8gcHJvcHMuaHJlZiA6IHBhcnNlZC5wYXRobmFtZTtcblx0Y29uc3QgcXVlcnkgPSBhYnMgPyB7fSA6IHF1ZXJ5U3RyaW5nLnBhcnNlKHBhcnNlZC5xdWVyeSk7XG5cblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkTGlua1xuXHRcdFx0ZXh0ZXJuYWw9e2Fic31cblx0XHRcdGhyZWY9e2hyZWZ9XG5cdFx0XHRxdWVyeT17cXVlcnl9XG5cdFx0XHQ+XG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0PC9TdHlsZWRMaW5rPlxuXHQpO1xufVxuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyN3B4O1xuXHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0JjpsaW5rLCAmOnZpc2l0ZWQge1xuXHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGl2ZX07XG5cdH1cblx0Jjpob3ZlciwgJjphY3RpdmUge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHR9XG5gO1xuXG5mdW5jdGlvbiBhYnNvbHV0ZShocmVmKSB7XG5cdGNvbnN0IHBhcnNlZCA9IHVybC5wYXJzZShocmVmIHx8ICcuLycpO1xuXHRpZiAocGFyc2VkLnByb3RvY29sKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKGhyZWYuc3RhcnRzV2l0aCgnL2FwaS9zdGF0aWMvJykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuIl19