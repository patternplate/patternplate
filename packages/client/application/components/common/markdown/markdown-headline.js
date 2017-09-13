'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0;\n  line-height: 0;\n  padding-right: 10px;\n  color: ', ';\n  display: none;\n  &:hover {\n    display: block;\n  }\n'], ['\n  position: absolute;\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0;\n  line-height: 0;\n  padding-right: 10px;\n  color: ', ';\n  display: none;\n  &:hover {\n    display: block;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  fill: ', ';\n  &:hover {\n    fill: ', ';\n  }\n'], ['\n  fill: ', ';\n  &:hover {\n    fill: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  color: ', ';\n  font-size: ', 'px;\n  margin: 60px 0 16px 0;\n  font-weight: 300;\n  line-height: 1.25;\n  &:hover ', ' {\n    display: block;\n  }\n  &:first-child {\n    margin-top: 0;\n  }\n'], ['\n  position: relative;\n  color: ', ';\n  font-size: ', 'px;\n  margin: 60px 0 16px 0;\n  font-weight: 300;\n  line-height: 1.25;\n  &:hover ', ' {\n    display: block;\n  }\n  &:first-child {\n    margin-top: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _link = require('../link');

var _link2 = _interopRequireDefault(_link);

var _text = require('../../text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import Icon from '../icon';


var SIZES = {
  h1: 36,
  h2: 27,
  h3: 23,
  h4: 18,
  h5: 18,
  h6: 18
};

var StyledLink = (0, _components.styled)(_link2.default)(_templateObject, function (props) {
  return props.theme.color;
});

var ThemedIcon = (0, _components.styled)(_components.Icon)(_templateObject2, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.active;
});

exports.default = (0, _components.styled)(MarkdownHeadline)(_templateObject3, function (props) {
  return props.theme.color;
}, function (props) {
  return SIZES[props.is];
}, StyledLink);


function MarkdownHeadline(props) {
  var children = Array.isArray(props.children) ? props.children.join('') : props.children;
  var id = encodeURIComponent((children || '').split(' ').join('-').toLowerCase());

  return _react2.default.createElement(
    _text2.default,
    { is: props.is, className: props.className, id: id },
    props.children,
    props.linkable && _react2.default.createElement(
      MarkdownHeadlineLink,
      { name: children, id: id },
      _react2.default.createElement(_components.Icon, { size: 's', symbol: 'anchor' })
    )
  );
}

function MarkdownHeadlineLink(props) {
  return _react2.default.createElement(
    StyledLink,
    { title: 'Link to "' + props.name + '"', hash: props.id },
    _react2.default.createElement(ThemedIcon, { symbol: 'anchor', size: 's' }),
    'Link to id'
  );
}