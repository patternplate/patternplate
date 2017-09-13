'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tfont-size: 18px;\n\tline-height: 27px;\n\tcolor: ', ';\n\ttext-decoration: none;\n\t&:link, &:visited {\n\t\tcolor: ', ';\n\t}\n\t&:hover, &:active {\n\t\ttext-decoration: underline;\n\t}\n'], ['\n\tfont-size: 18px;\n\tline-height: 27px;\n\tcolor: ', ';\n\ttext-decoration: none;\n\t&:link, &:visited {\n\t\tcolor: ', ';\n\t}\n\t&:hover, &:active {\n\t\ttext-decoration: underline;\n\t}\n']);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _link = require('../link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var StyledLink = (0, _components.styled)(_link2.default)(_templateObject, function (props) {
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