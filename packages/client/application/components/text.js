'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _templateObject = _taggedTemplateLiteral(['\n  font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Helvetica, Arial,\n    sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\';\n'], ['\n  font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Helvetica, Arial,\n    sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\';\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _tagHoc = require('tag-hoc');

const _tagHoc2 = _interopRequireDefault(_tagHoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = Text;


function Text(props) {
  return _react2.default.createElement(
    StyledText,
    { is: props.is, className: props.className },
    props.children
  );
}

var StyledText = (0, _components.styled)((0, _tagHoc2.default)(['size'])('div'))(_templateObject);