'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _reduxActions = require('redux-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (action) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	(0, _assert2.default)(typeof action === 'function', 'toggle needs an action to create a handler for, received ' + action + ' of type ' + (typeof action === 'undefined' ? 'undefined' : (0, _typeof3.default)(action)));

	return (0, _reduxActions.handleActions)({
		'@@router/LOCATION_CHANGE': function routerLOCATION_CHANGE(_, _ref) {
			var payload = _ref.payload;

			if (!(action.key in payload.query)) {
				return options.defaultValue;
			}
			return payload.query[action.key] === 'true';
		}
	}, options.defaultValue);
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy90b2dnbGUuanMiXSwibmFtZXMiOlsiYWN0aW9uIiwib3B0aW9ucyIsIl8iLCJwYXlsb2FkIiwia2V5IiwicXVlcnkiLCJkZWZhdWx0VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O2tCQUVlLFVBQUNBLE1BQUQsRUFBMEI7QUFBQSxLQUFqQkMsT0FBaUIsdUVBQVAsRUFBTzs7QUFDeEMsdUJBQU8sT0FBT0QsTUFBUCxLQUFrQixVQUF6QixnRUFBaUdBLE1BQWpHLHlCQUEwSEEsTUFBMUgsdURBQTBIQSxNQUExSDs7QUFFQSxRQUFPLGlDQUFjO0FBQ3BCLDhCQUE0QiwrQkFBQ0UsQ0FBRCxRQUFrQjtBQUFBLE9BQWJDLE9BQWEsUUFBYkEsT0FBYTs7QUFDN0MsT0FBSSxFQUFFSCxPQUFPSSxHQUFQLElBQWNELFFBQVFFLEtBQXhCLENBQUosRUFBb0M7QUFDbkMsV0FBT0osUUFBUUssWUFBZjtBQUNBO0FBQ0QsVUFBT0gsUUFBUUUsS0FBUixDQUFjTCxPQUFPSSxHQUFyQixNQUE4QixNQUFyQztBQUNBO0FBTm1CLEVBQWQsRUFPSkgsUUFBUUssWUFQSixDQUFQO0FBUUEsQyIsImZpbGUiOiJ0b2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQge2hhbmRsZUFjdGlvbnN9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9uLCBvcHRpb25zID0ge30pID0+IHtcblx0YXNzZXJ0KHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicsIGB0b2dnbGUgbmVlZHMgYW4gYWN0aW9uIHRvIGNyZWF0ZSBhIGhhbmRsZXIgZm9yLCByZWNlaXZlZCAke2FjdGlvbn0gb2YgdHlwZSAke3R5cGVvZiBhY3Rpb259YCk7XG5cblx0cmV0dXJuIGhhbmRsZUFjdGlvbnMoe1xuXHRcdCdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnOiAoXywge3BheWxvYWR9KSA9PiB7XG5cdFx0XHRpZiAoIShhY3Rpb24ua2V5IGluIHBheWxvYWQucXVlcnkpKSB7XG5cdFx0XHRcdHJldHVybiBvcHRpb25zLmRlZmF1bHRWYWx1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwYXlsb2FkLnF1ZXJ5W2FjdGlvbi5rZXldID09PSAndHJ1ZSc7XG5cdFx0fVxuXHR9LCBvcHRpb25zLmRlZmF1bHRWYWx1ZSk7XG59O1xuIl19