'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = search;
var type = exports.type = 'SEARCH';

function search(payload) {
	return function (dispatch, getState) {
		var state = getState();

		dispatch({
			type: 'SET_SEARCH',
			payload: payload.value
		});

		(0, _raf2.default)(function () {
			if (payload.persist) {
				dispatch((0, _.patchLocation)({
					query: {
						'search': payload.value,
						'search-preview': state.search === payload.value ? state.searchPreview : 0
					}
				}));
			} else if (payload.perform) {
				dispatch({
					type: 'PERFORM_SEARCH',
					payload: payload.value
				});
			}
		});
	};
}

search.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJzZWFyY2giLCJ0eXBlIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsInZhbHVlIiwicGVyc2lzdCIsInF1ZXJ5Iiwic2VhcmNoUHJldmlldyIsInBlcmZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O2tCQUVlQSxNO0FBQ1IsSUFBTUMsc0JBQU8sUUFBYjs7QUFFUCxTQUFTRCxNQUFULENBQWdCRSxPQUFoQixFQUF5QjtBQUN4QixRQUFPLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUF3QjtBQUM5QixNQUFNQyxRQUFRRCxVQUFkOztBQUVBRCxXQUFTO0FBQ1JGLFNBQU0sWUFERTtBQUVSQyxZQUFTQSxRQUFRSTtBQUZULEdBQVQ7O0FBS0EscUJBQUksWUFBTTtBQUNULE9BQUlKLFFBQVFLLE9BQVosRUFBcUI7QUFDcEJKLGFBQVMscUJBQWM7QUFDdEJLLFlBQU87QUFDTixnQkFBVU4sUUFBUUksS0FEWjtBQUVOLHdCQUFrQkQsTUFBTUwsTUFBTixLQUFpQkUsUUFBUUksS0FBekIsR0FBaUNELE1BQU1JLGFBQXZDLEdBQXVEO0FBRm5FO0FBRGUsS0FBZCxDQUFUO0FBTUEsSUFQRCxNQU9PLElBQUlQLFFBQVFRLE9BQVosRUFBcUI7QUFDM0JQLGFBQVM7QUFDUkYsV0FBTSxnQkFERTtBQUVSQyxjQUFTQSxRQUFRSTtBQUZULEtBQVQ7QUFJQTtBQUNELEdBZEQ7QUFlQSxFQXZCRDtBQXdCQTs7QUFFRE4sT0FBT0MsSUFBUCxHQUFjQSxJQUFkIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCB7cGF0Y2hMb2NhdGlvbn0gZnJvbSAnLi8nO1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG5leHBvcnQgY29uc3QgdHlwZSA9ICdTRUFSQ0gnO1xuXG5mdW5jdGlvbiBzZWFyY2gocGF5bG9hZCkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuXHRcdGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcblxuXHRcdGRpc3BhdGNoKHtcblx0XHRcdHR5cGU6ICdTRVRfU0VBUkNIJyxcblx0XHRcdHBheWxvYWQ6IHBheWxvYWQudmFsdWVcblx0XHR9KTtcblxuXHRcdHJhZigoKSA9PiB7XG5cdFx0XHRpZiAocGF5bG9hZC5wZXJzaXN0KSB7XG5cdFx0XHRcdGRpc3BhdGNoKHBhdGNoTG9jYXRpb24oe1xuXHRcdFx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdFx0XHQnc2VhcmNoJzogcGF5bG9hZC52YWx1ZSxcblx0XHRcdFx0XHRcdCdzZWFyY2gtcHJldmlldyc6IHN0YXRlLnNlYXJjaCA9PT0gcGF5bG9hZC52YWx1ZSA/IHN0YXRlLnNlYXJjaFByZXZpZXcgOiAwXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdFx0XHR9IGVsc2UgaWYgKHBheWxvYWQucGVyZm9ybSkge1xuXHRcdFx0XHRkaXNwYXRjaCh7XG5cdFx0XHRcdFx0dHlwZTogJ1BFUkZPUk1fU0VBUkNIJyxcblx0XHRcdFx0XHRwYXlsb2FkOiBwYXlsb2FkLnZhbHVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xufVxuXG5zZWFyY2gudHlwZSA9IHR5cGU7XG4iXX0=