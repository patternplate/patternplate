'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = resizeDemo;
var type = exports.type = 'RESIZE_DEMO';

function resizeDemo(payload) {
	return function (dispatch) {
		dispatch((0, _.patchLocation)({
			query: {
				width: payload.x,
				height: payload.y
			}
		}));
	};
}

resizeDemo.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3Jlc2l6ZS1kZW1vLmpzIl0sIm5hbWVzIjpbInJlc2l6ZURlbW8iLCJ0eXBlIiwicGF5bG9hZCIsImRpc3BhdGNoIiwicXVlcnkiLCJ3aWR0aCIsIngiLCJoZWlnaHQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O2tCQUVlQSxVO0FBQ1IsSUFBTUMsc0JBQU8sYUFBYjs7QUFFUCxTQUFTRCxVQUFULENBQW9CRSxPQUFwQixFQUE2QjtBQUM1QixRQUFPLG9CQUFZO0FBQ2xCQyxXQUFTLHFCQUFjO0FBQ3RCQyxVQUFPO0FBQ05DLFdBQU9ILFFBQVFJLENBRFQ7QUFFTkMsWUFBUUwsUUFBUU07QUFGVjtBQURlLEdBQWQsQ0FBVDtBQU1BLEVBUEQ7QUFRQTs7QUFFRFIsV0FBV0MsSUFBWCxHQUFrQkEsSUFBbEIiLCJmaWxlIjoicmVzaXplLWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhdGNoTG9jYXRpb259IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplRGVtbztcbmV4cG9ydCBjb25zdCB0eXBlID0gJ1JFU0laRV9ERU1PJztcblxuZnVuY3Rpb24gcmVzaXplRGVtbyhwYXlsb2FkKSB7XG5cdHJldHVybiBkaXNwYXRjaCA9PiB7XG5cdFx0ZGlzcGF0Y2gocGF0Y2hMb2NhdGlvbih7XG5cdFx0XHRxdWVyeToge1xuXHRcdFx0XHR3aWR0aDogcGF5bG9hZC54LFxuXHRcdFx0XHRoZWlnaHQ6IHBheWxvYWQueVxuXHRcdFx0fVxuXHRcdH0pKTtcblx0fTtcbn1cblxucmVzaXplRGVtby50eXBlID0gdHlwZTtcbiJdfQ==