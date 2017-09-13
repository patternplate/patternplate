'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding: 10px 15px;\n'], ['\n  display: flex;\n  align-items: center;\n  height: 60px;\n  padding: 10px 15px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex-grow: 0;\n  flex-shrink: 0;\n  fill: ', ';\n'], ['\n  flex-grow: 0;\n  flex-shrink: 0;\n  fill: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  font-size: 16px;\n  color: ', ';\n  padding: 0;\n  appearance: none;\n  border-radius: 0;\n  border: none;\n  :focus {\n    outline: none;\n  }\n'], ['\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  font-size: 16px;\n  color: ', ';\n  padding: 0;\n  appearance: none;\n  border-radius: 0;\n  border: none;\n  :focus {\n    outline: none;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  flex-shrink: 0;\n  margin-left: 10px;\n'], ['\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  flex-shrink: 0;\n  margin-left: 10px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  opacity: .3;\n'], ['\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  opacity: .3;\n']);

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSearchField = _components.styled.label(_templateObject);

var StyledIcon = (0, _components.styled)(_components.Icon)(_templateObject2, function (props) {
  return props.theme.color;
});

var StyledInput = _components.styled.input(_templateObject3, function (props) {
  return props.theme.color;
});

var StyledInputContainer = _components.styled.div(_templateObject4);

var StyledInputSuggestion = (0, _components.styled)(function (p) {
  return _react2.default.createElement(StyledInput, _extends({}, p, { readOnly: true }));
})(_templateObject5);

var SearchField = function (_Component) {
  _inherits(SearchField, _Component);

  function SearchField() {
    var _ref;

    _classCallCheck(this, SearchField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call.apply(_ref, [this].concat(args)));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleStop = (0, _lodash.debounce)(_this.props.onStop, 300, { trailing: true });
    _this.timer = null;
    return _this;
  }

  _createClass(SearchField, [{
    key: 'handleChange',
    value: function handleChange(e) {
      e.persist();
      this.props.onChange(e);
      this.handleStop(e);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      var target = e.target;

      var hasValue = target.value.length > 0;
      var atEnd = hasValue && target.selectionStart === target.value.length;

      if (e.which !== 27) {
        e.stopPropagation();
      }
      if (e.which === 27 && hasValue) {
        e.preventDefault();
        this.props.onClear();
      }
      if (e.which === 38) {
        this.props.onUp(e);
      }
      if (e.which === 39 && atEnd && this.props.suggestion) {
        e.preventDefault();
        this.props.onComplete(this.props.suggestion);
      }
      if (e.which === 40 && atEnd) {
        e.preventDefault();
        this.props.onDown(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      return _react2.default.createElement(
        StyledSearchField,
        null,
        _react2.default.createElement(StyledIcon, { symbol: 'search' }),
        _react2.default.createElement(
          StyledInputContainer,
          null,
          _react2.default.createElement(StyledInputSuggestion, {
            value: props.suggestion || ''
          }),
          _react2.default.createElement(StyledInput, {
            autoFocus: props.autoFocus,
            name: props.name,
            onBlur: props.onBlur,
            onChange: this.handleChange,
            onFocus: props.onFocus,
            onKeyDown: this.handleKeyDown,
            placeholder: props.placeholder,
            title: props.title,
            type: 'text',
            value: props.value,
            'data-search': props.mark
          })
        ),
        props.children
      );
    }
  }]);

  return SearchField;
}(_react.Component);

SearchField.defaultProps = {
  blur: function blur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onUp: function onUp() {},
  onDown: function onDown() {},
  onBlur: function onBlur() {},
  onStop: function onStop() {}
};
exports.default = SearchField;