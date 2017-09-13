'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hook = undefined;

var _lodash = require('lodash');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const lifecycle = {
  configure: ['hookWillConfigure', 'hookDidConfigure'],
  start: ['hookWillStart', 'hookDidStart']
};

class Hook {

  constructor(application, name, extender) {
    this.wait = true;
    this.disabled = false;
    this.modes = [];
    this.after = ['application:after'];
    this.defaults = {};
    this.configuration = {};
    this.stageName = 'init';
    this.stages = {
      register: false,
      configure: false,
      start: false
    };

    (0, _lodash.merge)(this, extender);

    this.configurationKey = extender.configurationKey || name;
    this.wait = typeof extender.wait === 'undefined' ? this.wait : extender.wait;
    this.disabled = typeof extender.disabled === 'undefined' ? this.disabled : extender.disabled;
    this.log = application.log;
  }

  register(application) {
    this.hookWillRegister(application);

    this.log.silly(`Registering hook '${this.name}'`);

    const hasModes = this.modes.length > 0;
    const matchesModes = hasModes && this.modes.indexOf(application.runtime.mode) > -1;

    if (hasModes && !matchesModes) {
      this.log.debug(`Hook ${this.name} is disabled in mode ${application.runtime.mode}.`);
      this.disable(application);
      return this;
    }

    this.hookDidRegister(application);
    this.stages.register = true;
    return this;
  }

  disable() {
    if (!this.disabled) {
      this.disabled = true;
    }
    return this;
  }

  hookWillRegister() {
    return this;
  }

  hookDidRegister() {
    return this;
  }

  stage(stageName, application) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (_this.stages[stageName] || _this.disabled) {
        return _this;
      }

      _this.stages[stageName] = true;
      _this.log.debug(`Running stage '${stageName}' on hook '${_this.name}'`);

      try {
        yield _this[lifecycle[stageName][0]](application);
        yield _this[stageName](application);
        _this.log.debug(`Ran stage '${stageName}' on hook '${_this.name}'`);
        yield _this[lifecycle[stageName][1]](application);
        return _this;
      } catch (error) {
        _this.log.error(`An error ocurred on stage ${stageName} of hook '${_this.name}'`);
        if (error.stack) {
          _this.log.error(error.stack);
        }
        throw error;
      }
    })();
  }

  configure(application) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (_this2.disabled) {
        return _this2;
      }

      _this2.configuration = (0, _lodash.merge)(_this2.configuration, _this2.defaults, application.configuration[_this2.configurationKey]);
      return _this2;
    })();
  }

  hookWillConfigure() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      return _this3;
    })();
  }

  hookDidConfigure() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      return _this4;
    })();
  }

  start() {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      return _this5;
    })();
  }

  hookWillStart() {
    var _this6 = this;

    return _asyncToGenerator(function* () {
      return _this6;
    })();
  }

  hookDidStart() {
    var _this7 = this;

    return _asyncToGenerator(function* () {
      return _this7;
    })();
  }
}

function hookFactory() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Hook, [null].concat(args)))();
}

