'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _templateObject = _taggedTemplateLiteral(['\n  height: 0.25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: ', ';\n  border: 0;\n'], ['\n  height: 0.25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: ', ';\n  border: 0;\n']);

const _components = require('@patternplate/components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _components.styled.hr(_templateObject, (props) => {
  return props.theme.border;
});