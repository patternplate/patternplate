'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = configureStore;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _topologicallyCombineReducers = require('topologically-combine-reducers');

var _topologicallyCombineReducers2 = _interopRequireDefault(_topologicallyCombineReducers);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _shortcuts = require('./shortcuts');

var _shortcuts2 = _interopRequireDefault(_shortcuts);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(history, initial) {
	var reducer = hydrateable((0, _topologicallyCombineReducers2.default)(_extends({ routing: _reactRouterRedux.routerReducer }, _reducers2.default), _reducers.dependencies));
	var enhance = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

	var middlewares = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(require('redux-freeze'));
	}

	var middleware = _redux.applyMiddleware.apply(undefined, middlewares);
	var shortcuts = (0, _shortcuts2.default)();
	var store = (0, _redux.createStore)(reducer, _extends({}, initial, { shortcuts: shortcuts }), enhance(middleware));

	listen(store, { url: '/api' });
	shortcuts(store);

	return store;
}

function hydrateable(reducer) {
	return function (state, action) {
		switch (action.type) {
			case '@@APPLY_STATE':
				return reducer(action.payload, action);
			default:
				return reducer(state, action);
		}
	};
}

function listen(store, options) {
	store.dispatch(actions.listen({ url: options.url }));
}