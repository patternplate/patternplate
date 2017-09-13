'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _templateObject = _taggedTemplateLiteral(['\n  display: inline;\n  padding: 0;\n  background: ', ';\n  border-radius: 3px;\n  font-size: 15.3px;\n  line-height: 23px;\n  padding: 3px;\n'], ['\n  display: inline;\n  padding: 0;\n  background: ', ';\n  border-radius: 3px;\n  font-size: 15.3px;\n  line-height: 23px;\n  padding: 3px;\n']);

const _components = require('@patternplate/components');

const _code = require('../code');

const _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _components.styled)(_code2.default)(_templateObject, (props) => {
  return props.theme.backgroundSecondary;
});