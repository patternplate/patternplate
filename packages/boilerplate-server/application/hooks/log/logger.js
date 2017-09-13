'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = undefined;

var _winston = require('winston');

const privates = new WeakMap();

class Logger {
  constructor(prefix, options) {
    const engine = new _winston.Logger(options);
    engine.add(_winston.transports.Console, options);
    privates.set(this, { prefix: prefix, options: options, engine: engine });
  }

  log(method) {
    var _privates$get = privates.get(this);

    const engine = _privates$get.engine;
    const prefix = _privates$get.prefix;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    engine[method].apply(engine, [prefix].concat(args));
  }

  error() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.log.apply(this, ['error'].concat(args));
  }

  warn() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this.log.apply(this, ['warn'].concat(args));
  }

  info() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this.log.apply(this, ['info'].concat(args));
  }

  debug() {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    this.log.apply(this, ['debug'].concat(args));
  }

  silly() {
    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    this.log.apply(this, ['silly'].concat(args));
  }
}

function loggerFactory() {
  for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  return new (Function.prototype.bind.apply(Logger, [null].concat(args)))();
}

exports.default = loggerFactory;
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9sb2cvbG9nZ2VyLmpzIl0sIm5hbWVzIjpbInByaXZhdGVzIiwiV2Vha01hcCIsIkxvZ2dlciIsImNvbnN0cnVjdG9yIiwicHJlZml4Iiwib3B0aW9ucyIsImVuZ2luZSIsImFkZCIsIkNvbnNvbGUiLCJzZXQiLCJsb2ciLCJtZXRob2QiLCJnZXQiLCJhcmdzIiwiZXJyb3IiLCJ3YXJuIiwiaW5mbyIsImRlYnVnIiwic2lsbHkiLCJsb2dnZXJGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0EsTUFBTUEsV0FBVyxJQUFJQyxPQUFKLEVBQWpCOztBQUVBLE1BQU1DLE1BQU4sQ0FBYTtBQUNYQyxjQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QjtBQUMzQixVQUFNQyxTQUFTLG9CQUFrQkQsT0FBbEIsQ0FBZjtBQUNBQyxXQUFPQyxHQUFQLENBQVcsb0JBQWtCQyxPQUE3QixFQUFzQ0gsT0FBdEM7QUFDQUwsYUFBU1MsR0FBVCxDQUFhLElBQWIsRUFBbUIsRUFBQ0wsY0FBRCxFQUFTQyxnQkFBVCxFQUFrQkMsY0FBbEIsRUFBbkI7QUFDRDs7QUFFREksTUFBSUMsTUFBSixFQUFxQjtBQUFBLHdCQUNNWCxTQUFTWSxHQUFULENBQWEsSUFBYixDQUROOztBQUFBLFVBQ1pOLE1BRFksaUJBQ1pBLE1BRFk7QUFBQSxVQUNKRixNQURJLGlCQUNKQSxNQURJOztBQUFBLHNDQUFOUyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFFbkJQLFdBQU9LLE1BQVAsaUJBQW1CUCxNQUFuQixTQUE4QlMsSUFBOUI7QUFDRDs7QUFFREMsVUFBZTtBQUFBLHVDQUFORCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDYixTQUFLSCxHQUFMLGNBQVMsT0FBVCxTQUFxQkcsSUFBckI7QUFDRDs7QUFFREUsU0FBYztBQUFBLHVDQUFORixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDWixTQUFLSCxHQUFMLGNBQVMsTUFBVCxTQUFvQkcsSUFBcEI7QUFDRDs7QUFFREcsU0FBYztBQUFBLHVDQUFOSCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDWixTQUFLSCxHQUFMLGNBQVMsTUFBVCxTQUFvQkcsSUFBcEI7QUFDRDs7QUFFREksVUFBZTtBQUFBLHVDQUFOSixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDYixTQUFLSCxHQUFMLGNBQVMsT0FBVCxTQUFxQkcsSUFBckI7QUFDRDs7QUFFREssVUFBZTtBQUFBLHVDQUFOTCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDYixTQUFLSCxHQUFMLGNBQVMsT0FBVCxTQUFxQkcsSUFBckI7QUFDRDtBQTlCVTs7QUFpQ2IsU0FBU00sYUFBVCxHQUFnQztBQUFBLHFDQUFOTixJQUFNO0FBQU5BLFFBQU07QUFBQTs7QUFDOUIsNENBQVdYLE1BQVgsZ0JBQXFCVyxJQUFyQjtBQUNEOztrQkFFY00sYTtRQUNQakIsTSxHQUFBQSxNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIExvZ2dlciBhcyBXaW5zdG9uTG9nZ2VyLFxuICB0cmFuc3BvcnRzIGFzIHdpbnN0b25UcmFuc3BvcnRzXG59IGZyb20gJ3dpbnN0b24nO1xuXG5jb25zdCBwcml2YXRlcyA9IG5ldyBXZWFrTWFwKCk7XG5cbmNsYXNzIExvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKHByZWZpeCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBXaW5zdG9uTG9nZ2VyKG9wdGlvbnMpO1xuICAgIGVuZ2luZS5hZGQod2luc3RvblRyYW5zcG9ydHMuQ29uc29sZSwgb3B0aW9ucyk7XG4gICAgcHJpdmF0ZXMuc2V0KHRoaXMsIHtwcmVmaXgsIG9wdGlvbnMsIGVuZ2luZX0pO1xuICB9XG5cbiAgbG9nKG1ldGhvZCwgLi4uYXJncykge1xuICAgIGNvbnN0IHtlbmdpbmUsIHByZWZpeH0gPSBwcml2YXRlcy5nZXQodGhpcyk7XG4gICAgZW5naW5lW21ldGhvZF0oLi4uW3ByZWZpeCwgLi4uYXJnc10pO1xuICB9XG5cbiAgZXJyb3IoLi4uYXJncykge1xuICAgIHRoaXMubG9nKCdlcnJvcicsIC4uLmFyZ3MpO1xuICB9XG5cbiAgd2FybiguLi5hcmdzKSB7XG4gICAgdGhpcy5sb2coJ3dhcm4nLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGluZm8oLi4uYXJncykge1xuICAgIHRoaXMubG9nKCdpbmZvJywgLi4uYXJncyk7XG4gIH1cblxuICBkZWJ1ZyguLi5hcmdzKSB7XG4gICAgdGhpcy5sb2coJ2RlYnVnJywgLi4uYXJncyk7XG4gIH1cblxuICBzaWxseSguLi5hcmdzKSB7XG4gICAgdGhpcy5sb2coJ3NpbGx5JywgLi4uYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nZ2VyRmFjdG9yeSguLi5hcmdzKSB7XG4gIHJldHVybiBuZXcgTG9nZ2VyKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXJGYWN0b3J5O1xuZXhwb3J0IHtMb2dnZXJ9O1xuIl19