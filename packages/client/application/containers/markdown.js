'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatch = mapDispatch;

const _redux = require('redux');

const _reactRedux = require('react-redux');

const _markdown = require('../components/common/markdown');

const _markdown2 = _interopRequireDefault(_markdown);

const _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapProps(state) {
  const location = state.routing.locationBeforeTransitions;
  return {
    base: state.base,
    hash: location.hash,
    pathname: location.pathname,
    query: location.query
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({ scrollTo: _actions.scrollTo }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapProps, mapDispatch)(_markdown2.default);