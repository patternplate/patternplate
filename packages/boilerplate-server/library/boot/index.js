'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

let boot = (() => {
	var _ref = _asyncToGenerator(function* (options) {
		const application = new BoilerPlateServer(options);
		try {
			const result = yield (0, _hooks2.default)(application);
			return result;
		} catch (error) {
			application.log.error(error);
			// Drain the logging queue in case of an error
			if (application.log.deploy) {
				application.log.drain(emergencyLogger);
			}
			throw error;
		}
	});

	return function boot(_x3) {
		return _ref.apply(this, arguments);
	};
})();

var _events = require('events');

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _lodash = require('lodash');

var _queuedLogger = require('../utilities/queued-logger');

var _queuedLogger2 = _interopRequireDefault(_queuedLogger);

var _hooks = require('../hooks');

var _hooks2 = _interopRequireDefault(_hooks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

const emergencyLogger = {
	log: function log(level) {
		var _console;

		for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			rest[_key - 1] = arguments[_key];
		}

		(_console = console).log.apply(_console, [level].concat(_toConsumableArray(rest)));
	},
	error: function error() {
		for (var _len2 = arguments.length, message = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			message[_key2] = arguments[_key2];
		}

		emergencyLogger.log.apply(emergencyLogger, ['error'].concat(_toConsumableArray(message)));
	},
	warn: function warn() {
		for (var _len3 = arguments.length, message = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			message[_key3] = arguments[_key3];
		}

		emergencyLogger.log.apply(emergencyLogger, ['message'].concat(_toConsumableArray(message)));
	},
	info: function info() {
		for (var _len4 = arguments.length, message = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			message[_key4] = arguments[_key4];
		}

		emergencyLogger.log.apply(emergencyLogger, ['info'].concat(_toConsumableArray(message)));
	},
	debug: function debug() {
		for (var _len5 = arguments.length, message = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
			message[_key5] = arguments[_key5];
		}

		emergencyLogger.log.apply(emergencyLogger, ['debug'].concat(_toConsumableArray(message)));
	},
	silly: function silly() {
		for (var _len6 = arguments.length, message = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
			message[_key6] = arguments[_key6];
		}

		emergencyLogger.log.apply(emergencyLogger, ['silly'].concat(_toConsumableArray(message)));
	}
};

class BoilerPlateServer extends _events.EventEmitter {
	constructor(options) {
		super();

		this.name = options.name;
		this.subs = options.subs || [];

		this.runtime = (0, _lodash.merge)({}, {
			mode: 'server',
			prefix: '/',
			env: process.env.BOILERPLATESERVER_ENV || process.env.BOILERPLATE_ENV || process.env.NODE_ENV || process.env.ENV || 'development',
			cwds: [],
			cwd: _appRootPath2.default.path
		}, options);

		this.log = (0, _queuedLogger2.default)(this.name);
	}

	start() {
		var _this = this;

		let host = arguments.length <= 0 || arguments[0] === undefined ? this.configuration.server.host : arguments[0];
		let port = arguments.length <= 1 || arguments[1] === undefined ? this.configuration.server.port : arguments[1];
		return _asyncToGenerator(function* () {
			yield _this.engine.start(host, port);
			return _this;
		})();
	}

	stop() {
		var _this2 = this;

		return _asyncToGenerator(function* () {
			_this2.log.info('\nStopping server gracefully...');
			yield _this2.engine.stop();
			_this2.log.info('\nStopped server gracefully...');
			return _this2;
		})();
	}

	mount() {
		var _sub$runtime$cwds, _engine;

		for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
			args[_key7] = arguments[_key7];
		}

		const sub = args[0];

		(_sub$runtime$cwds = sub.runtime.cwds).splice.apply(_sub$runtime$cwds, [1, 0].concat(_toConsumableArray(this.runtime.cwds)));
		sub.runtime.cwds = [].concat(_toConsumableArray(new Set(sub.runtime.cwds)));
		(_engine = this.engine).mount.apply(_engine, args);
		return this;
	}

	run(command, options) {
		var _this3 = this;

		return _asyncToGenerator(function* () {
			if (!_this3.console) {
				_this3.log.warn('application.console is not avaiable. Aborting.');
				return _this3;
			}

			yield _this3.console.run(command, options);
			return _this3;
		})();
	}
}

