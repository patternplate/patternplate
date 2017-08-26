'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case 'LOAD_PATTERN_DEMO_SUCCESS':
			if (action.payload.id in state) {
				return (0, _lodash.omit)(state, action.payload.id);
			}
			return state;
		case 'LOAD_PATTERN_DEMO_ERROR':
			return (0, _lodash.merge)({}, state, (0, _defineProperty3.default)({}, action.payload.id, action.payload.error));
		default:
			return state;
	}
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9tZXNzYWdlcy5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O2tCQUVlLFlBQXdCO0FBQUEsS0FBdkJBLEtBQXVCLHVFQUFmLEVBQWU7QUFBQSxLQUFYQyxNQUFXOztBQUN0QyxTQUFRQSxPQUFPQyxJQUFmO0FBQ0MsT0FBSywyQkFBTDtBQUNDLE9BQUlELE9BQU9FLE9BQVAsQ0FBZUMsRUFBZixJQUFxQkosS0FBekIsRUFBZ0M7QUFDL0IsV0FBTyxrQkFBS0EsS0FBTCxFQUFZQyxPQUFPRSxPQUFQLENBQWVDLEVBQTNCLENBQVA7QUFDQTtBQUNELFVBQU9KLEtBQVA7QUFDRCxPQUFLLHlCQUFMO0FBQ0MsVUFBTyxtQkFBTSxFQUFOLEVBQVVBLEtBQVYsb0NBQW1CQyxPQUFPRSxPQUFQLENBQWVDLEVBQWxDLEVBQXVDSCxPQUFPRSxPQUFQLENBQWVFLEtBQXRELEVBQVA7QUFDRDtBQUNDLFVBQU9MLEtBQVA7QUFURjtBQVdBLEMiLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29taXQsIG1lcmdlfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdMT0FEX1BBVFRFUk5fREVNT19TVUNDRVNTJzpcblx0XHRcdGlmIChhY3Rpb24ucGF5bG9hZC5pZCBpbiBzdGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gb21pdChzdGF0ZSwgYWN0aW9uLnBheWxvYWQuaWQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdGNhc2UgJ0xPQURfUEFUVEVSTl9ERU1PX0VSUk9SJzpcblx0XHRcdHJldHVybiBtZXJnZSh7fSwgc3RhdGUsIHtbYWN0aW9uLnBheWxvYWQuaWRdOiBhY3Rpb24ucGF5bG9hZC5lcnJvcn0pO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn07XG4iXX0=