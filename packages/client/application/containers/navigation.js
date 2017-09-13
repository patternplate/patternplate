'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationToolbar = exports.NavigationHeader = undefined;

const _url = require('url');

const _url2 = _interopRequireDefault(_url);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _reactRedux = require('react-redux');

const _reactRouterRedux = require('react-router-redux');

const _redux = require('redux');

const _components = require('@patternplate/components');

const _navigation = require('../selectors/navigation');

const _navigation2 = _interopRequireDefault(_navigation);

const _docs = require('../selectors/docs');

const _docs2 = _interopRequireDefault(_docs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_components.MainNavigation);
const NavigationHeader = exports.NavigationHeader = _components.MainNavigation.NavigationHeader;
const NavigationToolbar = exports.NavigationToolbar = _components.MainNavigation.NavigationToolbar;

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

      const parsed = _url2.default.parse(e.currentTarget.href);
      return (0, _reactRouterRedux.push)(parsed.pathname + '?' + parsed.query);
    }
  }, dispatch);
}