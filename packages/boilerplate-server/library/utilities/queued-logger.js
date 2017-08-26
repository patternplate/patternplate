'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

const privates = new WeakMap();

class LogQueue {
	constructor(prefix) {
		let queue = [];
		privates.set(this, { queue: queue, prefix: prefix });
	}

	fill(level) {
		var _privates$get = privates.get(this);

		let queue = _privates$get.queue;
		let prefix = _privates$get.prefix;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		let message = [prefix].concat(args);
		queue.push([level].concat(_toConsumableArray(message)));
	}

	drain(logger) {
		var _privates$get2 = privates.get(this);

		let queue = _privates$get2.queue;


		for (let item of queue) {
			var _item = _toArray(item);

			let method = _item[0];

			let message = _item.slice(1);

			logger[method].apply(logger, _toConsumableArray(message));
		}
	}

	deploy(logger) {
		this.fill = function (level) {
			for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				args[_key2 - 1] = arguments[_key2];
			}

			logger[level].apply(logger, args);
		};
	}

	error() {
		for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			args[_key3] = arguments[_key3];
		}

		this.fill.apply(this, ['error'].concat(args));
	}

	warn() {
		for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			args[_key4] = arguments[_key4];
		}

		this.fill.apply(this, ['warn'].concat(args));
	}

	info() {
		for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
			args[_key5] = arguments[_key5];
		}

		this.fill.apply(this, ['info'].concat(args));
	}

	debug() {
		for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
			args[_key6] = arguments[_key6];
		}

		this.fill.apply(this, ['debug'].concat(args));
	}

	silly() {
		for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
			args[_key7] = arguments[_key7];
		}

		this.fill.apply(this, ['silly'].concat(args));
	}
}

function logQueueFactory() {
	for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
		args[_key8] = arguments[_key8];
	}

	return new (Function.prototype.bind.apply(LogQueue, [null].concat(args)))();
}

