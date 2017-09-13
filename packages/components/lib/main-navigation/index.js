'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var styled = require('styled-components').default;
var NavigationTree = require('../navigation-tree');
var NavigationToolbar = require('../navigation-toolbar');
var Header = require('../main-header');

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _ref;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call.apply(_ref, [this].concat(args)));

    _this.getRef = _this.getRef.bind(_this);
    _this.handleScrollRequest = _this.handleScrollRequest.bind(_this);
    return _this;
  }

  _createClass(Navigation, [{
    key: 'handleScrollRequest',
    value: function handleScrollRequest(e) {
      if (!this.ref || !e.target) {
        return;
      }

      var item = e.target.getBoundingClientRect();
      var list = this.ref.getBoundingClientRect();
      var pad = getPadding(this.ref);

      if (item.bottom > list.bottom - pad('bottom')) {
        this.ref.scrollTop = e.target.offsetTop - list.height + pad('bottom') + item.height;
      }

      if (item.top < list.top + pad('top')) {
        this.ref.scrollTop = e.target.offsetTop + pad('top');
      }
    }
  }, {
    key: 'getRef',
    value: function getRef(ref) {
      this.ref = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;

      var children = React.Children.toArray(props.children);
      var toolbar = children.find(function (child) {
        return child.type === NavigationToolbar;
      });
      var header = children.find(function (child) {
        return child.type === NavigationHeader;
      });

      return React.createElement(
        StyledNavigation,
        { onKeyDown: this.handleKeyDown },
        React.createElement(
          StyledNavigationTree,
          { innerRef: this.getRef },
          header ? header : React.createElement(StyledHeader, {
            title: props.applicationTitle,
            symbol: 'patternplate'
          }),
          React.createElement(Documentation, {
            active: props.active,
            docs: props.docs,
            onItemClick: props.onItemClick,
            onScrollRequest: this.handleScrollRequest
          }),
          React.createElement(NavigationTree, {
            active: props.active,
            data: props.navigation.children,
            onItemClick: props.onItemClick,
            onScrollRequest: this.handleScrollRequest,
            prefix: '/pattern'
          })
        ),
        toolbar && React.createElement(
          StyledNavigationToolbar,
          null,
          toolbar
        )
      );
    }
  }]);

  return Navigation;
}(React.Component);

module.exports = Navigation;
module.exports.NavigationToolbar = NavigationToolbar;
module.exports.NavigationHeader = NavigationHeader;

Navigation.defaultProps = {
  tools: []
};

function NavigationHeader(props) {
  return React.createElement(
    'div',
    null,
    props.children
  );
}

function getPadding(el) {
  var style = global.getComputedStyle(el, null);
  return function (direction) {
    return parseInt(style.getPropertyValue(`padding-${direction}`), 10);
  };
}

var StyledHeader = styled(Header)`
  box-sizing: border-box;
  margin-bottom: 10px;
`;

var StyledNavigation = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${function (props) {
  return props.theme.background;
}};
`;

var PASSAGE_HEIGHT = 50;

var StyledNavigationTree = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  padding-bottom: 50px;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scroll: touch;
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) ${PASSAGE_HEIGHT}px
  );
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) ${PASSAGE_HEIGHT}px
  );
`;

var StyledNavigationToolbar = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

function Documentation(props) {
  return React.createElement(StyledDocumentationTree, {
    active: props.active,
    className: 'docs-navigation',
    data: props.docs.children,
    onItemClick: props.onItemClick,
    onScrollRequest: props.onScrollRequest,
    prefix: '/doc'
  });
}

var StyledDocumentationTree = styled(NavigationTree)`
  margin-bottom: 5px;
  border-bottom: 1px solid ${function (props) {
  return props.theme.border;
}};
  padding-bottom: 5px;
`;
//# sourceMappingURL=index.js.map