'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args)));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Link, [{
    key: 'handleClick',
    value: function handleClick(e) {
      this.props.onClick(e, this.props.href);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      return React.createElement(
        'a',
        {
          target: props.external ? '_blank' : null,
          rel: props.external ? 'noopener noreferrer' : null,
          className: props.className,
          href: props.href,
          onClick: this.handleClick,
          onMouseOver: props.onHover,
          title: props.title,
          'data-id': props['data-id']
        },
        props.children
      );
    }
  }]);

  return Link;
}(React.Component);

module.exports = Link;

Link.defaultProps = {
  external: false,
  onClick: function onClick() {},
  onHover: function onHover() {}
};
//# sourceMappingURL=index.js.map