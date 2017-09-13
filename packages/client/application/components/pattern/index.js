'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  &::before {\n    content: \'\';\n    display: ', ';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: ', ';\n    background-size: 16px 16px;\n    background-position: 0 0, 8px 8px;\n  }\n'], ['\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  &::before {\n    content: \'\';\n    display: ', ';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: ', ';\n    background-size: 16px 16px;\n    background-position: 0 0, 8px 8px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n'], ['\n  height: 100%;\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 30px;\n  box-sizing: border-box;\n'], ['\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 30px;\n  box-sizing: border-box;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n'], ['\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 3px;\n  &::before {\n    content: \'\';\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: ', ';\n    opacity: 1;\n    transition: transform 1s ease-in-out;\n    ', '\n  }\n'], ['\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 3px;\n  &::before {\n    content: \'\';\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: ', ';\n    opacity: 1;\n    transition: transform 1s ease-in-out;\n    ', '\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _markdown = require('../common/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _patternDemo = require('./pattern-demo');

var _patternDemo2 = _interopRequireDefault(_patternDemo);

var _search = require('../../containers/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VISIBILITY = function VISIBILITY(props) {
  return props.checkers ? 'block' : 'none';
};

var StyledPattern = (0, _components.styled)((0, _tagHoc2.default)(['checkers'])('div'))(_templateObject, VISIBILITY, function (props) {
  return checkers(props);
});

var StyledPatternFolder = _components.styled.div(_templateObject2);

var StyledPatternDoc = _components.styled.div(_templateObject3);

var StyledPatternDemo = _components.styled.div(_templateObject4);

var StyledPatternLoader = _components.styled.div(_templateObject5, function (props) {
  return props.theme.active;
}, function (props) {
  switch (props.status) {
    case 'entering':
      return '\n            transform: translateX(-100%);\n          ';
    case 'entered':
      return 'transform: translateX(-15%);';
    case 'exiting':
      return '\n            transition: transform .3s ease-out;\n            transform: translateX(0);\n          ';
    case 'exited':
      return '\n            transform: translateX(-100%);\n            transition: opacity .3s .25s ease-out;\n          ';
  }
});

var Pattern = function (_React$Component) {
  _inherits(Pattern, _React$Component);

  function Pattern() {
    _classCallCheck(this, Pattern);

    return _possibleConstructorReturn(this, (Pattern.__proto__ || Object.getPrototypeOf(Pattern)).apply(this, arguments));
  }

  _createClass(Pattern, [{
    key: 'render',
    value: function render() {
      var props = this.props;


      switch (props.type) {
        case 'pattern':
          return _react2.default.createElement(
            StyledPattern,
            { checkers: props.opacity },
            _react2.default.createElement(
              _Transition2.default,
              { 'in': props.loading, timeout: { enter: 1000, exit: 850 } },
              function (status) {
                return _react2.default.createElement(StyledPatternLoader, { status: status });
              }
            ),
            _react2.default.createElement(
              StyledPatternDemo,
              null,
              _react2.default.createElement(_patternDemo2.default, {
                src: props.src,
                contents: props.contents,
                loading: props.loading
              })
            )
          );
        case 'not-found':
        default:
          return _react2.default.createElement(
            StyledPatternFolder,
            null,
            _react2.default.createElement(
              StyledPatternDoc,
              null,
              _react2.default.createElement(_search2.default, { inline: true }),
              _react2.default.createElement(_markdown2.default, { source: props.docs })
            )
          );
      }
    }
  }]);

  return Pattern;
}(_react2.default.Component);

exports.default = Pattern;


function grad(fill) {
  return 'linear-gradient(45deg, ' + fill + ' 25%, transparent 25%, transparent 75%, ' + fill + ' 75%, ' + fill + ')';
}

function checkers(props) {
  var fill = props.theme.border;
  return '\n    ' + grad(fill) + ',\n    ' + grad(fill) + ';\n  ';
}