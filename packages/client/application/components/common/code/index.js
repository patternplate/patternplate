'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: ', ';\n  font-family: \'SFMono-Regular\', Consolas, \'Liberation Mono\', Menlo, Courier,\n    monospace;\n\n  .hljs-comment,\n  .hljs-quote {\n    color: ', ';\n    font-style: italic;\n  }\n\n  .hljs-doctag,\n  .hljs-keyword,\n  .hljs-formula {\n    color: ', ';\n  }\n\n  .hljs-section,\n  .hljs-name,\n  .hljs-selector-tag,\n  .hljs-deletion,\n  .hljs-subst {\n    color: ', ';\n  }\n\n  .hljs-literal {\n    color: ', ';\n  }\n\n  .hljs-string,\n  .hljs-regexp,\n  .hljs-addition,\n  .hljs-attribute,\n  .hljs-meta-string {\n    color: ', ';\n  }\n\n  .hljs-built_in,\n  .hljs-class .hljs-title {\n    color: ', ';\n  }\n\n  .hljs-attr,\n  .hljs-variable,\n  .hljs-template-variable,\n  .hljs-type,\n  .hljs-selector-class,\n  .hljs-selector-attr,\n  .hljs-selector-pseudo,\n  .hljs-number {\n    color: ', ';\n  }\n\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-link,\n  .hljs-meta,\n  .hljs-selector-id,\n  .hljs-title {\n    color: ', ';\n  }\n\n  .hljs-emphasis {\n    font-style: italic;\n  }\n\n  .hljs-strong {\n    font-weight: bold;\n  }\n\n  .hljs-link {\n    text-decoration: underline;\n  }\n'], ['\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: ', ';\n  font-family: \'SFMono-Regular\', Consolas, \'Liberation Mono\', Menlo, Courier,\n    monospace;\n\n  .hljs-comment,\n  .hljs-quote {\n    color: ', ';\n    font-style: italic;\n  }\n\n  .hljs-doctag,\n  .hljs-keyword,\n  .hljs-formula {\n    color: ', ';\n  }\n\n  .hljs-section,\n  .hljs-name,\n  .hljs-selector-tag,\n  .hljs-deletion,\n  .hljs-subst {\n    color: ', ';\n  }\n\n  .hljs-literal {\n    color: ', ';\n  }\n\n  .hljs-string,\n  .hljs-regexp,\n  .hljs-addition,\n  .hljs-attribute,\n  .hljs-meta-string {\n    color: ', ';\n  }\n\n  .hljs-built_in,\n  .hljs-class .hljs-title {\n    color: ', ';\n  }\n\n  .hljs-attr,\n  .hljs-variable,\n  .hljs-template-variable,\n  .hljs-type,\n  .hljs-selector-class,\n  .hljs-selector-attr,\n  .hljs-selector-pseudo,\n  .hljs-number {\n    color: ', ';\n  }\n\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-link,\n  .hljs-meta,\n  .hljs-selector-id,\n  .hljs-title {\n    color: ', ';\n  }\n\n  .hljs-emphasis {\n    font-style: italic;\n  }\n\n  .hljs-strong {\n    font-weight: bold;\n  }\n\n  .hljs-link {\n    text-decoration: underline;\n  }\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _highlight = require('./highlight');

const _highlight2 = _interopRequireDefault(_highlight);

const _toElements = require('./to-elements');

const _toElements2 = _interopRequireDefault(_toElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Code;


function Code(props) {
  const source = highlightCode(props.language, props.children);

  const code = _react2.default.createElement(
    StyledCode,
    { className: props.className },
    source
  );

  return props.block ? _react2.default.createElement(
    'pre',
    null,
    code
  ) : code;
}

const themes = {
  dark: {
    mono1: '#abb2bf',
    mono2: '#818896',
    mono3: '#5c6370',
    hue1: '#56b6c2',
    hue2: '#61aeee',
    hue3: '#c678dd',
    hue4: '#98c379',
    hue5: '#e06c75',
    hue52: '#be5046',
    hue6: '#d19a66',
    hue62: '#e6c07b'
  },
  light: {
    mono1: '#383a42',
    mono2: '#686b77',
    mono3: '#a0a1a7',
    hue1: '#0184bb',
    hue2: '#4078f2',
    hue3: '#a626a4',
    hue4: '#50a14f',
    hue5: '#e45649',
    hue52: '#c91243',
    hue6: '#986801',
    hue62: '#c18401'
  }
};

const themed = function themed(key) {
  return function (props) {
    return themes[props.theme.name][key];
  };
};

var StyledCode = _components.styled.code(_templateObject, themed('mono1'), themed('mono3'), themed('hue3'), themed('hue5'), themed('hue1'), themed('hue4'), themed('hue62'), themed('hue6'), themed('hue2'));

function highlightCode(language) {
  const source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!language) {
    return source;
  }
  if (!source) {
    return source;
  }
  const hast = (0, _highlight2.default)(language, source);
  return (0, _toElements2.default)(hast);
}