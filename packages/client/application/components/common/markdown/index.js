'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  & table {\n    text-align: left;\n    display: block;\n    width: 100%;\n    overflow: auto;\n    margin: 0 0 16px 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n    font-size: 18px;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n  & tr {\n    color: ', ';\n    border-top: 1px solid ', ';\n    background: transparent;\n  }\n  & tr:nth-child(2n) {\n    background: ', '\n  }\n  & th {\n    padding: 6px 13px;\n    border: 1px solid ', ';\n    font-weight: 600;\n  }\n  & td {\n    padding: 6px 13px;\n    border: 1px solid ', ';\n  }\n'], ['\n  & table {\n    text-align: left;\n    display: block;\n    width: 100%;\n    overflow: auto;\n    margin: 0 0 16px 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n    font-size: 18px;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n  & tr {\n    color: ', ';\n    border-top: 1px solid ', ';\n    background: transparent;\n  }\n  & tr:nth-child(2n) {\n    background: ', '\n  }\n  & th {\n    padding: 6px 13px;\n    border: 1px solid ', ';\n    font-weight: 600;\n  }\n  & td {\n    padding: 6px 13px;\n    border: 1px solid ', ';\n  }\n']);

var _frontMatter = require('front-matter');

var _frontMatter2 = _interopRequireDefault(_frontMatter);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _remark = require('remark');

var _remark2 = _interopRequireDefault(_remark);

var _remarkGemojiToEmoji = require('remark-gemoji-to-emoji');

var _remarkGemojiToEmoji2 = _interopRequireDefault(_remarkGemojiToEmoji);

var _remarkReact = require('remark-react');

var _remarkReact2 = _interopRequireDefault(_remarkReact);

var _components = require('@patternplate/components');

var _markdownBlockquote = require('./markdown-blockquote');

var _markdownBlockquote2 = _interopRequireDefault(_markdownBlockquote);

var _markdownCode = require('./markdown-code');

var _markdownCode2 = _interopRequireDefault(_markdownCode);

var _markdownCodeBlock = require('./markdown-code-block');

var _markdownCodeBlock2 = _interopRequireDefault(_markdownCodeBlock);

var _markdownCopy = require('./markdown-copy');

var _markdownCopy2 = _interopRequireDefault(_markdownCopy);

var _markdownHeadline = require('./markdown-headline');

var _markdownHeadline2 = _interopRequireDefault(_markdownHeadline);

var _markdownHr = require('./markdown-hr');

var _markdownHr2 = _interopRequireDefault(_markdownHr);

var _markdownImage = require('./markdown-image');

var _markdownImage2 = _interopRequireDefault(_markdownImage);

var _markdownItem = require('./markdown-item');

var _markdownItem2 = _interopRequireDefault(_markdownItem);

var _markdownList = require('./markdown-list');

var _markdownList2 = _interopRequireDefault(_markdownList);

var _markdownLink = require('./markdown-link');

var _markdownLink2 = _interopRequireDefault(_markdownLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markdown = function (_React$Component) {
  _inherits(Markdown, _React$Component);

  function Markdown(props, context) {
    _classCallCheck(this, Markdown);

    var _this = _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, props, context));

    _this.state = props;
    return _this;
  }

  _createClass(Markdown, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      var _this2 = this;

      if (next.source === this.props.source) {
        return;
      }

      clearTimeout(this.timer);

      this.setState({
        source: ''
      });

      setTimeout(function () {
        return _this2.setState(next);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      var Headline = prop('linkable', props.linkable)(_markdownHeadline2.default);

      return _react2.default.createElement(
        StyledMarkdown,
        { className: props.className },
        this.state.source && (0, _remark2.default)().use(_remarkReact2.default, {
          sanitize: false,
          remarkReactComponents: {
            a: _markdownLink2.default,
            blockquote: _markdownBlockquote2.default,
            code: _markdownCode2.default,
            h1: is('h1')(Headline),
            h2: is('h2')(Headline),
            h3: is('h3')(Headline),
            h4: is('h4')(Headline),
            h5: is('h5')(Headline),
            h6: is('h6')(Headline),
            hr: _markdownHr2.default,
            img: _markdownImage2.default,
            li: _markdownItem2.default,
            p: _markdownCopy2.default,
            pre: _markdownCodeBlock2.default,
            ul: is('ul')(_markdownList2.default),
            ol: is('ol')(_markdownList2.default)
          }
        }).use(_remarkGemojiToEmoji2.default).processSync((0, _frontMatter2.default)(this.state.source).body).contents
      );
    }
  }]);

  return Markdown;
}(_react2.default.Component);

exports.default = Markdown;


var StyledMarkdown = _components.styled.div(_templateObject, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.backgroundTertiary;
}, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.border;
});

function is(is) {
  return function (Component) {
    return function (props) {
      return _react2.default.createElement(Component, _extends({ is: is }, props));
    };
  };
}

function prop(name, value) {
  return function (Component) {
    return function (props) {
      return _react2.default.createElement(Component, _extends({}, props, _defineProperty({}, name, value)));
    };
  };
}