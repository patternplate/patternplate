'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = openFullscreen;
var type = exports.type = 'OPEN_FULLSCREEN';

function openFullscreen() {
	return function (dispatch, getState) {
		var _getState = getState(),
		    base = _getState.base,
		    id = _getState.id,
		    environment = _getState.environment;

		if (id === '..' || !global.open) {
			return;
		}

		var href = _urlQuery2.default.format({
			pathname: base + 'demo/' + id + '/index.html',
			query: { environment: environment }
		});

		global.open(href, '_blank');
	};
}

openFullscreen.key = '';
openFullscreen.property = '';
openFullscreen.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL29wZW4tZnVsbHNjcmVlbi5qcyJdLCJuYW1lcyI6WyJvcGVuRnVsbHNjcmVlbiIsInR5cGUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiYmFzZSIsImlkIiwiZW52aXJvbm1lbnQiLCJnbG9iYWwiLCJvcGVuIiwiaHJlZiIsImZvcm1hdCIsInBhdGhuYW1lIiwicXVlcnkiLCJrZXkiLCJwcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7a0JBRWVBLGM7QUFDUixJQUFNQyxzQkFBTyxpQkFBYjs7QUFFUCxTQUFTRCxjQUFULEdBQTBCO0FBQ3pCLFFBQU8sVUFBQ0UsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQUEsa0JBQ0VBLFVBREY7QUFBQSxNQUN2QkMsSUFEdUIsYUFDdkJBLElBRHVCO0FBQUEsTUFDakJDLEVBRGlCLGFBQ2pCQSxFQURpQjtBQUFBLE1BQ2JDLFdBRGEsYUFDYkEsV0FEYTs7QUFFOUIsTUFBSUQsT0FBTyxJQUFQLElBQWUsQ0FBQ0UsT0FBT0MsSUFBM0IsRUFBaUM7QUFDaEM7QUFDQTs7QUFFRCxNQUFNQyxPQUFPLG1CQUFTQyxNQUFULENBQWdCO0FBQzVCQyxhQUFhUCxJQUFiLGFBQXlCQyxFQUF6QixnQkFENEI7QUFFNUJPLFVBQU8sRUFBQ04sd0JBQUQ7QUFGcUIsR0FBaEIsQ0FBYjs7QUFLQUMsU0FBT0MsSUFBUCxDQUFZQyxJQUFaLEVBQWtCLFFBQWxCO0FBQ0EsRUFaRDtBQWFBOztBQUVEVCxlQUFlYSxHQUFmLEdBQXFCLEVBQXJCO0FBQ0FiLGVBQWVjLFFBQWYsR0FBMEIsRUFBMUI7QUFDQWQsZUFBZUMsSUFBZixHQUFzQkEsSUFBdEIiLCJmaWxlIjoib3Blbi1mdWxsc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVybFF1ZXJ5IGZyb20gJy4uL3V0aWxzL3VybC1xdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IG9wZW5GdWxsc2NyZWVuO1xuZXhwb3J0IGNvbnN0IHR5cGUgPSAnT1BFTl9GVUxMU0NSRUVOJztcblxuZnVuY3Rpb24gb3BlbkZ1bGxzY3JlZW4oKSB7XG5cdHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG5cdFx0Y29uc3Qge2Jhc2UsIGlkLCBlbnZpcm9ubWVudH0gPSBnZXRTdGF0ZSgpO1xuXHRcdGlmIChpZCA9PT0gJy4uJyB8fCAhZ2xvYmFsLm9wZW4pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmID0gdXJsUXVlcnkuZm9ybWF0KHtcblx0XHRcdHBhdGhuYW1lOiBgJHtiYXNlfWRlbW8vJHtpZH0vaW5kZXguaHRtbGAsXG5cdFx0XHRxdWVyeToge2Vudmlyb25tZW50fVxuXHRcdH0pO1xuXG5cdFx0Z2xvYmFsLm9wZW4oaHJlZiwgJ19ibGFuaycpO1xuXHR9O1xufVxuXG5vcGVuRnVsbHNjcmVlbi5rZXkgPSAnJztcbm9wZW5GdWxsc2NyZWVuLnByb3BlcnR5ID0gJyc7XG5vcGVuRnVsbHNjcmVlbi50eXBlID0gdHlwZTtcbiJdfQ==