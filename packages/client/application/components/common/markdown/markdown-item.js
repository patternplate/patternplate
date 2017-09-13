'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 18px;\n  line-height: 27px;\n  color: ', ';\n  margin-top: 4.5px;\n'], ['\n  font-size: 18px;\n  line-height: 27px;\n  color: ', ';\n  margin-top: 4.5px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _text = require('../../text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _components.styled)(MarkdownItem)(_templateObject, function (props) {
  return props.theme.color;
});


function MarkdownItem(props) {
  return _react2.default.createElement(
    _text2.default,
    { className: props.className, is: 'li' },
    props.children
  );
}