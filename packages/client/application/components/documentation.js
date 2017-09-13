'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  overflow: scroll;\n  -webkit-overflow-sroll: touch;\n  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n  -webkit-mask-image: linear-gradient(\n    to top,\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 1) 50px\n  );\n'], ['\n  height: 100%;\n  overflow: scroll;\n  -webkit-overflow-sroll: touch;\n  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n  -webkit-mask-image: linear-gradient(\n    to top,\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 1) 50px\n  );\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  padding: 30px;\n'], ['\n  box-sizing: border-box;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  padding: 30px;\n']);

exports.default = Documentation;

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _markdown = require('../containers/markdown');

const _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Documentation(props) {
  return _react2.default.createElement(
    ScrollBox,
    null,
    _react2.default.createElement(
      StyledDocumentation,
      null,
      _react2.default.createElement(_markdown2.default, { source: props.doc })
    )
  );
}

var ScrollBox = _components.styled.div(_templateObject);

var StyledDocumentation = _components.styled.div(_templateObject2);