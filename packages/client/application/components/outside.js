'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const ClickOutside = function (_Component) {
  _inherits(ClickOutside, _Component);

  function ClickOutside(props) {
    _classCallCheck(this, ClickOutside);

    const _this = _possibleConstructorReturn(this, (ClickOutside.__proto__ || Object.getPrototypeOf(ClickOutside)).call(this, props));

    _this.handle = function (e) {
      const onClickOutside = _this.props.onClickOutside;

      const el = _this.container;
      if (!el.contains(e.target)) {
        onClickOutside(e);
      }
    };

    _this.getContainer = _this.getContainer.bind(_this);
    return _this;
  }

  _createClass(ClickOutside, [{
    key: 'getContainer',
    value: function getContainer(ref) {
      this.container = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className, ref: this.getContainer },
        this.props.children
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      global.document.addEventListener('click', this.handle, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      global.document.removeEventListener('click', this.handle, true);
    }
  }]);

  return ClickOutside;
}(_react.Component);

exports.default = ClickOutside;