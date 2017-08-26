'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = demo;
var DEFAULT = {
	error: null,
	fetching: false,
	id: null,
	contents: null
};

function demo() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT;
	var action = arguments[1];

	switch (action.type) {
		case 'LOAD_PATTERN_DEMO_START':
			return {
				error: null,
				fetching: true,
				id: action.payload.id,
				contents: null
			};
		case 'LOAD_PATTERN_DEMO_SUCCESS':
			return {
				error: null,
				fetching: false,
				id: action.payload.id,
				contents: action.payload.contents
			};
		case 'LOAD_PATTERN_DEMO_ERROR':
		default:
			return state;
	}
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9kZW1vLmpzIl0sIm5hbWVzIjpbImRlbW8iLCJERUZBVUxUIiwiZXJyb3IiLCJmZXRjaGluZyIsImlkIiwiY29udGVudHMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFPd0JBLEk7QUFQeEIsSUFBTUMsVUFBVTtBQUNmQyxRQUFPLElBRFE7QUFFZkMsV0FBVSxLQUZLO0FBR2ZDLEtBQUksSUFIVztBQUlmQyxXQUFVO0FBSkssQ0FBaEI7O0FBT2UsU0FBU0wsSUFBVCxHQUF1QztBQUFBLEtBQXpCTSxLQUF5Qix1RUFBakJMLE9BQWlCO0FBQUEsS0FBUk0sTUFBUTs7QUFDckQsU0FBUUEsT0FBT0MsSUFBZjtBQUNDLE9BQUsseUJBQUw7QUFDQyxVQUFPO0FBQ05OLFdBQU8sSUFERDtBQUVOQyxjQUFVLElBRko7QUFHTkMsUUFBSUcsT0FBT0UsT0FBUCxDQUFlTCxFQUhiO0FBSU5DLGNBQVU7QUFKSixJQUFQO0FBTUQsT0FBSywyQkFBTDtBQUNDLFVBQU87QUFDTkgsV0FBTyxJQUREO0FBRU5DLGNBQVUsS0FGSjtBQUdOQyxRQUFJRyxPQUFPRSxPQUFQLENBQWVMLEVBSGI7QUFJTkMsY0FBVUUsT0FBT0UsT0FBUCxDQUFlSjtBQUpuQixJQUFQO0FBTUQsT0FBSyx5QkFBTDtBQUNBO0FBQ0MsVUFBT0MsS0FBUDtBQWpCRjtBQW1CQSIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVGQVVMVCA9IHtcblx0ZXJyb3I6IG51bGwsXG5cdGZldGNoaW5nOiBmYWxzZSxcblx0aWQ6IG51bGwsXG5cdGNvbnRlbnRzOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZW1vKHN0YXRlID0gREVGQVVMVCwgYWN0aW9uKSB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdMT0FEX1BBVFRFUk5fREVNT19TVEFSVCc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlcnJvcjogbnVsbCxcblx0XHRcdFx0ZmV0Y2hpbmc6IHRydWUsXG5cdFx0XHRcdGlkOiBhY3Rpb24ucGF5bG9hZC5pZCxcblx0XHRcdFx0Y29udGVudHM6IG51bGxcblx0XHRcdH07XG5cdFx0Y2FzZSAnTE9BRF9QQVRURVJOX0RFTU9fU1VDQ0VTUyc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRlcnJvcjogbnVsbCxcblx0XHRcdFx0ZmV0Y2hpbmc6IGZhbHNlLFxuXHRcdFx0XHRpZDogYWN0aW9uLnBheWxvYWQuaWQsXG5cdFx0XHRcdGNvbnRlbnRzOiBhY3Rpb24ucGF5bG9hZC5jb250ZW50c1xuXHRcdFx0fTtcblx0XHRjYXNlICdMT0FEX1BBVFRFUk5fREVNT19FUlJPUic6XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuIl19