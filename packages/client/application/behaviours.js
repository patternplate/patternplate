'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.mountable = mountable;
exports.skippable = skippable;

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { const target = {}; for (const i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mountable(Component) {
  return function (_React$Component) {
    _inherits(MountableComponent, _React$Component);

    function MountableComponent() {
      _classCallCheck(this, MountableComponent);

      return _possibleConstructorReturn(this, (MountableComponent.__proto__ || Object.getPrototypeOf(MountableComponent)).apply(this, arguments));
    }

    _createClass(MountableComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof this.props.onMount === 'function') {
          this.props.onMount();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        let _props = this.props,
            onMount = _props.onMount,
            rest = _objectWithoutProperties(_props, ['onMount']);

        return _react2.default.createElement(Component, rest);
      }
    }]);

    return MountableComponent;
  }(_react2.default.Component);
}

function skippable(Component) {
  const prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'active';

  return function (props) {
    return props[prop] === true ? _react2.default.createElement(Component, props) : null;
  };
}