exports.default = hookFactory;
exports.Hook = Hook;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2RlZmF1bHQuanMiXSwibmFtZXMiOlsibGlmZWN5Y2xlIiwiY29uZmlndXJlIiwic3RhcnQiLCJIb29rIiwiY29uc3RydWN0b3IiLCJhcHBsaWNhdGlvbiIsIm5hbWUiLCJleHRlbmRlciIsIndhaXQiLCJkaXNhYmxlZCIsIm1vZGVzIiwiYWZ0ZXIiLCJkZWZhdWx0cyIsImNvbmZpZ3VyYXRpb24iLCJzdGFnZU5hbWUiLCJzdGFnZXMiLCJyZWdpc3RlciIsImNvbmZpZ3VyYXRpb25LZXkiLCJsb2ciLCJob29rV2lsbFJlZ2lzdGVyIiwic2lsbHkiLCJoYXNNb2RlcyIsImxlbmd0aCIsIm1hdGNoZXNNb2RlcyIsImluZGV4T2YiLCJydW50aW1lIiwibW9kZSIsImRlYnVnIiwiZGlzYWJsZSIsImhvb2tEaWRSZWdpc3RlciIsInN0YWdlIiwiZXJyb3IiLCJzdGFjayIsImhvb2tXaWxsQ29uZmlndXJlIiwiaG9va0RpZENvbmZpZ3VyZSIsImhvb2tXaWxsU3RhcnQiLCJob29rRGlkU3RhcnQiLCJob29rRmFjdG9yeSIsImFyZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1BLFlBQVk7QUFDaEJDLGFBQVcsQ0FBQyxtQkFBRCxFQUFzQixrQkFBdEIsQ0FESztBQUVoQkMsU0FBTyxDQUFDLGVBQUQsRUFBa0IsY0FBbEI7QUFGUyxDQUFsQjs7QUFLQSxNQUFNQyxJQUFOLENBQVc7O0FBaUJUQyxjQUFZQyxXQUFaLEVBQXlCQyxJQUF6QixFQUErQkMsUUFBL0IsRUFBeUM7QUFBQSxTQWhCekNDLElBZ0J5QyxHQWhCbEMsSUFnQmtDO0FBQUEsU0FmekNDLFFBZXlDLEdBZjlCLEtBZThCO0FBQUEsU0FkekNDLEtBY3lDLEdBZGpDLEVBY2lDO0FBQUEsU0FaekNDLEtBWXlDLEdBWmpDLENBQUMsbUJBQUQsQ0FZaUM7QUFBQSxTQVh6Q0MsUUFXeUMsR0FYOUIsRUFXOEI7QUFBQSxTQVZ6Q0MsYUFV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QixXQUFOLENBQWdCSSxXQUFoQixFQUE2QjtBQUFBOztBQUFBO0FBQzNCLFVBQUksT0FBS0ksUUFBVCxFQUFtQjtBQUNqQjtBQUNEOztBQUVELGFBQUtJLGFBQUwsR0FBcUIsbUJBQ25CLE9BQUtBLGFBRGMsRUFFbkIsT0FBS0QsUUFGYyxFQUduQlAsWUFBWVEsYUFBWixDQUEwQixPQUFLSSxnQkFBL0IsQ0FIbUIsQ0FBckI7QUFLQTtBQVYyQjtBQVc1Qjs7QUFFS2dCLG1CQUFOLEdBQTBCO0FBQUE7O0FBQUE7QUFDeEI7QUFEd0I7QUFFekI7O0FBRUtDLGtCQUFOLEdBQXlCO0FBQUE7O0FBQUE7QUFDdkI7QUFEdUI7QUFFeEI7O0FBRUtoQyxPQUFOLEdBQWM7QUFBQTs7QUFBQTtBQUNaO0FBRFk7QUFFYjs7QUFFS2lDLGVBQU4sR0FBc0I7QUFBQTs7QUFBQTtBQUNwQjtBQURvQjtBQUVyQjs7QUFFS0MsY0FBTixHQUFxQjtBQUFBOztBQUFBO0FBQ25CO0FBRG1CO0FBRXBCO0FBM0hROztBQThIWCxTQUFTQyxXQUFULEdBQThCO0FBQUEsb0NBQU5DLElBQU07QUFBTkEsUUFBTTtBQUFBOztBQUM1Qiw0Q0FBV25DLElBQVgsZ0JBQW1CbUMsSUFBbkI7QUFDRDs7a0JBRWNELFc7UUFDUGxDLEksR0FBQUEsSSIsImZpbGUiOiJkZWZhdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttZXJnZX0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgbGlmZWN5Y2xlID0ge1xuICBjb25maWd1cmU6IFsnaG9va1dpbGxDb25maWd1cmUnLCAnaG9va0RpZENvbmZpZ3VyZSddLFxuICBzdGFydDogWydob29rV2lsbFN0YXJ0JywgJ2hvb2tEaWRTdGFydCddXG59O1xuXG5jbGFzcyBIb29rIHtcbiAgd2FpdCA9IHRydWU7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIG1vZGVzID0gW107XG5cbiAgYWZ0ZXIgPSBbJ2FwcGxpY2F0aW9uOmFmdGVyJ107XG4gIGRlZmF1bHRzID0ge307XG4gIGNvbmZpZ3VyYXRpb24gPSB7fTtcblxuICBzdGFnZU5hbWUgPSAnaW5pdCc7XG5cbiAgc3RhZ2VzID0ge1xuICAgIHJlZ2lzdGVyOiBmYWxzZSxcbiAgICBjb25maWd1cmU6IGZhbHNlLFxuICAgIHN0YXJ0OiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGFwcGxpY2F0aW9uLCBuYW1lLCBleHRlbmRlcikge1xuICAgIG1lcmdlKHRoaXMsIGV4dGVuZGVyKTtcblxuICAgIHRoaXMuY29uZmlndXJhdGlvbktleSA9IGV4dGVuZGVyLmNvbmZpZ3VyYXRpb25LZXkgfHwgbmFtZTtcbiAgICB0aGlzLndhaXQgPVxuICAgICAgdHlwZW9mIGV4dGVuZGVyLndhaXQgPT09ICd1bmRlZmluZWQnID8gdGhpcy53YWl0IDogZXh0ZW5kZXIud2FpdDtcbiAgICB0aGlzLmRpc2FibGVkID1cbiAgICAgIHR5cGVvZiBleHRlbmRlci5kaXNhYmxlZCA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB0aGlzLmRpc2FibGVkXG4gICAgICAgIDogZXh0ZW5kZXIuZGlzYWJsZWQ7XG4gICAgdGhpcy5sb2cgPSBhcHBsaWNhdGlvbi5sb2c7XG4gIH1cblxuICByZWdpc3RlcihhcHBsaWNhdGlvbikge1xuICAgIHRoaXMuaG9va1dpbGxSZWdpc3RlcihhcHBsaWNhdGlvbik7XG5cbiAgICB0aGlzLmxvZy5zaWxseShgUmVnaXN0ZXJpbmcgaG9vayAnJHt0aGlzLm5hbWV9J2ApO1xuXG4gICAgY29uc3QgaGFzTW9kZXMgPSB0aGlzLm1vZGVzLmxlbmd0aCA+IDA7XG4gICAgY29uc3QgbWF0Y2hlc01vZGVzID1cbiAgICAgIGhhc01vZGVzICYmIHRoaXMubW9kZXMuaW5kZXhPZihhcHBsaWNhdGlvbi5ydW50aW1lLm1vZGUpID4gLTE7XG5cbiAgICBpZiAoaGFzTW9kZXMgJiYgIW1hdGNoZXNNb2Rlcykge1xuICAgICAgdGhpcy5sb2cuZGVidWcoXG4gICAgICAgIGBIb29rICR7dGhpcy5uYW1lfSBpcyBkaXNhYmxlZCBpbiBtb2RlICR7YXBwbGljYXRpb24ucnVudGltZS5tb2RlfS5gXG4gICAgICApO1xuICAgICAgdGhpcy5kaXNhYmxlKGFwcGxpY2F0aW9uKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuaG9va0RpZFJlZ2lzdGVyKGFwcGxpY2F0aW9uKTtcbiAgICB0aGlzLnN0YWdlcy5yZWdpc3RlciA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaG9va1dpbGxSZWdpc3RlcigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhvb2tEaWRSZWdpc3RlcigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFzeW5jIHN0YWdlKHN0YWdlTmFtZSwgYXBwbGljYXRpb24pIHtcbiAgICBpZiAodGhpcy5zdGFnZXNbc3RhZ2VOYW1lXSB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLnN0YWdlc1tzdGFnZU5hbWVdID0gdHJ1ZTtcbiAgICB0aGlzLmxvZy5kZWJ1ZyhgUnVubmluZyBzdGFnZSAnJHtzdGFnZU5hbWV9JyBvbiBob29rICcke3RoaXMubmFtZX0nYCk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpc1tsaWZlY3ljbGVbc3RhZ2VOYW1lXVswXV0oYXBwbGljYXRpb24pO1xuICAgICAgYXdhaXQgdGhpc1tzdGFnZU5hbWVdKGFwcGxpY2F0aW9uKTtcbiAgICAgIHRoaXMubG9nLmRlYnVnKGBSYW4gc3RhZ2UgJyR7c3RhZ2VOYW1lfScgb24gaG9vayAnJHt0aGlzLm5hbWV9J2ApO1xuICAgICAgYXdhaXQgdGhpc1tsaWZlY3ljbGVbc3RhZ2VOYW1lXVsxXV0oYXBwbGljYXRpb24pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubG9nLmVycm9yKFxuICAgICAgICBgQW4gZXJyb3Igb2N1cnJlZCBvbiBzdGFnZSAke3N0YWdlTmFtZX0gb2YgaG9vayAnJHt0aGlzLm5hbWV9J2BcbiAgICAgICk7XG4gICAgICBpZiAoZXJyb3Iuc3RhY2spIHtcbiAgICAgICAgdGhpcy5sb2cuZXJyb3IoZXJyb3Iuc3RhY2spO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY29uZmlndXJlKGFwcGxpY2F0aW9uKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IG1lcmdlKFxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgdGhpcy5kZWZhdWx0cyxcbiAgICAgIGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb25bdGhpcy5jb25maWd1cmF0aW9uS2V5XVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhc3luYyBob29rV2lsbENvbmZpZ3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFzeW5jIGhvb2tEaWRDb25maWd1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhc3luYyBzdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFzeW5jIGhvb2tXaWxsU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhc3luYyBob29rRGlkU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZnVuY3Rpb24gaG9va0ZhY3RvcnkoLi4uYXJncykge1xuICByZXR1cm4gbmV3IEhvb2soLi4uYXJncyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvb2tGYWN0b3J5O1xuZXhwb3J0IHtIb29rfTtcbiJdfQ==