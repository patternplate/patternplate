'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

const privates = new WeakMap();

class LogQueue {
  constructor(prefix) {
    const queue = [];
    privates.set(this, { queue: queue, prefix: prefix });
  }

  fill(level) {
    var _privates$get = privates.get(this);

    const queue = _privates$get.queue;
    const prefix = _privates$get.prefix;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    const message = [prefix].concat(args);
    queue.push([level].concat(_toConsumableArray(message)));
  }

  drain(logger) {
    var _privates$get2 = privates.get(this);

    const queue = _privates$get2.queue;


    for (const item of queue) {
      var _item = _toArray(item);

      const method = _item[0];

      const message = _item.slice(1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9xdWV1ZWQtbG9nZ2VyLmpzIl0sIm5hbWVzIjpbInByaXZhdGVzIiwiV2Vha01hcCIsIkxvZ1F1ZXVlIiwiY29uc3RydWN0b3IiLCJwcmVmaXgiLCJxdWV1ZSIsInNldCIsImZpbGwiLCJsZXZlbCIsImdldCIsImFyZ3MiLCJtZXNzYWdlIiwicHVzaCIsImRyYWluIiwibG9nZ2VyIiwiaXRlbSIsIm1ldGhvZCIsImRlcGxveSIsImVycm9yIiwid2FybiIsImluZm8iLCJkZWJ1ZyIsInNpbGx5IiwibG9nUXVldWVGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTUEsV0FBVyxJQUFJQyxPQUFKLEVBQWpCOztBQUVBLE1BQU1DLFFBQU4sQ0FBZTtBQUNiQyxjQUFZQyxNQUFaLEVBQW9CO0FBQ2xCLFVBQU1DLFFBQVEsRUFBZDtBQUNBTCxhQUFTTSxHQUFULENBQWEsSUFBYixFQUFtQixFQUFDRCxZQUFELEVBQVFELGNBQVIsRUFBbkI7QUFDRDs7QUFFREcsT0FBS0MsS0FBTCxFQUFxQjtBQUFBLHdCQUNLUixTQUFTUyxHQUFULENBQWEsSUFBYixDQURMOztBQUFBLFVBQ1pKLEtBRFksaUJBQ1pBLEtBRFk7QUFBQSxVQUNMRCxNQURLLGlCQUNMQSxNQURLOztBQUFBLHNDQUFOTSxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFFbkIsVUFBTUMsV0FBV1AsTUFBWCxTQUFzQk0sSUFBdEIsQ0FBTjtBQUNBTCxVQUFNTyxJQUFOLEVBQVlKLEtBQVosNEJBQXNCRyxPQUF0QjtBQUNEOztBQUVERSxRQUFNQyxNQUFOLEVBQWM7QUFBQSx5QkFDSWQsU0FBU1MsR0FBVCxDQUFhLElBQWIsQ0FESjs7QUFBQSxVQUNMSixLQURLLGtCQUNMQSxLQURLOzs7QUFHWixTQUFLLE1BQU1VLElBQVgsSUFBbUJWLEtBQW5CLEVBQTBCO0FBQUEsMkJBQ0tVLElBREw7O0FBQUEsWUFDakJDLE1BRGlCOztBQUFBLFlBQ05MLE9BRE07O0FBRXhCRyxhQUFPRSxNQUFQLG1DQUFrQkwsT0FBbEI7QUFDRDtBQUNGOztBQUVETSxTQUFPSCxNQUFQLEVBQWU7QUFDYixTQUFLUCxJQUFMLEdBQVksVUFBU0MsS0FBVCxFQUF5QjtBQUFBLHlDQUFORSxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDbkNJLGFBQU9OLEtBQVAsZ0JBQWlCRSxJQUFqQjtBQUNELEtBRkQ7QUFHRDs7QUFFRFEsVUFBZTtBQUFBLHVDQUFOUixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDYixTQUFLSCxJQUFMLGNBQVUsT0FBVixTQUFzQkcsSUFBdEI7QUFDRDs7QUFFRFMsU0FBYztBQUFBLHVDQUFOVCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDWixTQUFLSCxJQUFMLGNBQVUsTUFBVixTQUFxQkcsSUFBckI7QUFDRDs7QUFFRFUsU0FBYztBQUFBLHVDQUFOVixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDWixTQUFLSCxJQUFMLGNBQVUsTUFBVixTQUFxQkcsSUFBckI7QUFDRDs7QUFFRFcsVUFBZTtBQUFBLHVDQUFOWCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDYixTQUFLSCxJQUFMLGNBQVUsT0FBVixTQUFzQkcsSUFBdEI7QUFDRDs7QUFFRFksVUFBZTtBQUFBLHVDQUFOWixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDYixTQUFLSCxJQUFMLGNBQVUsT0FBVixTQUFzQkcsSUFBdEI7QUFDRDtBQTdDWTs7QUFnRGYsU0FBU2EsZUFBVCxHQUFrQztBQUFBLHFDQUFOYixJQUFNO0FBQU5BLFFBQU07QUFBQTs7QUFDaEMsNENBQVdSLFFBQVgsZ0JBQXVCUSxJQUF2QjtBQUNEOztrQkFFY2EsZTtRQUNQckIsUSxHQUFBQSxRIiwiZmlsZSI6InF1ZXVlZC1sb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcml2YXRlcyA9IG5ldyBXZWFrTWFwKCk7XG5cbmNsYXNzIExvZ1F1ZXVlIHtcbiAgY29uc3RydWN0b3IocHJlZml4KSB7XG4gICAgY29uc3QgcXVldWUgPSBbXTtcbiAgICBwcml2YXRlcy5zZXQodGhpcywge3F1ZXVlLCBwcmVmaXh9KTtcbiAgfVxuXG4gIGZpbGwobGV2ZWwsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCB7cXVldWUsIHByZWZpeH0gPSBwcml2YXRlcy5nZXQodGhpcyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IFtwcmVmaXgsIC4uLmFyZ3NdO1xuICAgIHF1ZXVlLnB1c2goW2xldmVsLCAuLi5tZXNzYWdlXSk7XG4gIH1cblxuICBkcmFpbihsb2dnZXIpIHtcbiAgICBjb25zdCB7cXVldWV9ID0gcHJpdmF0ZXMuZ2V0KHRoaXMpO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHF1ZXVlKSB7XG4gICAgICBjb25zdCBbbWV0aG9kLCAuLi5tZXNzYWdlXSA9IGl0ZW07XG4gICAgICBsb2dnZXJbbWV0aG9kXSguLi5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBkZXBsb3kobG9nZ2VyKSB7XG4gICAgdGhpcy5maWxsID0gZnVuY3Rpb24obGV2ZWwsIC4uLmFyZ3MpIHtcbiAgICAgIGxvZ2dlcltsZXZlbF0oLi4uYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIGVycm9yKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmZpbGwoJ2Vycm9yJywgLi4uYXJncyk7XG4gIH1cblxuICB3YXJuKC4uLmFyZ3MpIHtcbiAgICB0aGlzLmZpbGwoJ3dhcm4nLCAuLi5hcmdzKTtcbiAgfVxuXG4gIGluZm8oLi4uYXJncykge1xuICAgIHRoaXMuZmlsbCgnaW5mbycsIC4uLmFyZ3MpO1xuICB9XG5cbiAgZGVidWcoLi4uYXJncykge1xuICAgIHRoaXMuZmlsbCgnZGVidWcnLCAuLi5hcmdzKTtcbiAgfVxuXG4gIHNpbGx5KC4uLmFyZ3MpIHtcbiAgICB0aGlzLmZpbGwoJ3NpbGx5JywgLi4uYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nUXVldWVGYWN0b3J5KC4uLmFyZ3MpIHtcbiAgcmV0dXJuIG5ldyBMb2dRdWV1ZSguLi5hcmdzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9nUXVldWVGYWN0b3J5O1xuZXhwb3J0IHtMb2dRdWV1ZX07XG4iXX0=