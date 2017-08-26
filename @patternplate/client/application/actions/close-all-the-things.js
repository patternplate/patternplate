'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = closeAllTheThings;
var type = exports.type = 'CLOSE_ALL_THE_THINGS';

function closeAllTheThings() {
	return function (dispatch) {
		dispatch((0, _.dismissAllMessages)());
		dispatch((0, _.patchLocation)({
			query: {
				'issue': null,
				'lightbox': null,
				'menu-enabled': null,
				'search-enabled': null,
				'source': null,
				'source-expanded': null
			}
		}));
	};
}

closeAllTheThings.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL2Nsb3NlLWFsbC10aGUtdGhpbmdzLmpzIl0sIm5hbWVzIjpbImNsb3NlQWxsVGhlVGhpbmdzIiwidHlwZSIsImRpc3BhdGNoIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7a0JBRWVBLGlCO0FBQ1IsSUFBTUMsc0JBQU8sc0JBQWI7O0FBRVAsU0FBU0QsaUJBQVQsR0FBNkI7QUFDNUIsUUFBTyxvQkFBWTtBQUNsQkUsV0FBUywyQkFBVDtBQUNBQSxXQUFTLHFCQUFjO0FBQ3RCQyxVQUFPO0FBQ04sYUFBUyxJQURIO0FBRU4sZ0JBQVksSUFGTjtBQUdOLG9CQUFnQixJQUhWO0FBSU4sc0JBQWtCLElBSlo7QUFLTixjQUFVLElBTEo7QUFNTix1QkFBbUI7QUFOYjtBQURlLEdBQWQsQ0FBVDtBQVVBLEVBWkQ7QUFhQTs7QUFFREgsa0JBQWtCQyxJQUFsQixHQUF5QkEsSUFBekIiLCJmaWxlIjoiY2xvc2UtYWxsLXRoZS10aGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhdGNoTG9jYXRpb24sIGRpc21pc3NBbGxNZXNzYWdlc30gZnJvbSAnLi8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbG9zZUFsbFRoZVRoaW5ncztcbmV4cG9ydCBjb25zdCB0eXBlID0gJ0NMT1NFX0FMTF9USEVfVEhJTkdTJztcblxuZnVuY3Rpb24gY2xvc2VBbGxUaGVUaGluZ3MoKSB7XG5cdHJldHVybiBkaXNwYXRjaCA9PiB7XG5cdFx0ZGlzcGF0Y2goZGlzbWlzc0FsbE1lc3NhZ2VzKCkpO1xuXHRcdGRpc3BhdGNoKHBhdGNoTG9jYXRpb24oe1xuXHRcdFx0cXVlcnk6IHtcblx0XHRcdFx0J2lzc3VlJzogbnVsbCxcblx0XHRcdFx0J2xpZ2h0Ym94JzogbnVsbCxcblx0XHRcdFx0J21lbnUtZW5hYmxlZCc6IG51bGwsXG5cdFx0XHRcdCdzZWFyY2gtZW5hYmxlZCc6IG51bGwsXG5cdFx0XHRcdCdzb3VyY2UnOiBudWxsLFxuXHRcdFx0XHQnc291cmNlLWV4cGFuZGVkJzogbnVsbFxuXHRcdFx0fVxuXHRcdH0pKTtcblx0fTtcbn1cblxuY2xvc2VBbGxUaGVUaGluZ3MudHlwZSA9IHR5cGU7XG4iXX0=