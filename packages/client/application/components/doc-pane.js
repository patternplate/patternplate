'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  &::before {\n    content: \'\';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: ', ';\n    background: ', ';\n  }\n'], ['\n  position: relative;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  &::before {\n    content: \'\';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: ', ';\n    background: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch;\n  padding: 10px 15px;\n'], ['\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch;\n  padding: 10px 15px;\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _markdown = require('./common/markdown');

const _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = DocPane;


function DocPane(props) {
  return _react2.default.createElement(
    StyledDocPane,
    { className: props.className, hermit: props.hermit },
    _react2.default.createElement(
      StyledScrollbox,
      null,
      _react2.default.createElement(_markdown2.default, { source: props.doc, linkable: false })
    )
  );
}

const BORDER_RADIUS = 10;

var StyledDocPane = _components.styled.div(_templateObject, (props) => {
  return props.hermit ? BORDER_RADIUS + 'px' : '0 ' + BORDER_RADIUS + 'px ' + BORDER_RADIUS + 'px 0';
}, (props) => {
  return props.theme.background;
});

var StyledScrollbox = _components.styled.div(_templateObject2);