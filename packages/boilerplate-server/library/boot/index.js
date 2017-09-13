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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2Jvb3QvaW5kZXguanMiXSwibmFtZXMiOlsib3B0aW9ucyIsImFwcGxpY2F0aW9uIiwiQm9pbGVyUGxhdGVTZXJ2ZXIiLCJyZXN1bHQiLCJlcnJvciIsImxvZyIsImRlcGxveSIsImRyYWluIiwiZW1lcmdlbmN5TG9nZ2VyIiwiYm9vdCIsImxldmVsIiwicmVzdCIsIm1lc3NhZ2UiLCJ3YXJuIiwiaW5mbyIsImRlYnVnIiwic2lsbHkiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJzdWJzIiwicnVudGltZSIsIm1vZGUiLCJwcmVmaXgiLCJlbnYiLCJwcm9jZXNzIiwiQk9JTEVSUExBVEVTRVJWRVJfRU5WIiwiQk9JTEVSUExBVEVfRU5WIiwiTk9ERV9FTlYiLCJFTlYiLCJjd2RzIiwiY3dkIiwicGF0aCIsInN0YXJ0IiwiaG9zdCIsImNvbmZpZ3VyYXRpb24iLCJzZXJ2ZXIiLCJwb3J0IiwiZW5naW5lIiwic3RvcCIsIm1vdW50IiwiYXJncyIsInN1YiIsInNwbGljZSIsIlNldCIsInJ1biIsImNvbW1hbmQiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OytCQTBGQSxXQUFvQkEsT0FBcEIsRUFBNkI7QUFDM0IsVUFBTUMsY0FBYyxJQUFJQyxpQkFBSixDQUFzQkYsT0FBdEIsQ0FBcEI7QUFDQSxRQUFJO0FBQ0YsWUFBTUcsU0FBUyxNQUFNLHFCQUFNRixXQUFOLENBQXJCO0FBQ0EsYUFBT0UsTUFBUDtBQUNELEtBSEQsQ0FHRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEgsa0JBQVlJLEdBQVosQ0FBZ0JELEtBQWhCLENBQXNCQSxLQUF0QjtBQUNBO0FBQ0EsVUFBSUgsWUFBWUksR0FBWixDQUFnQkMsTUFBcEIsRUFBNEI7QUFDMUJMLG9CQUFZSSxHQUFaLENBQWdCRSxLQUFoQixDQUFzQkMsZUFBdEI7QUFDRDtBQUNELFlBQU1KLEtBQU47QUFDRDtBQUNGLEc7O2tCQWJjSyxJOzs7OztBQTFGZjs7QUFFQTs7OztBQUNB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LENBQVFGLElBQUlyQixPQUFKLENBQVlTLElBQXBCLENBQXZCO0FBQ0Esb0JBQUtRLE1BQUwsRUFBWUUsS0FBWixnQkFBcUJDLElBQXJCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUtJLEtBQU4sQ0FBVUMsT0FBVixFQUFtQjdDLE9BQW5CLEVBQTRCO0FBQUE7O0FBQUE7QUFDMUIsVUFBSSxDQUFDLE9BQUs4QyxPQUFWLEVBQW1CO0FBQ2pCLGVBQUt6QyxHQUFMLENBQVNRLElBQVQsQ0FBYyxnREFBZDtBQUNBO0FBQ0Q7O0FBRUQsWUFBTSxPQUFLaUMsT0FBTCxDQUFhRixHQUFiLENBQWlCQyxPQUFqQixFQUEwQjdDLE9BQTFCLENBQU47QUFDQTtBQVAwQjtBQVEzQjtBQTFEMEM7O2tCQTRFOUJTLEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnZXZlbnRzJztcblxuaW1wb3J0IGFwcFJvb3RQYXRoIGZyb20gJ2FwcC1yb290LXBhdGgnO1xuaW1wb3J0IHttZXJnZX0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHF1ZXVlZExvZ2dlciBmcm9tICcuLi91dGlsaXRpZXMvcXVldWVkLWxvZ2dlcic7XG5pbXBvcnQgaG9va3MgZnJvbSAnLi4vaG9va3MnO1xuXG5jb25zdCBlbWVyZ2VuY3lMb2dnZXIgPSB7XG4gIGxvZyhsZXZlbCwgLi4ucmVzdCkge1xuICAgIGNvbnNvbGUubG9nKC4uLltsZXZlbCwgLi4ucmVzdF0pO1xuICB9LFxuICBlcnJvciguLi5tZXNzYWdlKSB7XG4gICAgZW1lcmdlbmN5TG9nZ2VyLmxvZygnZXJyb3InLCAuLi5tZXNzYWdlKTtcbiAgfSxcbiAgd2FybiguLi5tZXNzYWdlKSB7XG4gICAgZW1lcmdlbmN5TG9nZ2VyLmxvZygnbWVzc2FnZScsIC4uLm1lc3NhZ2UpO1xuICB9LFxuICBpbmZvKC4uLm1lc3NhZ2UpIHtcbiAgICBlbWVyZ2VuY3lMb2dnZXIubG9nKCdpbmZvJywgLi4ubWVzc2FnZSk7XG4gIH0sXG4gIGRlYnVnKC4uLm1lc3NhZ2UpIHtcbiAgICBlbWVyZ2VuY3lMb2dnZXIubG9nKCdkZWJ1ZycsIC4uLm1lc3NhZ2UpO1xuICB9LFxuICBzaWxseSguLi5tZXNzYWdlKSB7XG4gICAgZW1lcmdlbmN5TG9nZ2VyLmxvZygnc2lsbHknLCAuLi5tZXNzYWdlKTtcbiAgfVxufTtcblxuY2xhc3MgQm9pbGVyUGxhdGVTZXJ2ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICB0aGlzLnN1YnMgPSBvcHRpb25zLnN1YnMgfHwgW107XG5cbiAgICB0aGlzLnJ1bnRpbWUgPSBtZXJnZShcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICBtb2RlOiAnc2VydmVyJyxcbiAgICAgICAgcHJlZml4OiAnLycsXG4gICAgICAgIGVudjpcbiAgICAgICAgICBwcm9jZXNzLmVudi5CT0lMRVJQTEFURVNFUlZFUl9FTlYgfHxcbiAgICAgICAgICBwcm9jZXNzLmVudi5CT0lMRVJQTEFURV9FTlYgfHxcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViB8fFxuICAgICAgICAgIHByb2Nlc3MuZW52LkVOViB8fFxuICAgICAgICAgICdkZXZlbG9wbWVudCcsXG4gICAgICAgIGN3ZHM6IFtdLFxuICAgICAgICBjd2Q6IGFwcFJvb3RQYXRoLnBhdGhcbiAgICAgIH0sXG4gICAgICBvcHRpb25zXG4gICAgKTtcblxuICAgIHRoaXMubG9nID0gcXVldWVkTG9nZ2VyKHRoaXMubmFtZSk7XG4gIH1cblxuICBhc3luYyBzdGFydChcbiAgICBob3N0ID0gdGhpcy5jb25maWd1cmF0aW9uLnNlcnZlci5ob3N0LFxuICAgIHBvcnQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VydmVyLnBvcnRcbiAgKSB7XG4gICAgYXdhaXQgdGhpcy5lbmdpbmUuc3RhcnQoaG9zdCwgcG9ydCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhc3luYyBzdG9wKCkge1xuICAgIHRoaXMubG9nLmluZm8oJ1xcblN0b3BwaW5nIHNlcnZlciBncmFjZWZ1bGx5Li4uJyk7XG4gICAgYXdhaXQgdGhpcy5lbmdpbmUuc3RvcCgpO1xuICAgIHRoaXMubG9nLmluZm8oJ1xcblN0b3BwZWQgc2VydmVyIGdyYWNlZnVsbHkuLi4nKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1vdW50KC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbc3ViXSA9IGFyZ3M7XG4gICAgc3ViLnJ1bnRpbWUuY3dkcy5zcGxpY2UoMSwgMCwgLi4udGhpcy5ydW50aW1lLmN3ZHMpO1xuICAgIHN1Yi5ydW50aW1lLmN3ZHMgPSBbLi4ubmV3IFNldChzdWIucnVudGltZS5jd2RzKV07XG4gICAgdGhpcy5lbmdpbmUubW91bnQoLi4uYXJncyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhc3luYyBydW4oY29tbWFuZCwgb3B0aW9ucykge1xuICAgIGlmICghdGhpcy5jb25zb2xlKSB7XG4gICAgICB0aGlzLmxvZy53YXJuKCdhcHBsaWNhdGlvbi5jb25zb2xlIGlzIG5vdCBhdmFpYWJsZS4gQWJvcnRpbmcuJyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmNvbnNvbGUucnVuKGNvbW1hbmQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3Qob3B0aW9ucykge1xuICBjb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBCb2lsZXJQbGF0ZVNlcnZlcihvcHRpb25zKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBob29rcyhhcHBsaWNhdGlvbik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhcHBsaWNhdGlvbi5sb2cuZXJyb3IoZXJyb3IpO1xuICAgIC8vIERyYWluIHRoZSBsb2dnaW5nIHF1ZXVlIGluIGNhc2Ugb2YgYW4gZXJyb3JcbiAgICBpZiAoYXBwbGljYXRpb24ubG9nLmRlcGxveSkge1xuICAgICAgYXBwbGljYXRpb24ubG9nLmRyYWluKGVtZXJnZW5jeUxvZ2dlcik7XG4gICAgfVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJvb3Q7XG4iXX0=