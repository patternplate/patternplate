'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  border: 0;\n'], ['\n  width: 100%;\n  height: 100%;\n  border: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDemo = _components.styled.iframe(_templateObject);

var PatternDemo = function (_React$Component) {
  _inherits(PatternDemo, _React$Component);

  function PatternDemo() {
    _classCallCheck(this, PatternDemo);

    return _possibleConstructorReturn(this, (PatternDemo.__proto__ || Object.getPrototypeOf(PatternDemo)).apply(this, arguments));
  }

  _createClass(PatternDemo, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return props.contents ? _react2.default.createElement(StyledDemo, {
        srcDoc: props.contents,
        seamless: true
      }) : _react2.default.createElement(StyledDemo, {
        src: props.src,
        seamless: true
      });
    }
  }]);

  return PatternDemo;
}(_react2.default.Component);

exports.default = PatternDemo;