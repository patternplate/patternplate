'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var tag = require('tag-hoc').default;
var color = require('color');
var styled = require('styled-components').default;

var fonts = require('../fonts');
var Icon = require('../icon');
var Link = require('../link');

var FONTS = fonts();

var NavigationItem = function (_React$Component) {
  _inherits(NavigationItem, _React$Component);

  function NavigationItem() {
    var _ref;

    _classCallCheck(this, NavigationItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = NavigationItem.__proto__ || Object.getPrototypeOf(NavigationItem)).call.apply(_ref, [this].concat(args)));

    _this.getRef = _this.getRef.bind(_this);
    return _this;
  }

  _createClass(NavigationItem, [{
    key: 'getRef',
    value: function getRef(ref) {
      this.ref = ref;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.active && this.ref) {
        setTimeout(function () {
          _this2.props.onScrollRequest({ target: _this2.ref, props: _this2.props });
        });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(next) {
      if (this.props.type === 'folder') {
        return;
      }
      if (next.active && this.ref) {
        this.props.onScrollRequest({ target: this.ref, props: next });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      var title = props.title || `Navigate to ${props.name} ${props.type}`;
      var symbol = props.active ? props.symbolActive : props.symbol;

      return React.createElement(
        StyledNavigationItem,
        {
          active: props.active,
          className: props.className,
          innerRef: this.getRef,
          type: props.type
        },
        React.createElement(
          StyledNavigationLink,
          {
            active: props.active,
            onClick: props.onClick,
            href: props.href,
            sticky: props.type === 'folder' && props.active,
            type: props.type,
            title: title
          },
          symbol && React.createElement(StyledIcon, { active: props.active, size: 'm', symbol: symbol }),
          React.createElement(
            StyledName,
            null,
            props.name
          ),
          props.meta && React.createElement(
            StyledMeta,
            { active: props.active },
            props.meta
          )
        ),
        props.active && props.children
      );
    }
  }]);

  return NavigationItem;
}(React.Component);

module.exports = NavigationItem;

var StyledIcon = styled(Icon)`
  flex: 0 0 auto;
  fill: ${function (props) {
  return props.theme.color;
}};
  ${function (props) {
  return props.active && `fill: ${color(props.theme.active)}`;
}};
  padding: 10px 0 10px 9px;
`;

var StyledName = styled.div`
  box-sizing: border-box;
  flex: 1 1 100%;
  padding: 10px;
`;

var StyledMeta = styled.div`
  flex: 1 0 auto;
  margin: 0 ${function (props) {
  return props.active ? 6 : 10;
}}px 0 auto;
`;

var StyledNavigationItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-left: ${function (props) {
  return props.type === 'folder' && `3px solid transparent`;
}};
  margin-left: 1px;
  ${function (props) {
  return props.active && `border-color: ${color(props.theme.active).fade(0.6).toString()}`;
}};
`;

var LinkTag = tag(['active', 'type'])(Link);

var StyledNavigationLink = styled(LinkTag)`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  font-size: ${function (props) {
  return props.theme.fontSize;
}};
  line-height: 20px;
  font-family: ${FONTS.default};
  font-weight: ${function (props) {
  return props.theme.fontWeight;
}};
  ${function (props) {
  return props.active && `
		margin-left: ${props.type === 'folder' ? '-3px' : '-4px'};
		padding-left: ${props.type === 'folder' ? 0 : '1px'};
		border-left: 3px solid ${props.theme.active};
	`;
}};
  :link,
  :visited {
    color: ${function (props) {
  return props.theme.color;
}};
    ${function (props) {
  return props.active && `color: ${color(props.theme.active)}`;
}};
  }
`;
//# sourceMappingURL=index.js.map