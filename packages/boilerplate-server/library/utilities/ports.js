'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _portscanner = require('portscanner');

class Ports {
	static test() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return new Promise(function fullfill(resolve, reject) {
			_portscanner.checkPortStatus.apply(undefined, [].concat(args, [function cb(error, result) {
				return resolve(result === 'closed');
			}]));
		});
	}

	static find() {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return new Promise(function fullfill(resolve, reject) {
			_portscanner.findAPortNotInUse.apply(undefined, [].concat(args, [function cb(error, result) {
				return resolve(result);
			}]));
		});
	}
}

exports.default = Ports;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9wb3J0cy5qcyJdLCJuYW1lcyI6WyJQb3J0cyIsInRlc3QiLCJhcmdzIiwiUHJvbWlzZSIsImZ1bGxmaWxsIiwicmVzb2x2ZSIsInJlamVjdCIsImNiIiwiZXJyb3IiLCJyZXN1bHQiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxLQUFOLENBQVk7QUFDWCxRQUFPQyxJQUFQLEdBQXdCO0FBQUEsb0NBQVBDLElBQU87QUFBUEEsT0FBTztBQUFBOztBQUN2QixTQUFPLElBQUlDLE9BQUosQ0FBYSxTQUFTQyxRQUFULENBQW9CQyxPQUFwQixFQUE2QkMsTUFBN0IsRUFBc0M7QUFDekQsMkRBQWNKLElBQWQsR0FBb0IsU0FBU0ssRUFBVCxDQUFjQyxLQUFkLEVBQXFCQyxNQUFyQixFQUE4QjtBQUNqRCxXQUFPSixRQUFTSSxXQUFXLFFBQXBCLENBQVA7QUFDQSxJQUZEO0FBR0EsR0FKTSxDQUFQO0FBS0E7O0FBRUQsUUFBT0MsSUFBUCxHQUF3QjtBQUFBLHFDQUFQUixJQUFPO0FBQVBBLE9BQU87QUFBQTs7QUFDdkIsU0FBTyxJQUFJQyxPQUFKLENBQWEsU0FBU0MsUUFBVCxDQUFvQkMsT0FBcEIsRUFBNkJDLE1BQTdCLEVBQXNDO0FBQ3pELDZEQUFjSixJQUFkLEdBQW9CLFNBQVNLLEVBQVQsQ0FBY0MsS0FBZCxFQUFxQkMsTUFBckIsRUFBOEI7QUFDakQsV0FBT0osUUFBU0ksTUFBVCxDQUFQO0FBQ0EsSUFGRDtBQUdBLEdBSk0sQ0FBUDtBQUtBO0FBZlU7O2tCQWtCR1QsSyIsImZpbGUiOiJwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2hlY2tQb3J0U3RhdHVzIGFzIHRlc3QsIGZpbmRBUG9ydE5vdEluVXNlIGFzIGZpbmR9IGZyb20gJ3BvcnRzY2FubmVyJztcblxuY2xhc3MgUG9ydHMge1xuXHRzdGF0aWMgdGVzdCAoIC4uLmFyZ3MgKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiBmdWxsZmlsbCAoIHJlc29sdmUsIHJlamVjdCApIHtcblx0XHRcdHRlc3QoIC4uLlsgLi4uYXJncywgZnVuY3Rpb24gY2IgKCBlcnJvciwgcmVzdWx0ICkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSggcmVzdWx0ID09PSAnY2xvc2VkJyApO1xuXHRcdFx0fSBdICk7XG5cdFx0fSApO1xuXHR9XG5cblx0c3RhdGljIGZpbmQgKCAuLi5hcmdzICkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gZnVsbGZpbGwgKCByZXNvbHZlLCByZWplY3QgKSB7XG5cdFx0XHRmaW5kKCAuLi5bIC4uLmFyZ3MsIGZ1bmN0aW9uIGNiICggZXJyb3IsIHJlc3VsdCApIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmUoIHJlc3VsdCApO1xuXHRcdFx0fSBdICk7XG5cdFx0fSApO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRzO1xuIl19