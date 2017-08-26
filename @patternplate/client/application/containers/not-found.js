'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _documentation = require('../components/documentation');

var _documentation2 = _interopRequireDefault(_documentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		base: state.base,
		id: state.id,
		docs: {
			contents: selectNotFound(state)
		}
	};
})(_documentation2.default);


function selectNotFound(state) {
	var url = state.routing.locationBeforeTransitions.pathname;
	return '\n# Nothing found\n\n> Pretty sure these aren\'t the hypertext documents you are looking for.\n\nWe looked everywhere and could not find a single thing at `' + url + '`.\n\nYou might want to navigate back to [Home](/) or use the search.\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate)\n';
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL25vdC1mb3VuZC5qcyJdLCJuYW1lcyI6WyJiYXNlIiwic3RhdGUiLCJpZCIsImRvY3MiLCJjb250ZW50cyIsInNlbGVjdE5vdEZvdW5kIiwidXJsIiwicm91dGluZyIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztrQkFFZSx5QkFBUSxpQkFBUztBQUMvQixRQUFPO0FBQ05BLFFBQU1DLE1BQU1ELElBRE47QUFFTkUsTUFBSUQsTUFBTUMsRUFGSjtBQUdOQyxRQUFNO0FBQ0xDLGFBQVVDLGVBQWVKLEtBQWY7QUFETDtBQUhBLEVBQVA7QUFPQSxDQVJjLDBCOzs7QUFVZixTQUFTSSxjQUFULENBQXdCSixLQUF4QixFQUErQjtBQUM5QixLQUFNSyxNQUFNTCxNQUFNTSxPQUFOLENBQWNDLHlCQUFkLENBQXdDQyxRQUFwRDtBQUNBLHlLQUs2REgsR0FMN0Q7QUFhQSIsImZpbGUiOiJub3QtZm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBEb2N1bWVudGF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZG9jdW1lbnRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGJhc2U6IHN0YXRlLmJhc2UsXG5cdFx0aWQ6IHN0YXRlLmlkLFxuXHRcdGRvY3M6IHtcblx0XHRcdGNvbnRlbnRzOiBzZWxlY3ROb3RGb3VuZChzdGF0ZSlcblx0XHR9XG5cdH07XG59KShEb2N1bWVudGF0aW9uKTtcblxuZnVuY3Rpb24gc2VsZWN0Tm90Rm91bmQoc3RhdGUpIHtcblx0Y29uc3QgdXJsID0gc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLnBhdGhuYW1lO1xuXHRyZXR1cm4gYFxuIyBOb3RoaW5nIGZvdW5kXG5cbj4gUHJldHR5IHN1cmUgdGhlc2UgYXJlbid0IHRoZSBoeXBlcnRleHQgZG9jdW1lbnRzIHlvdSBhcmUgbG9va2luZyBmb3IuXG5cbldlIGxvb2tlZCBldmVyeXdoZXJlIGFuZCBjb3VsZCBub3QgZmluZCBhIHNpbmdsZSB0aGluZyBhdCBcXGAke3VybH1cXGAuXG5cbllvdSBtaWdodCB3YW50IHRvIG5hdmlnYXRlIGJhY2sgdG8gW0hvbWVdKC8pIG9yIHVzZSB0aGUgc2VhcmNoLlxuXG4tLS1cblxuSGVscCB1cyB0byBtYWtlIHRoaXMgbWVzc2FnZSBtb3JlIGhlbHBmdWwgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL3Npbm5lcnNjaHJhZGVyL3BhdHRlcm5wbGF0ZSlcbmA7XG59XG4iXX0=