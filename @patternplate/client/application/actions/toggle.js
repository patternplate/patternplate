'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.toggle = toggle;

var _lodash = require('lodash');

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toggle(key) {
	var property = (0, _lodash.camelCase)(key);

	var fn = function fn() {
		var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return function (dispatch, getState) {
			var next = 'forced' in payload ? payload.forced : !getState()[property];
			dispatch((0, _.patchLocation)({ query: (0, _defineProperty3.default)({}, key, next) }));
		};
	};

	fn.type = 'TOGGLE_' + (0, _lodash.snakeCase)(key).toUpperCase();
	fn.property = property;
	fn.key = key;
	return fn;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3RvZ2dsZS5qcyJdLCJuYW1lcyI6WyJ0b2dnbGUiLCJrZXkiLCJwcm9wZXJ0eSIsImZuIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiZm9yY2VkIiwicXVlcnkiLCJ0eXBlIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7UUFHZ0JBLE0sR0FBQUEsTTs7QUFIaEI7O0FBQ0E7Ozs7QUFFTyxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUMzQixLQUFNQyxXQUFXLHVCQUFVRCxHQUFWLENBQWpCOztBQUVBLEtBQU1FLEtBQUssU0FBTEEsRUFBSyxHQUFrQjtBQUFBLE1BQWpCQyxPQUFpQix1RUFBUCxFQUFPOztBQUM1QixTQUFPLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUM5QixPQUFNQyxPQUFRLFlBQVlILE9BQWIsR0FBd0JBLFFBQVFJLE1BQWhDLEdBQXlDLENBQUNGLFdBQVdKLFFBQVgsQ0FBdkQ7QUFDQUcsWUFBUyxxQkFBYyxFQUFDSSx5Q0FBU1IsR0FBVCxFQUFlTSxJQUFmLENBQUQsRUFBZCxDQUFUO0FBQ0EsR0FIRDtBQUlBLEVBTEQ7O0FBT0FKLElBQUdPLElBQUgsZUFBb0IsdUJBQVVULEdBQVYsRUFBZVUsV0FBZixFQUFwQjtBQUNBUixJQUFHRCxRQUFILEdBQWNBLFFBQWQ7QUFDQUMsSUFBR0YsR0FBSCxHQUFTQSxHQUFUO0FBQ0EsUUFBT0UsRUFBUDtBQUNBIiwiZmlsZSI6InRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2FtZWxDYXNlLCBzbmFrZUNhc2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge3BhdGNoTG9jYXRpb259IGZyb20gJy4vJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShrZXkpIHtcblx0Y29uc3QgcHJvcGVydHkgPSBjYW1lbENhc2Uoa2V5KTtcblxuXHRjb25zdCBmbiA9IChwYXlsb2FkID0ge30pID0+IHtcblx0XHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuXHRcdFx0Y29uc3QgbmV4dCA9ICgnZm9yY2VkJyBpbiBwYXlsb2FkKSA/IHBheWxvYWQuZm9yY2VkIDogIWdldFN0YXRlKClbcHJvcGVydHldO1xuXHRcdFx0ZGlzcGF0Y2gocGF0Y2hMb2NhdGlvbih7cXVlcnk6IHtba2V5XTogbmV4dH19KSk7XG5cdFx0fTtcblx0fTtcblxuXHRmbi50eXBlID0gYFRPR0dMRV8ke3NuYWtlQ2FzZShrZXkpLnRvVXBwZXJDYXNlKCl9YDtcblx0Zm4ucHJvcGVydHkgPSBwcm9wZXJ0eTtcblx0Zm4ua2V5ID0ga2V5O1xuXHRyZXR1cm4gZm47XG59XG4iXX0=