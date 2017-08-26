'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = composeReducers;

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function composeReducers() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var required = args.reduce(function (registry, arg) {
		var amend = arg.dependencies || [];
		return [].concat((0, _toConsumableArray3.default)(registry), (0, _toConsumableArray3.default)(amend));
	}, []);

	var reducer = function reducer(state, action, dependencies) {
		return args.reduce(function (state, arg) {
			return arg(state, action, (0, _lodash.pick)(dependencies, arg.dependencies || []));
		}, state);
	};

	reducer.dependencies = required;
	return reducer;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9jb21wb3NlLXJlZHVjZXJzLmpzIl0sIm5hbWVzIjpbImNvbXBvc2VSZWR1Y2VycyIsImFyZ3MiLCJyZXF1aXJlZCIsInJlZHVjZSIsInJlZ2lzdHJ5IiwiYXJnIiwiYW1lbmQiLCJkZXBlbmRlbmNpZXMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBRXdCQSxlOztBQUZ4Qjs7OztBQUVlLFNBQVNBLGVBQVQsR0FBa0M7QUFBQSxtQ0FBTkMsSUFBTTtBQUFOQSxNQUFNO0FBQUE7O0FBQ2hELEtBQU1DLFdBQVdELEtBQUtFLE1BQUwsQ0FBWSxVQUFDQyxRQUFELEVBQVdDLEdBQVgsRUFBbUI7QUFDL0MsTUFBTUMsUUFBUUQsSUFBSUUsWUFBSixJQUFvQixFQUFsQztBQUNBLG9EQUFXSCxRQUFYLG9DQUF3QkUsS0FBeEI7QUFDQSxFQUhnQixFQUdkLEVBSGMsQ0FBakI7O0FBS0EsS0FBTUUsVUFBVSxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkgsWUFBaEIsRUFBaUM7QUFDaEQsU0FBT04sS0FBS0UsTUFBTCxDQUFZLFVBQUNNLEtBQUQsRUFBUUosR0FBUixFQUFnQjtBQUNsQyxVQUFPQSxJQUFJSSxLQUFKLEVBQVdDLE1BQVgsRUFBbUIsa0JBQUtILFlBQUwsRUFBbUJGLElBQUlFLFlBQUosSUFBb0IsRUFBdkMsQ0FBbkIsQ0FBUDtBQUNBLEdBRk0sRUFFSkUsS0FGSSxDQUFQO0FBR0EsRUFKRDs7QUFNQUQsU0FBUUQsWUFBUixHQUF1QkwsUUFBdkI7QUFDQSxRQUFPTSxPQUFQO0FBQ0EiLCJmaWxlIjoiY29tcG9zZS1yZWR1Y2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGlja30gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZVJlZHVjZXJzKC4uLmFyZ3MpIHtcblx0Y29uc3QgcmVxdWlyZWQgPSBhcmdzLnJlZHVjZSgocmVnaXN0cnksIGFyZykgPT4ge1xuXHRcdGNvbnN0IGFtZW5kID0gYXJnLmRlcGVuZGVuY2llcyB8fCBbXTtcblx0XHRyZXR1cm4gWy4uLnJlZ2lzdHJ5LCAuLi5hbWVuZF07XG5cdH0sIFtdKTtcblxuXHRjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24sIGRlcGVuZGVuY2llcykgPT4ge1xuXHRcdHJldHVybiBhcmdzLnJlZHVjZSgoc3RhdGUsIGFyZykgPT4ge1xuXHRcdFx0cmV0dXJuIGFyZyhzdGF0ZSwgYWN0aW9uLCBwaWNrKGRlcGVuZGVuY2llcywgYXJnLmRlcGVuZGVuY2llcyB8fCBbXSkpO1xuXHRcdH0sIHN0YXRlKTtcblx0fTtcblxuXHRyZWR1Y2VyLmRlcGVuZGVuY2llcyA9IHJlcXVpcmVkO1xuXHRyZXR1cm4gcmVkdWNlcjtcbn1cbiJdfQ==