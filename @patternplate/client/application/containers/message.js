'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _behaviours = require('../behaviours');

var _message = require('../components/message');

var _message2 = _interopRequireDefault(_message);

var _demo = require('../selectors/demo');

var demo = _interopRequireWildcard(_demo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapState)((0, _behaviours.skippable)(_message2.default));


var selectMessage = (0, _reselect.createSelector)(function (state) {
	return state.messages;
}, demo.selectSrc, function (messages, src) {
	return messages[src];
});

var selectActive = (0, _reselect.createSelector)(selectMessage, function (message) {
	return typeof message === 'string';
});

function mapState(state) {
	return {
		active: selectActive(state),
		message: selectMessage(state)
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL21lc3NhZ2UuanMiXSwibmFtZXMiOlsiZGVtbyIsIm1hcFN0YXRlIiwic2VsZWN0TWVzc2FnZSIsInN0YXRlIiwibWVzc2FnZXMiLCJzZWxlY3RTcmMiLCJzcmMiLCJzZWxlY3RBY3RpdmUiLCJtZXNzYWdlIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOztJQUFZQSxJOzs7Ozs7a0JBRUcseUJBQVFDLFFBQVIsRUFBa0IsNkNBQWxCLEM7OztBQUVmLElBQU1DLGdCQUFnQiw4QkFDckI7QUFBQSxRQUFTQyxNQUFNQyxRQUFmO0FBQUEsQ0FEcUIsRUFFckJKLEtBQUtLLFNBRmdCLEVBR3JCLFVBQUNELFFBQUQsRUFBV0UsR0FBWDtBQUFBLFFBQW1CRixTQUFTRSxHQUFULENBQW5CO0FBQUEsQ0FIcUIsQ0FBdEI7O0FBTUEsSUFBTUMsZUFBZSw4QkFDcEJMLGFBRG9CLEVBRXBCO0FBQUEsUUFBVyxPQUFPTSxPQUFQLEtBQW1CLFFBQTlCO0FBQUEsQ0FGb0IsQ0FBckI7O0FBS0EsU0FBU1AsUUFBVCxDQUFrQkUsS0FBbEIsRUFBeUI7QUFDeEIsUUFBTztBQUNOTSxVQUFRRixhQUFhSixLQUFiLENBREY7QUFFTkssV0FBU04sY0FBY0MsS0FBZDtBQUZILEVBQVA7QUFJQSIsImZpbGUiOiJtZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge3NraXBwYWJsZX0gZnJvbSAnLi4vYmVoYXZpb3Vycyc7XG5cbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvbWVzc2FnZSc7XG5pbXBvcnQgKiBhcyBkZW1vIGZyb20gJy4uL3NlbGVjdG9ycy9kZW1vJztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSkoc2tpcHBhYmxlKE1lc3NhZ2UpKTtcblxuY29uc3Qgc2VsZWN0TWVzc2FnZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRzdGF0ZSA9PiBzdGF0ZS5tZXNzYWdlcyxcblx0ZGVtby5zZWxlY3RTcmMsXG5cdChtZXNzYWdlcywgc3JjKSA9PiBtZXNzYWdlc1tzcmNdXG4pO1xuXG5jb25zdCBzZWxlY3RBY3RpdmUgPSBjcmVhdGVTZWxlY3Rvcihcblx0c2VsZWN0TWVzc2FnZSxcblx0bWVzc2FnZSA9PiB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZydcbik7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0YWN0aXZlOiBzZWxlY3RBY3RpdmUoc3RhdGUpLFxuXHRcdG1lc3NhZ2U6IHNlbGVjdE1lc3NhZ2Uoc3RhdGUpXG5cdH07XG59XG4iXX0=