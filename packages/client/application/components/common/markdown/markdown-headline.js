'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0;\n  line-height: 0;\n  padding-right: 10px;\n  color: ', ';\n  display: none;\n  &:hover {\n    display: block;\n  }\n'], ['\n  position: absolute;\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0;\n  line-height: 0;\n  padding-right: 10px;\n  color: ', ';\n  display: none;\n  &:hover {\n    display: block;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  fill: ', ';\n  &:hover {\n    fill: ', ';\n  }\n'], ['\n  fill: ', ';\n  &:hover {\n    fill: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  color: ', ';\n  font-size: ', 'px;\n  margin: 60px 0 16px 0;\n  font-weight: 300;\n  line-height: 1.25;\n  &:hover ', ' {\n    display: block;\n  }\n  &:first-child {\n    margin-top: 0;\n  }\n'], ['\n  position: relative;\n  color: ', ';\n  font-size: ', 'px;\n  margin: 60px 0 16px 0;\n  font-weight: 300;\n  line-height: 1.25;\n  &:hover ', ' {\n    display: block;\n  }\n  &:first-child {\n    margin-top: 0;\n  }\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _link = require('../link');

const _link2 = _interopRequireDefault(_link);

const _text = require('../../text');

const _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Import Icon from '../icon';


const SIZES = {
  h1: 36,
  h2: 27,
  h3: 23,
  h4: 18,
  h5: 18,
  h6: 18
};

const StyledLink = (0, _components.styled)(_link2.default)(_templateObject, (props) => {
  return props.theme.color;
});

const ThemedIcon = (0, _components.styled)(_components.Icon)(_templateObject2, (props) => {
  return props.theme.color;
}, (props) => {
  return props.theme.active;
});

exports.default = (0, _components.styled)(MarkdownHeadline)(_templateObject3, (props) => {
  return props.theme.color;
}, (props) => {
  return SIZES[props.is];
}, StyledLink);


function MarkdownHeadline(props) {
  const children = Array.isArray(props.children) ? props.children.join('') : props.children;
  const id = encodeURIComponent((children || '').split(' ').join('-').toLowerCase());

  return _react2.default.createElement(
    _text2.default,
    { is: props.is, className: props.className, id },
    props.children,
    props.linkable && _react2.default.createElement(
      MarkdownHeadlineLink,
      { name: children, id },
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