'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mapDispatch = mapDispatch;

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _markdown = require('../components/common/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapProps(state) {
	var location = state.routing.locationBeforeTransitions;
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