exports.default = logQueueFactory;
exports.LogQueue = LogQueue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9xdWV1ZWQtbG9nZ2VyLmpzIl0sIm5hbWVzIjpbInByaXZhdGVzIiwiV2Vha01hcCIsIkxvZ1F1ZXVlIiwiY29uc3RydWN0b3IiLCJwcmVmaXgiLCJxdWV1ZSIsInNldCIsImZpbGwiLCJsZXZlbCIsImdldCIsImFyZ3MiLCJtZXNzYWdlIiwicHVzaCIsImRyYWluIiwibG9nZ2VyIiwiaXRlbSIsIm1ldGhvZCIsImRlcGxveSIsImVycm9yIiwid2FybiIsImluZm8iLCJkZWJ1ZyIsInNpbGx5IiwibG9nUXVldWVGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTUEsV0FBVyxJQUFJQyxPQUFKLEVBQWpCOztBQUVBLE1BQU1DLFFBQU4sQ0FBZTtBQUNkQyxhQUFjQyxNQUFkLEVBQXVCO0FBQ3RCLE1BQUlDLFFBQVEsRUFBWjtBQUNBTCxXQUFTTSxHQUFULENBQWEsSUFBYixFQUFtQixFQUFFRCxZQUFGLEVBQVNELGNBQVQsRUFBbkI7QUFDQTs7QUFFREcsTUFBTUMsS0FBTixFQUFzQjtBQUFBLHNCQUNHUixTQUFTUyxHQUFULENBQWEsSUFBYixDQURIOztBQUFBLE1BQ2ZKLEtBRGUsaUJBQ2ZBLEtBRGU7QUFBQSxNQUNSRCxNQURRLGlCQUNSQSxNQURROztBQUFBLG9DQUFOTSxJQUFNO0FBQU5BLE9BQU07QUFBQTs7QUFFckIsTUFBSUMsV0FBV1AsTUFBWCxTQUFzQk0sSUFBdEIsQ0FBSjtBQUNBTCxRQUFNTyxJQUFOLEVBQVlKLEtBQVosNEJBQXNCRyxPQUF0QjtBQUNBOztBQUVERSxPQUFPQyxNQUFQLEVBQWU7QUFBQSx1QkFDRWQsU0FBU1MsR0FBVCxDQUFhLElBQWIsQ0FERjs7QUFBQSxNQUNSSixLQURRLGtCQUNSQSxLQURROzs7QUFHZCxPQUFLLElBQUlVLElBQVQsSUFBaUJWLEtBQWpCLEVBQXdCO0FBQUEsd0JBQ0lVLElBREo7O0FBQUEsT0FDbEJDLE1BRGtCOztBQUFBLE9BQ1BMLE9BRE87O0FBRXZCRyxVQUFPRSxNQUFQLG1DQUFrQkwsT0FBbEI7QUFDQTtBQUNEOztBQUVETSxRQUFRSCxNQUFSLEVBQWdCO0FBQ2YsT0FBS1AsSUFBTCxHQUFZLFVBQVNDLEtBQVQsRUFBeUI7QUFBQSxzQ0FBTkUsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQ3BDSSxVQUFPTixLQUFQLGdCQUFpQkUsSUFBakI7QUFDQSxHQUZEO0FBR0E7O0FBRURRLFNBQWdCO0FBQUEscUNBQU5SLElBQU07QUFBTkEsT0FBTTtBQUFBOztBQUNmLE9BQUtILElBQUwsY0FBVSxPQUFWLFNBQXNCRyxJQUF0QjtBQUNBOztBQUVEUyxRQUFlO0FBQUEscUNBQU5ULElBQU07QUFBTkEsT0FBTTtBQUFBOztBQUNkLE9BQUtILElBQUwsY0FBVSxNQUFWLFNBQXFCRyxJQUFyQjtBQUNBOztBQUVEVSxRQUFlO0FBQUEscUNBQU5WLElBQU07QUFBTkEsT0FBTTtBQUFBOztBQUNkLE9BQUtILElBQUwsY0FBVSxNQUFWLFNBQXFCRyxJQUFyQjtBQUNBOztBQUVEVyxTQUFnQjtBQUFBLHFDQUFOWCxJQUFNO0FBQU5BLE9BQU07QUFBQTs7QUFDZixPQUFLSCxJQUFMLGNBQVUsT0FBVixTQUFzQkcsSUFBdEI7QUFDQTs7QUFFRFksU0FBZ0I7QUFBQSxxQ0FBTlosSUFBTTtBQUFOQSxPQUFNO0FBQUE7O0FBQ2YsT0FBS0gsSUFBTCxjQUFVLE9BQVYsU0FBc0JHLElBQXRCO0FBQ0E7QUE3Q2E7O0FBZ0RmLFNBQVNhLGVBQVQsR0FBa0M7QUFBQSxvQ0FBTmIsSUFBTTtBQUFOQSxNQUFNO0FBQUE7O0FBQ2pDLDJDQUFXUixRQUFYLGdCQUF1QlEsSUFBdkI7QUFDQTs7a0JBRWNhLGU7UUFDTXJCLFEsR0FBWkEsUSIsImZpbGUiOiJxdWV1ZWQtbG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJpdmF0ZXMgPSBuZXcgV2Vha01hcCgpO1xuXG5jbGFzcyBMb2dRdWV1ZSB7XG5cdGNvbnN0cnVjdG9yICggcHJlZml4ICkge1xuXHRcdGxldCBxdWV1ZSA9IFtdO1xuXHRcdHByaXZhdGVzLnNldCh0aGlzLCB7IHF1ZXVlLCBwcmVmaXggfSk7XG5cdH1cblxuXHRmaWxsIChsZXZlbCwgLi4uYXJncykge1xuXHRcdGxldCB7IHF1ZXVlLCBwcmVmaXggfSA9IHByaXZhdGVzLmdldCh0aGlzKTtcblx0XHRsZXQgbWVzc2FnZSA9IFtwcmVmaXgsIC4uLmFyZ3NdO1xuXHRcdHF1ZXVlLnB1c2goW2xldmVsLCAuLi5tZXNzYWdlXSk7XG5cdH1cblxuXHRkcmFpbiAobG9nZ2VyKSB7XG5cdFx0bGV0IHsgcXVldWUgfSA9IHByaXZhdGVzLmdldCh0aGlzKTtcblxuXHRcdGZvciAobGV0IGl0ZW0gb2YgcXVldWUpIHtcblx0XHRcdGxldCBbbWV0aG9kLCAuLi5tZXNzYWdlXSA9IGl0ZW07XG5cdFx0XHRsb2dnZXJbbWV0aG9kXSguLi5tZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHRkZXBsb3kgKGxvZ2dlcikge1xuXHRcdHRoaXMuZmlsbCA9IGZ1bmN0aW9uKGxldmVsLCAuLi5hcmdzKSB7XG5cdFx0XHRsb2dnZXJbbGV2ZWxdKC4uLmFyZ3MpO1xuXHRcdH07XG5cdH1cblxuXHRlcnJvciAoLi4uYXJncykge1xuXHRcdHRoaXMuZmlsbCgnZXJyb3InLCAuLi5hcmdzKTtcblx0fVxuXG5cdHdhcm4gKC4uLmFyZ3MpIHtcblx0XHR0aGlzLmZpbGwoJ3dhcm4nLCAuLi5hcmdzKTtcblx0fVxuXG5cdGluZm8gKC4uLmFyZ3MpIHtcblx0XHR0aGlzLmZpbGwoJ2luZm8nLCAuLi5hcmdzKTtcblx0fVxuXG5cdGRlYnVnICguLi5hcmdzKSB7XG5cdFx0dGhpcy5maWxsKCdkZWJ1ZycsIC4uLmFyZ3MpO1xuXHR9XG5cblx0c2lsbHkgKC4uLmFyZ3MpIHtcblx0XHR0aGlzLmZpbGwoJ3NpbGx5JywgLi4uYXJncyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gbG9nUXVldWVGYWN0b3J5KC4uLmFyZ3MpIHtcblx0cmV0dXJuIG5ldyBMb2dRdWV1ZSguLi5hcmdzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9nUXVldWVGYWN0b3J5O1xuZXhwb3J0IHsgTG9nUXVldWUgYXMgTG9nUXVldWUgfTtcbiJdfQ==