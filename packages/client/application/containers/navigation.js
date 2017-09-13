'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationToolbar = exports.NavigationHeader = undefined;

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _redux = require('redux');

var _components = require('@patternplate/components');

var _navigation = require('../selectors/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _docs = require('../selectors/docs');

var _docs2 = _interopRequireDefault(_docs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_components.MainNavigation);
var NavigationHeader = exports.NavigationHeader = _components.MainNavigation.NavigationHeader;
var NavigationToolbar = exports.NavigationToolbar = _components.MainNavigation.NavigationToolbar;

function mapProps(state) {
  return {
    active: state.id,
    docs: (0, _docs2.default)(state),
    navigation: (0, _navigation2.default)(state)
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    onItemClick: function onItemClick(e) {
      e.preventDefault();

      if (!e.currentTarget.href) {
        return { type: 'noop' };
      }

      var parsed = _url2.default.parse(e.currentTarget.href);
      return (0, _reactRouterRedux.push)(parsed.pathname + '?' + parsed.query);
    }
  }, dispatch);
}