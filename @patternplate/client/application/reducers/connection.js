'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _handleDependentActions = require('../actions/handle-dependent-actions');

var _handleDependentActions2 = _interopRequireDefault(_handleDependentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BEATS = [];

exports.default = (0, _handleDependentActions2.default)({
	LISTEN_HEARTBEAT: function LISTEN_HEARTBEAT() {
		return handle.apply(undefined, arguments);
	},
	FETCHING: function FETCHING() {
		return handle.apply(undefined, arguments);
	},
	ERROR_HEARTBEAT: function ERROR_HEARTBEAT() {
		BEATS = [];
		return 'error';
	}
}, {
	defaultValue: '',
	dependencies: ['fetching']
});


function handle() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'loading';
	var action = arguments[1];
	var _ref = arguments[2];
	var fetching = _ref.fetching;

	if (fetching) {
		return 'loading';
	}

	var count = beat(action.payload);

	if (count === 0) {
		return '';
	}

	if (count === 3) {
		return 'loaded';
	}

	return 'loading';
}

function beat(add) {
	BEATS = [BEATS[BEATS.length - 2], BEATS[BEATS.length - 1], add].filter(Boolean);
	return BEATS.length;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbIkJFQVRTIiwiTElTVEVOX0hFQVJUQkVBVCIsImhhbmRsZSIsIkZFVENISU5HIiwiRVJST1JfSEVBUlRCRUFUIiwiZGVmYXVsdFZhbHVlIiwiZGVwZW5kZW5jaWVzIiwic3RhdGUiLCJhY3Rpb24iLCJmZXRjaGluZyIsImNvdW50IiwiYmVhdCIsInBheWxvYWQiLCJhZGQiLCJsZW5ndGgiLCJmaWx0ZXIiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBSUEsUUFBUSxFQUFaOztrQkFFZSxzQ0FBdUI7QUFDckNDLG1CQUFrQjtBQUFBLFNBQWFDLGtDQUFiO0FBQUEsRUFEbUI7QUFFckNDLFdBQVU7QUFBQSxTQUFhRCxrQ0FBYjtBQUFBLEVBRjJCO0FBR3JDRSxrQkFBaUIsMkJBQU07QUFDdEJKLFVBQVEsRUFBUjtBQUNBLFNBQU8sT0FBUDtBQUNBO0FBTm9DLENBQXZCLEVBT1o7QUFDRkssZUFBYyxFQURaO0FBRUZDLGVBQWMsQ0FBQyxVQUFEO0FBRlosQ0FQWSxDOzs7QUFZZixTQUFTSixNQUFULEdBQXVEO0FBQUEsS0FBdkNLLEtBQXVDLHVFQUEvQixTQUErQjtBQUFBLEtBQXBCQyxNQUFvQjtBQUFBO0FBQUEsS0FBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUN0RCxLQUFJQSxRQUFKLEVBQWM7QUFDYixTQUFPLFNBQVA7QUFDQTs7QUFFRCxLQUFNQyxRQUFRQyxLQUFLSCxPQUFPSSxPQUFaLENBQWQ7O0FBRUEsS0FBSUYsVUFBVSxDQUFkLEVBQWlCO0FBQ2hCLFNBQU8sRUFBUDtBQUNBOztBQUVELEtBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNoQixTQUFPLFFBQVA7QUFDQTs7QUFFRCxRQUFPLFNBQVA7QUFDQTs7QUFFRCxTQUFTQyxJQUFULENBQWNFLEdBQWQsRUFBbUI7QUFDbEJiLFNBQVEsQ0FBQ0EsTUFBTUEsTUFBTWMsTUFBTixHQUFlLENBQXJCLENBQUQsRUFBMEJkLE1BQU1BLE1BQU1jLE1BQU4sR0FBZSxDQUFyQixDQUExQixFQUFtREQsR0FBbkQsRUFBd0RFLE1BQXhELENBQStEQyxPQUEvRCxDQUFSO0FBQ0EsUUFBT2hCLE1BQU1jLE1BQWI7QUFDQSIsImZpbGUiOiJjb25uZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhbmRsZURlcGVuZGVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9oYW5kbGUtZGVwZW5kZW50LWFjdGlvbnMnO1xubGV0IEJFQVRTID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZURlcGVuZGVudEFjdGlvbnMoe1xuXHRMSVNURU5fSEVBUlRCRUFUOiAoLi4uYXJncykgPT4gaGFuZGxlKC4uLmFyZ3MpLFxuXHRGRVRDSElORzogKC4uLmFyZ3MpID0+IGhhbmRsZSguLi5hcmdzKSxcblx0RVJST1JfSEVBUlRCRUFUOiAoKSA9PiB7XG5cdFx0QkVBVFMgPSBbXTtcblx0XHRyZXR1cm4gJ2Vycm9yJztcblx0fVxufSwge1xuXHRkZWZhdWx0VmFsdWU6ICcnLFxuXHRkZXBlbmRlbmNpZXM6IFsnZmV0Y2hpbmcnXVxufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZShzdGF0ZSA9ICdsb2FkaW5nJywgYWN0aW9uLCB7ZmV0Y2hpbmd9KSB7XG5cdGlmIChmZXRjaGluZykge1xuXHRcdHJldHVybiAnbG9hZGluZyc7XG5cdH1cblxuXHRjb25zdCBjb3VudCA9IGJlYXQoYWN0aW9uLnBheWxvYWQpO1xuXG5cdGlmIChjb3VudCA9PT0gMCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmIChjb3VudCA9PT0gMykge1xuXHRcdHJldHVybiAnbG9hZGVkJztcblx0fVxuXG5cdHJldHVybiAnbG9hZGluZyc7XG59XG5cbmZ1bmN0aW9uIGJlYXQoYWRkKSB7XG5cdEJFQVRTID0gW0JFQVRTW0JFQVRTLmxlbmd0aCAtIDJdLCBCRUFUU1tCRUFUUy5sZW5ndGggLSAxXSwgYWRkXS5maWx0ZXIoQm9vbGVhbik7XG5cdHJldHVybiBCRUFUUy5sZW5ndGg7XG59XG4iXX0=