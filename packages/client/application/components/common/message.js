'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _components = require('@patternplate/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'handleDismissClick',
    value: function handleDismissClick() {
      this.props.onDismiss(this.props.id);
    }
  }, {
    key: 'handleRetryClick',
    value: function handleRetryClick() {
      this.props.onRetry();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      var className = (0, _classnames2.default)('message', 'message--' + props.type);
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'message__header' },
          props.title && _react2.default.createElement(
            'div',
            { className: 'message__title' },
            props.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'message__action' },
            props.retry && _react2.default.createElement(
              'button',
              {
                onClick: this.handleRetryClick,
                type: 'button',
                className: 'message__button',
                title: 'Retry loading ' + props.pattern + ' [ctrl+r]'
              },
              'Retry'
            ),
            _react2.default.createElement(
              'button',
              {
                onClick: this.handleDismissClick,
                type: 'button',
                className: 'message__button',
                title: 'Dismiss message [esc]'
              },
              'Dismiss'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'message__body' },
          _react2.default.createElement(
            'pre',
            { className: 'message__preformatted' },
            props.body
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'message__meta' },
          props.pattern && _react2.default.createElement(
            _reactRouter.Link,
            {
              to: {
                pathname: props.base + 'pattern/' + props.pattern,
                query: props.location.query
              },
              className: 'message__field'
            },
            _react2.default.createElement(_components.Icon, { base: props.base, symbol: 'pattern' }),
            props.pattern
          ),
          props.file && _react2.default.createElement(
            'div',
            { className: 'message__field' },
            _react2.default.createElement(_components.Icon, { base: props.base, symbol: 'documentation' }),
            props.file.slice(-50)
          )
        )
      );
    }
  }]);

  return Message;
}(_react.Component);

Message.defaultProps = {
  onTimeRequest: _lodash.noop,
  onDismiss: _lodash.noop,
  onRetry: _lodash.noop
};
exports.default = Message;