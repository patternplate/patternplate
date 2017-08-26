'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = toggleTheme;
var type = exports.type = 'TOGGLE_THEME';

function toggleTheme(forced) {
	return function (dispatch, getState) {
		var theme = forced ? forced : getState().theme === 'dark' ? 'light' : 'dark';
		dispatch((0, _.patchLocation)({
			query: {
				theme: theme
			}
		}));
	};
}

toggleTheme.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3RvZ2dsZS10aGVtZS5qcyJdLCJuYW1lcyI6WyJ0b2dnbGVUaGVtZSIsInR5cGUiLCJmb3JjZWQiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwidGhlbWUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztrQkFFZUEsVztBQUNSLElBQU1DLHNCQUFPLGNBQWI7O0FBRVAsU0FBU0QsV0FBVCxDQUFxQkUsTUFBckIsRUFBNkI7QUFDNUIsUUFBTyxVQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDOUIsTUFBTUMsUUFBUUgsU0FBU0EsTUFBVCxHQUFrQkUsV0FBV0MsS0FBWCxLQUFxQixNQUFyQixHQUE4QixPQUE5QixHQUF3QyxNQUF4RTtBQUNBRixXQUFTLHFCQUFjO0FBQ3RCRyxVQUFPO0FBQ05EO0FBRE07QUFEZSxHQUFkLENBQVQ7QUFLQSxFQVBEO0FBUUE7O0FBRURMLFlBQVlDLElBQVosR0FBbUJBLElBQW5CIiwiZmlsZSI6InRvZ2dsZS10aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGF0Y2hMb2NhdGlvbn0gZnJvbSAnLi8nO1xuXG5leHBvcnQgZGVmYXVsdCB0b2dnbGVUaGVtZTtcbmV4cG9ydCBjb25zdCB0eXBlID0gJ1RPR0dMRV9USEVNRSc7XG5cbmZ1bmN0aW9uIHRvZ2dsZVRoZW1lKGZvcmNlZCkge1xuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuXHRcdGNvbnN0IHRoZW1lID0gZm9yY2VkID8gZm9yY2VkIDogZ2V0U3RhdGUoKS50aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJztcblx0XHRkaXNwYXRjaChwYXRjaExvY2F0aW9uKHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdHRoZW1lXG5cdFx0XHR9XG5cdFx0fSkpO1xuXHR9O1xufVxuXG50b2dnbGVUaGVtZS50eXBlID0gdHlwZTtcbiJdfQ==