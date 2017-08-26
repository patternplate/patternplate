'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
	var reducer = hydrateable((0, _topologicallyCombineReducers2.default)((0, _extends3.default)({ routing: _reactRouterRedux.routerReducer }, _reducers2.default), _reducers.dependencies));
	var enhance = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

	var middlewares = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(require('redux-freeze'));
	}

	var middleware = _redux.applyMiddleware.apply(undefined, middlewares);
	var shortcuts = (0, _shortcuts2.default)();
	var store = (0, _redux.createStore)(reducer, (0, _extends3.default)({}, initial, { shortcuts: shortcuts }), enhance(middleware));

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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9hcHBsaWNhdGlvbi9zdG9yZS5qcyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImFjdGlvbnMiLCJoaXN0b3J5IiwiaW5pdGlhbCIsInJlZHVjZXIiLCJoeWRyYXRlYWJsZSIsInJvdXRpbmciLCJlbmhhbmNlIiwiZ2xvYmFsIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwibWlkZGxld2FyZXMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJwdXNoIiwicmVxdWlyZSIsIm1pZGRsZXdhcmUiLCJzaG9ydGN1dHMiLCJzdG9yZSIsImxpc3RlbiIsInVybCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJvcHRpb25zIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBU3dCQSxjOztBQVR4Qjs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0lBQVlDLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTRCxjQUFULENBQXdCRSxPQUF4QixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDeEQsS0FBTUMsVUFBVUMsWUFBWSxxRUFBVUMsd0NBQVYsZ0RBQVosQ0FBaEI7QUFDQSxLQUFNQyxVQUFVQyxPQUFPQyxvQ0FBUCxrQkFBaEI7O0FBRUEsS0FBTUMsY0FBYyx1QkFFbkIsd0NBQWlCUixPQUFqQixDQUZtQixDQUFwQjs7QUFLQSxLQUFJUyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDMUNILGNBQVlJLElBQVosQ0FBaUJDLFFBQVEsY0FBUixDQUFqQjtBQUNBOztBQUVELEtBQU1DLGFBQWEsd0NBQW1CTixXQUFuQixDQUFuQjtBQUNBLEtBQU1PLFlBQVksMEJBQWxCO0FBQ0EsS0FBTUMsUUFBUSx3QkFBWWQsT0FBWiw2QkFBeUJELE9BQXpCLElBQWtDYyxvQkFBbEMsS0FBOENWLFFBQVFTLFVBQVIsQ0FBOUMsQ0FBZDs7QUFFQUcsUUFBT0QsS0FBUCxFQUFjLEVBQUNFLEtBQUssTUFBTixFQUFkO0FBQ0FILFdBQVVDLEtBQVY7O0FBRUEsUUFBT0EsS0FBUDtBQUNBOztBQUVELFNBQVNiLFdBQVQsQ0FBcUJELE9BQXJCLEVBQThCO0FBQzdCLFFBQU8sVUFBQ2lCLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN6QixVQUFRQSxPQUFPQyxJQUFmO0FBQ0MsUUFBSyxlQUFMO0FBQ0MsV0FBT25CLFFBQVFrQixPQUFPRSxPQUFmLEVBQXdCRixNQUF4QixDQUFQO0FBQ0Q7QUFDQyxXQUFPbEIsUUFBUWlCLEtBQVIsRUFBZUMsTUFBZixDQUFQO0FBSkY7QUFNQSxFQVBEO0FBUUE7O0FBRUQsU0FBU0gsTUFBVCxDQUFnQkQsS0FBaEIsRUFBdUJPLE9BQXZCLEVBQWdDO0FBQy9CUCxPQUFNUSxRQUFOLENBQWV6QixRQUFRa0IsTUFBUixDQUFlLEVBQUNDLEtBQUtLLFFBQVFMLEdBQWQsRUFBZixDQUFmO0FBQ0EiLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7cm91dGVyUmVkdWNlciBhcyByb3V0aW5nLCByb3V0ZXJNaWRkbGV3YXJlfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB0b3BvbG9neSBmcm9tICd0b3BvbG9naWNhbGx5LWNvbWJpbmUtcmVkdWNlcnMnO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgY3JlYXRlU2hvcnRjdXRzIGZyb20gJy4vc2hvcnRjdXRzJztcbmltcG9ydCByZWR1Y2Vycywge2RlcGVuZGVuY2llc30gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGhpc3RvcnksIGluaXRpYWwpIHtcblx0Y29uc3QgcmVkdWNlciA9IGh5ZHJhdGVhYmxlKHRvcG9sb2d5KHtyb3V0aW5nLCAuLi5yZWR1Y2Vyc30sIGRlcGVuZGVuY2llcykpO1xuXHRjb25zdCBlbmhhbmNlID0gZ2xvYmFsLl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5cdGNvbnN0IG1pZGRsZXdhcmVzID0gW1xuXHRcdHRodW5rLFxuXHRcdHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSlcblx0XTtcblxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXHRcdG1pZGRsZXdhcmVzLnB1c2gocmVxdWlyZSgncmVkdXgtZnJlZXplJykpO1xuXHR9XG5cblx0Y29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyk7XG5cdGNvbnN0IHNob3J0Y3V0cyA9IGNyZWF0ZVNob3J0Y3V0cygpO1xuXHRjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHsuLi5pbml0aWFsLCBzaG9ydGN1dHN9LCBlbmhhbmNlKG1pZGRsZXdhcmUpKTtcblxuXHRsaXN0ZW4oc3RvcmUsIHt1cmw6ICcvYXBpJ30pO1xuXHRzaG9ydGN1dHMoc3RvcmUpO1xuXG5cdHJldHVybiBzdG9yZTtcbn1cblxuZnVuY3Rpb24gaHlkcmF0ZWFibGUocmVkdWNlcikge1xuXHRyZXR1cm4gKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlICdAQEFQUExZX1NUQVRFJzpcblx0XHRcdFx0cmV0dXJuIHJlZHVjZXIoYWN0aW9uLnBheWxvYWQsIGFjdGlvbik7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGxpc3RlbihzdG9yZSwgb3B0aW9ucykge1xuXHRzdG9yZS5kaXNwYXRjaChhY3Rpb25zLmxpc3Rlbih7dXJsOiBvcHRpb25zLnVybH0pKTtcbn1cbiJdfQ==