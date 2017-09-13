'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = configureStore;

const _redux = require('redux');

const _reactRouterRedux = require('react-router-redux');

const _reduxThunk = require('redux-thunk');

const _reduxThunk2 = _interopRequireDefault(_reduxThunk);

const _topologicallyCombineReducers = require('topologically-combine-reducers');

const _topologicallyCombineReducers2 = _interopRequireDefault(_topologicallyCombineReducers);

const _actions = require('./actions');

const actions = _interopRequireWildcard(_actions);

const _shortcuts = require('./shortcuts');

const _shortcuts2 = _interopRequireDefault(_shortcuts);

const _reducers = require('./reducers');

const _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(history, initial) {
  const reducer = hydrateable((0, _topologicallyCombineReducers2.default)(_extends({ routing: _reactRouterRedux.routerReducer }, _reducers2.default), _reducers.dependencies));
  const enhance = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

  const middlewares = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-freeze'));
  }

  const middleware = _redux.applyMiddleware.apply(undefined, middlewares);
  const shortcuts = (0, _shortcuts2.default)();
  const store = (0, _redux.createStore)(reducer, _extends({}, initial, { shortcuts }), enhance(middleware));

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