'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _reduxActions = require('redux-actions');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = handleDependentActions;


function partialReduce(deps) {
	return function (handlers) {
		return (0, _entries2.default)(handlers).reduce(function (registry, entry) {
			var _entry = (0, _slicedToArray3.default)(entry, 2),
			    name = _entry[0],
			    fn = _entry[1];

			registry[name] = function (state, action) {
				return fn(state, action, deps);
			};
			return registry;
		}, {});
	};
}

function handleDependentActions(actionHandlers, options) {
	_assert2.default.ok(Array.isArray(options.dependencies), 'options.dependencies must be an array');

	var handler = function handler() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _args$ = args[2],
		    dependencies = _args$ === undefined ? {} : _args$;


		if ((0, _keys2.default)(dependencies).length > 0) {
			var missing = options.dependencies.filter(function (dependency) {
				return !(dependency in dependencies);
			});
			_assert2.default.ok(missing.length === 0, 'dependencies for ' + (0, _keys2.default)(actionHandlers).join(', ') + ' must be present in state. missing: ' + missing.join(',') + '. available: ' + (0, _keys2.default)(dependencies));
		}

		var deps = (0, _lodash.pick)(dependencies, options.dependencies);
		var handlers = partialReduce(deps)(actionHandlers);
		var reducer = (0, _reduxActions.handleActions)(handlers, options.defaultValue);
		return reducer.apply(undefined, args);
	};
	handler.dependencies = options.dependencies;
	return handler;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2hhbmRsZS1kZXBlbmRlbnQtYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJoYW5kbGVEZXBlbmRlbnRBY3Rpb25zIiwicGFydGlhbFJlZHVjZSIsImRlcHMiLCJoYW5kbGVycyIsInJlZHVjZSIsInJlZ2lzdHJ5IiwiZW50cnkiLCJuYW1lIiwiZm4iLCJzdGF0ZSIsImFjdGlvbiIsImFjdGlvbkhhbmRsZXJzIiwib3B0aW9ucyIsIm9rIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVwZW5kZW5jaWVzIiwiaGFuZGxlciIsImFyZ3MiLCJsZW5ndGgiLCJtaXNzaW5nIiwiZmlsdGVyIiwiZGVwZW5kZW5jeSIsImpvaW4iLCJyZWR1Y2VyIiwiZGVmYXVsdFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O2tCQUVlQSxzQjs7O0FBRWYsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDNUIsUUFBTyxvQkFBWTtBQUNsQixTQUFPLHVCQUFlQyxRQUFmLEVBQ0xDLE1BREssQ0FDRSxVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFBQSw2Q0FDVEEsS0FEUztBQUFBLE9BQ3JCQyxJQURxQjtBQUFBLE9BQ2ZDLEVBRGU7O0FBRTVCSCxZQUFTRSxJQUFULElBQWlCLFVBQUNFLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQyxXQUFPRixHQUFHQyxLQUFILEVBQVVDLE1BQVYsRUFBa0JSLElBQWxCLENBQVA7QUFDQSxJQUZEO0FBR0EsVUFBT0csUUFBUDtBQUNBLEdBUEssRUFPSCxFQVBHLENBQVA7QUFRQSxFQVREO0FBVUE7O0FBRUQsU0FBU0wsc0JBQVQsQ0FBZ0NXLGNBQWhDLEVBQWdEQyxPQUFoRCxFQUF5RDtBQUN4RCxrQkFBT0MsRUFBUCxDQUFVQyxNQUFNQyxPQUFOLENBQWNILFFBQVFJLFlBQXRCLENBQVYsRUFBK0MsdUNBQS9DOztBQUVBLEtBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFhO0FBQUEsb0NBQVRDLElBQVM7QUFBVEEsT0FBUztBQUFBOztBQUFBLGVBQ0lBLElBREo7QUFBQSxNQUNqQkYsWUFEaUIsMEJBQ0YsRUFERTs7O0FBRzVCLE1BQUksb0JBQVlBLFlBQVosRUFBMEJHLE1BQTFCLEdBQW1DLENBQXZDLEVBQTBDO0FBQ3pDLE9BQU1DLFVBQVVSLFFBQVFJLFlBQVIsQ0FBcUJLLE1BQXJCLENBQTRCO0FBQUEsV0FBYyxFQUFFQyxjQUFjTixZQUFoQixDQUFkO0FBQUEsSUFBNUIsQ0FBaEI7QUFDQSxvQkFBT0gsRUFBUCxDQUNDTyxRQUFRRCxNQUFSLEtBQW1CLENBRHBCLHdCQUVxQixvQkFBWVIsY0FBWixFQUE0QlksSUFBNUIsQ0FBaUMsSUFBakMsQ0FGckIsNENBRWtHSCxRQUFRRyxJQUFSLENBQWEsR0FBYixDQUZsRyxxQkFFbUksb0JBQVlQLFlBQVosQ0FGbkk7QUFJQTs7QUFFRCxNQUFNZCxPQUFPLGtCQUFLYyxZQUFMLEVBQW1CSixRQUFRSSxZQUEzQixDQUFiO0FBQ0EsTUFBTWIsV0FBV0YsY0FBY0MsSUFBZCxFQUFvQlMsY0FBcEIsQ0FBakI7QUFDQSxNQUFNYSxVQUFVLGlDQUFjckIsUUFBZCxFQUF3QlMsUUFBUWEsWUFBaEMsQ0FBaEI7QUFDQSxTQUFPRCx5QkFBV04sSUFBWCxDQUFQO0FBQ0EsRUFmRDtBQWdCQUQsU0FBUUQsWUFBUixHQUF1QkosUUFBUUksWUFBL0I7QUFDQSxRQUFPQyxPQUFQO0FBQ0EiLCJmaWxlIjoiaGFuZGxlLWRlcGVuZGVudC1hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHtoYW5kbGVBY3Rpb25zfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCB7cGlja30gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlRGVwZW5kZW50QWN0aW9ucztcblxuZnVuY3Rpb24gcGFydGlhbFJlZHVjZShkZXBzKSB7XG5cdHJldHVybiBoYW5kbGVycyA9PiB7XG5cdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKGhhbmRsZXJzKVxuXHRcdFx0LnJlZHVjZSgocmVnaXN0cnksIGVudHJ5KSA9PiB7XG5cdFx0XHRcdGNvbnN0IFtuYW1lLCBmbl0gPSBlbnRyeTtcblx0XHRcdFx0cmVnaXN0cnlbbmFtZV0gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBmbihzdGF0ZSwgYWN0aW9uLCBkZXBzKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0cmV0dXJuIHJlZ2lzdHJ5O1xuXHRcdFx0fSwge30pO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEZXBlbmRlbnRBY3Rpb25zKGFjdGlvbkhhbmRsZXJzLCBvcHRpb25zKSB7XG5cdGFzc2VydC5vayhBcnJheS5pc0FycmF5KG9wdGlvbnMuZGVwZW5kZW5jaWVzKSwgJ29wdGlvbnMuZGVwZW5kZW5jaWVzIG11c3QgYmUgYW4gYXJyYXknKTtcblxuXHRjb25zdCBoYW5kbGVyID0gKC4uLmFyZ3MpID0+IHtcblx0XHRjb25zdCBbLCAsIGRlcGVuZGVuY2llcyA9IHt9XSA9IGFyZ3M7XG5cblx0XHRpZiAoT2JqZWN0LmtleXMoZGVwZW5kZW5jaWVzKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBtaXNzaW5nID0gb3B0aW9ucy5kZXBlbmRlbmNpZXMuZmlsdGVyKGRlcGVuZGVuY3kgPT4gIShkZXBlbmRlbmN5IGluIGRlcGVuZGVuY2llcykpO1xuXHRcdFx0YXNzZXJ0Lm9rKFxuXHRcdFx0XHRtaXNzaW5nLmxlbmd0aCA9PT0gMCxcblx0XHRcdFx0YGRlcGVuZGVuY2llcyBmb3IgJHtPYmplY3Qua2V5cyhhY3Rpb25IYW5kbGVycykuam9pbignLCAnKX0gbXVzdCBiZSBwcmVzZW50IGluIHN0YXRlLiBtaXNzaW5nOiAke21pc3Npbmcuam9pbignLCcpfS4gYXZhaWxhYmxlOiAke09iamVjdC5rZXlzKGRlcGVuZGVuY2llcyl9YFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXBzID0gcGljayhkZXBlbmRlbmNpZXMsIG9wdGlvbnMuZGVwZW5kZW5jaWVzKTtcblx0XHRjb25zdCBoYW5kbGVycyA9IHBhcnRpYWxSZWR1Y2UoZGVwcykoYWN0aW9uSGFuZGxlcnMpO1xuXHRcdGNvbnN0IHJlZHVjZXIgPSBoYW5kbGVBY3Rpb25zKGhhbmRsZXJzLCBvcHRpb25zLmRlZmF1bHRWYWx1ZSk7XG5cdFx0cmV0dXJuIHJlZHVjZXIoLi4uYXJncyk7XG5cdH07XG5cdGhhbmRsZXIuZGVwZW5kZW5jaWVzID0gb3B0aW9ucy5kZXBlbmRlbmNpZXM7XG5cdHJldHVybiBoYW5kbGVyO1xufVxuIl19