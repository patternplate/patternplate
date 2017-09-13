'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _templateObject = _taggedTemplateLiteral(['\n  font-size: 18px;\n  line-height: 27px;\n  color: ', ';\n  text-decoration: none;\n  &:link,\n  &:visited {\n    color: ', ';\n  }\n  &:hover,\n  &:active {\n    text-decoration: underline;\n  }\n'], ['\n  font-size: 18px;\n  line-height: 27px;\n  color: ', ';\n  text-decoration: none;\n  &:link,\n  &:visited {\n    color: ', ';\n  }\n  &:hover,\n  &:active {\n    text-decoration: underline;\n  }\n']);

const _url = require('url');

const _url2 = _interopRequireDefault(_url);

const _queryString = require('query-string');

const _queryString2 = _interopRequireDefault(_queryString);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _link = require('../link');

const _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = MarkdownLink;


function MarkdownLink(props) {
  const parsed = _url2.default.parse(props.href || './');
  const abs = absolute(props.href);
  const href = abs ? props.href : parsed.pathname;
  const query = abs ? {} : _queryString2.default.parse(parsed.query);

  return _react2.default.createElement(
    StyledLink,
    { external: abs, href, query },
    props.children
  );
}

var StyledLink = (0, _components.styled)(_link2.default)(_templateObject, (props) => {
  return props.theme.color;
}, (props) => {
  return props.theme.active;
});

function absolute(href) {
  const parsed = _url2.default.parse(href || './');
  if (parsed.protocol) {
    return true;
  }
  if (href.startsWith('/api/static/')) {
    return true;
  }
}