exports.default = boot;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2Jvb3QvaW5kZXguanMiXSwibmFtZXMiOlsib3B0aW9ucyIsImFwcGxpY2F0aW9uIiwiQm9pbGVyUGxhdGVTZXJ2ZXIiLCJyZXN1bHQiLCJlcnJvciIsImxvZyIsImRlcGxveSIsImRyYWluIiwiZW1lcmdlbmN5TG9nZ2VyIiwiYm9vdCIsImxldmVsIiwicmVzdCIsIm1lc3NhZ2UiLCJ3YXJuIiwiaW5mbyIsImRlYnVnIiwic2lsbHkiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJzdWJzIiwicnVudGltZSIsIm1vZGUiLCJwcmVmaXgiLCJlbnYiLCJwcm9jZXNzIiwiQk9JTEVSUExBVEVTRVJWRVJfRU5WIiwiQk9JTEVSUExBVEVfRU5WIiwiTk9ERV9FTlYiLCJFTlYiLCJjd2RzIiwiY3dkIiwicGF0aCIsInN0YXJ0IiwiaG9zdCIsImNvbmZpZ3VyYXRpb24iLCJzZXJ2ZXIiLCJwb3J0IiwiZW5naW5lIiwic3RvcCIsIm1vdW50IiwiYXJncyIsInN1YiIsInNwbGljZSIsIlNldCIsInJ1biIsImNvbW1hbmQiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OzhCQWtGQSxXQUFvQkEsT0FBcEIsRUFBNkI7QUFDNUIsUUFBTUMsY0FBYyxJQUFJQyxpQkFBSixDQUFzQkYsT0FBdEIsQ0FBcEI7QUFDQSxNQUFJO0FBQ0gsU0FBTUcsU0FBUyxNQUFNLHFCQUFNRixXQUFOLENBQXJCO0FBQ0EsVUFBT0UsTUFBUDtBQUNBLEdBSEQsQ0FHRSxPQUFPQyxLQUFQLEVBQWM7QUFDZkgsZUFBWUksR0FBWixDQUFnQkQsS0FBaEIsQ0FBc0JBLEtBQXRCO0FBQ0E7QUFDQSxPQUFJSCxZQUFZSSxHQUFaLENBQWdCQyxNQUFwQixFQUE0QjtBQUMzQkwsZ0JBQVlJLEdBQVosQ0FBZ0JFLEtBQWhCLENBQXNCQyxlQUF0QjtBQUNBO0FBQ0QsU0FBTUosS0FBTjtBQUNBO0FBQ0QsRTs7aUJBYmNLLEk7Ozs7O0FBbEZmOztBQUlBOzs7O0FBQ0E7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UyxJQUFaLGdDQUF1QixJQUFJYyxHQUFKLENBQVFGLElBQUlyQixPQUFKLENBQVlTLElBQXBCLENBQXZCO0FBQ0Esa0JBQUtRLE1BQUwsRUFBWUUsS0FBWixnQkFBcUJDLElBQXJCO0FBQ0EsU0FBTyxJQUFQO0FBQ0E7O0FBRUtJLElBQU4sQ0FBVUMsT0FBVixFQUFtQjdDLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUE7QUFDM0IsT0FBSSxDQUFDLE9BQUs4QyxPQUFWLEVBQW1CO0FBQ2xCLFdBQUt6QyxHQUFMLENBQVNRLElBQVQsQ0FBYyxnREFBZDtBQUNBO0FBQ0E7O0FBRUQsU0FBTSxPQUFLaUMsT0FBTCxDQUFhRixHQUFiLENBQWlCQyxPQUFqQixFQUEwQjdDLE9BQTFCLENBQU47QUFDQTtBQVAyQjtBQVEzQjtBQTlDMkM7O2tCQWdFOUJTLEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRFdmVudEVtaXR0ZXJcbn0gZnJvbSAnZXZlbnRzJztcblxuaW1wb3J0IGFwcFJvb3RQYXRoIGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IHtcblx0bWVyZ2Vcbn0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHF1ZXVlZExvZ2dlciBmcm9tICcuLi91dGlsaXRpZXMvcXVldWVkLWxvZ2dlcic7XG5pbXBvcnQgaG9va3MgZnJvbSAnLi4vaG9va3MnO1xuXG5jb25zdCBlbWVyZ2VuY3lMb2dnZXIgPSB7XG5cdGxvZyhsZXZlbCwgLi4ucmVzdCkge1xuXHRcdGNvbnNvbGUubG9nKC4uLltsZXZlbCwgLi4ucmVzdF0pO1xuXHR9LFxuXHRlcnJvciguLi5tZXNzYWdlKSB7XG5cdFx0ZW1lcmdlbmN5TG9nZ2VyLmxvZygnZXJyb3InLCAuLi5tZXNzYWdlKTtcblx0fSxcblx0d2FybiguLi5tZXNzYWdlKSB7XG5cdFx0ZW1lcmdlbmN5TG9nZ2VyLmxvZygnbWVzc2FnZScsIC4uLm1lc3NhZ2UpO1xuXHR9LFxuXHRpbmZvKC4uLm1lc3NhZ2UpIHtcblx0XHRlbWVyZ2VuY3lMb2dnZXIubG9nKCdpbmZvJywgLi4ubWVzc2FnZSk7XG5cdH0sXG5cdGRlYnVnKC4uLm1lc3NhZ2UpIHtcblx0XHRlbWVyZ2VuY3lMb2dnZXIubG9nKCdkZWJ1ZycsIC4uLm1lc3NhZ2UpO1xuXHR9LFxuXHRzaWxseSguLi5tZXNzYWdlKSB7XG5cdFx0ZW1lcmdlbmN5TG9nZ2VyLmxvZygnc2lsbHknLCAuLi5tZXNzYWdlKTtcblx0fVxufTtcblxuY2xhc3MgQm9pbGVyUGxhdGVTZXJ2ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcblx0XHR0aGlzLnN1YnMgPSBvcHRpb25zLnN1YnMgfHwgW107XG5cblx0XHR0aGlzLnJ1bnRpbWUgPSBtZXJnZSh7fSwge1xuXHRcdFx0bW9kZTogJ3NlcnZlcicsXG5cdFx0XHRwcmVmaXg6ICcvJyxcblx0XHRcdGVudjogcHJvY2Vzcy5lbnYuQk9JTEVSUExBVEVTRVJWRVJfRU5WIHx8IHByb2Nlc3MuZW52LkJPSUxFUlBMQVRFX0VOViB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBwcm9jZXNzLmVudi5FTlYgfHwgJ2RldmVsb3BtZW50Jyxcblx0XHRcdGN3ZHM6IFtdLFxuXHRcdFx0Y3dkOiBhcHBSb290UGF0aC5wYXRoXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLmxvZyA9IHF1ZXVlZExvZ2dlcih0aGlzLm5hbWUpO1xuXHR9XG5cblx0YXN5bmMgc3RhcnQoaG9zdCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZXJ2ZXIuaG9zdCwgcG9ydCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZXJ2ZXIucG9ydCkge1xuXHRcdGF3YWl0IHRoaXMuZW5naW5lLnN0YXJ0KGhvc3QsIHBvcnQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgc3RvcCgpIHtcblx0XHR0aGlzLmxvZy5pbmZvKCdcXG5TdG9wcGluZyBzZXJ2ZXIgZ3JhY2VmdWxseS4uLicpO1xuXHRcdGF3YWl0IHRoaXMuZW5naW5lLnN0b3AoKTtcblx0XHR0aGlzLmxvZy5pbmZvKCdcXG5TdG9wcGVkIHNlcnZlciBncmFjZWZ1bGx5Li4uJyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRtb3VudCguLi5hcmdzKSB7XG5cdFx0Y29uc3QgW3N1Yl0gPSBhcmdzO1xuXHRcdHN1Yi5ydW50aW1lLmN3ZHMuc3BsaWNlKDEsIDAsIC4uLnRoaXMucnVudGltZS5jd2RzKTtcblx0XHRzdWIucnVudGltZS5jd2RzID0gWy4uLm5ldyBTZXQoc3ViLnJ1bnRpbWUuY3dkcyldO1xuXHRcdHRoaXMuZW5naW5lLm1vdW50KC4uLmFyZ3MpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgcnVuKGNvbW1hbmQsIG9wdGlvbnMpIHtcblx0XHRpZiAoIXRoaXMuY29uc29sZSkge1xuXHRcdFx0dGhpcy5sb2cud2FybignYXBwbGljYXRpb24uY29uc29sZSBpcyBub3QgYXZhaWFibGUuIEFib3J0aW5nLicpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0YXdhaXQgdGhpcy5jb25zb2xlLnJ1bihjb21tYW5kLCBvcHRpb25zKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBib290KG9wdGlvbnMpIHtcblx0Y29uc3QgYXBwbGljYXRpb24gPSBuZXcgQm9pbGVyUGxhdGVTZXJ2ZXIob3B0aW9ucyk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgaG9va3MoYXBwbGljYXRpb24pO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0YXBwbGljYXRpb24ubG9nLmVycm9yKGVycm9yKTtcblx0XHQvLyBEcmFpbiB0aGUgbG9nZ2luZyBxdWV1ZSBpbiBjYXNlIG9mIGFuIGVycm9yXG5cdFx0aWYgKGFwcGxpY2F0aW9uLmxvZy5kZXBsb3kpIHtcblx0XHRcdGFwcGxpY2F0aW9uLmxvZy5kcmFpbihlbWVyZ2VuY3lMb2dnZXIpO1xuXHRcdH1cblx0XHR0aHJvdyBlcnJvcjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBib290O1xuIl19