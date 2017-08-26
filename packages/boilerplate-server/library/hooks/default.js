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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2RlZmF1bHQuanMiXSwibmFtZXMiOlsibGlmZWN5Y2xlIiwiY29uZmlndXJlIiwic3RhcnQiLCJIb29rIiwiY29uc3RydWN0b3IiLCJhcHBsaWNhdGlvbiIsIm5hbWUiLCJleHRlbmRlciIsIndhaXQiLCJkaXNhYmxlZCIsIm1vZGVzIiwiYWZ0ZXIiLCJkZWZhdWx0cyIsImNvbmZpZ3VyYXRpb24iLCJzdGFnZU5hbWUiLCJzdGFnZXMiLCJyZWdpc3RlciIsImNvbmZpZ3VyYXRpb25LZXkiLCJsb2ciLCJob29rV2lsbFJlZ2lzdGVyIiwic2lsbHkiLCJoYXNNb2RlcyIsImxlbmd0aCIsIm1hdGNoZXNNb2RlcyIsImluZGV4T2YiLCJydW50aW1lIiwibW9kZSIsImRlYnVnIiwiZGlzYWJsZSIsImhvb2tEaWRSZWdpc3RlciIsInN0YWdlIiwiZXJyb3IiLCJzdGFjayIsImhvb2tXaWxsQ29uZmlndXJlIiwiaG9va0RpZENvbmZpZ3VyZSIsImhvb2tXaWxsU3RhcnQiLCJob29rRGlkU3RhcnQiLCJob29rRmFjdG9yeSIsImFyZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUlBLE1BQU1BLFlBQVk7QUFDakJDLFlBQVcsQ0FBQyxtQkFBRCxFQUFzQixrQkFBdEIsQ0FETTtBQUVqQkMsUUFBTyxDQUFDLGVBQUQsRUFBa0IsY0FBbEI7QUFGVSxDQUFsQjs7QUFLQSxNQUFNQyxJQUFOLENBQVc7O0FBaUJWQyxhQUFZQyxXQUFaLEVBQXlCQyxJQUF6QixFQUErQkMsUUFBL0IsRUFBeUM7QUFBQSxPQWhCekNDLElBZ0J5QyxHQWhCbEMsSUFnQmtDO0FBQUEsT0FmekNDLFFBZXlDLEdBZjlCLEtBZThCO0FBQUEsT0FkekNDLEtBY3lDLEdBZGpDLEVBY2lDO0FBQUEsT0FaekNDLEtBWXlDLEdBWmpDLENBQUMsbUJBQUQsQ0FZaUM7QUFBQSxPQVh6Q0MsUUFXeUMsR0FYOUIsRUFXOEI7QUFBQSxPQVZ6Q0MsYUFV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O0FBRUs5QixVQUFOLENBQWdCSSxXQUFoQixFQUE2QjtBQUFBOztBQUFBO0FBQzVCLE9BQUksT0FBS0ksUUFBVCxFQUFtQjtBQUNsQjtBQUNBOztBQUVELFVBQUtJLGFBQUwsR0FBcUIsbUJBQ3BCLE9BQUtBLGFBRGUsRUFFcEIsT0FBS0QsUUFGZSxFQUdwQlAsWUFBWVEsYUFBWixDQUEwQixPQUFLSSxnQkFBL0IsQ0FIb0IsQ0FBckI7QUFLQTtBQVY0QjtBQVc1Qjs7QUFFS2dCLGtCQUFOLEdBQTBCO0FBQUE7O0FBQUE7QUFDekI7QUFEeUI7QUFFekI7O0FBRUtDLGlCQUFOLEdBQXlCO0FBQUE7O0FBQUE7QUFDeEI7QUFEd0I7QUFFeEI7O0FBRUtoQyxNQUFOLEdBQWM7QUFBQTs7QUFBQTtBQUNiO0FBRGE7QUFFYjs7QUFFS2lDLGNBQU4sR0FBc0I7QUFBQTs7QUFBQTtBQUNyQjtBQURxQjtBQUVyQjs7QUFFS0MsYUFBTixHQUFxQjtBQUFBOztBQUFBO0FBQ3BCO0FBRG9CO0FBRXBCO0FBbkhTOztBQXNIWCxTQUFTQyxXQUFULEdBQThCO0FBQUEsbUNBQU5DLElBQU07QUFBTkEsTUFBTTtBQUFBOztBQUM3QiwyQ0FBV25DLElBQVgsZ0JBQW1CbUMsSUFBbkI7QUFDQTs7a0JBRWNELFc7UUFFTmxDLEksR0FBUkEsSSIsImZpbGUiOiJkZWZhdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0bWVyZ2Vcbn0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgbGlmZWN5Y2xlID0ge1xuXHRjb25maWd1cmU6IFsnaG9va1dpbGxDb25maWd1cmUnLCAnaG9va0RpZENvbmZpZ3VyZSddLFxuXHRzdGFydDogWydob29rV2lsbFN0YXJ0JywgJ2hvb2tEaWRTdGFydCddXG59O1xuXG5jbGFzcyBIb29rIHtcblx0d2FpdCA9IHRydWU7XG5cdGRpc2FibGVkID0gZmFsc2U7XG5cdG1vZGVzID0gW107XG5cblx0YWZ0ZXIgPSBbJ2FwcGxpY2F0aW9uOmFmdGVyJ107XG5cdGRlZmF1bHRzID0ge307XG5cdGNvbmZpZ3VyYXRpb24gPSB7fTtcblxuXHRzdGFnZU5hbWUgPSAnaW5pdCc7XG5cblx0c3RhZ2VzID0ge1xuXHRcdHJlZ2lzdGVyOiBmYWxzZSxcblx0XHRjb25maWd1cmU6IGZhbHNlLFxuXHRcdHN0YXJ0OiBmYWxzZVxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKGFwcGxpY2F0aW9uLCBuYW1lLCBleHRlbmRlcikge1xuXHRcdG1lcmdlKHRoaXMsIGV4dGVuZGVyKTtcblxuXHRcdHRoaXMuY29uZmlndXJhdGlvbktleSA9IGV4dGVuZGVyLmNvbmZpZ3VyYXRpb25LZXkgfHwgbmFtZTtcblx0XHR0aGlzLndhaXQgPSB0eXBlb2YgZXh0ZW5kZXIud2FpdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLndhaXQgOiBleHRlbmRlci53YWl0O1xuXHRcdHRoaXMuZGlzYWJsZWQgPSB0eXBlb2YgZXh0ZW5kZXIuZGlzYWJsZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5kaXNhYmxlZCA6IGV4dGVuZGVyLmRpc2FibGVkO1xuXHRcdHRoaXMubG9nID0gYXBwbGljYXRpb24ubG9nO1xuXHR9XG5cblx0cmVnaXN0ZXIoYXBwbGljYXRpb24pIHtcblx0XHR0aGlzLmhvb2tXaWxsUmVnaXN0ZXIoYXBwbGljYXRpb24pO1xuXG5cdFx0dGhpcy5sb2cuc2lsbHkoYFJlZ2lzdGVyaW5nIGhvb2sgJyR7dGhpcy5uYW1lfSdgKTtcblxuXHRcdGNvbnN0IGhhc01vZGVzID0gdGhpcy5tb2Rlcy5sZW5ndGggPiAwO1xuXHRcdGNvbnN0IG1hdGNoZXNNb2RlcyA9IGhhc01vZGVzICYmXG5cdFx0XHR0aGlzLm1vZGVzLmluZGV4T2YoYXBwbGljYXRpb24ucnVudGltZS5tb2RlKSA+IC0xO1xuXG5cdFx0aWYgKGhhc01vZGVzICYmICFtYXRjaGVzTW9kZXMpIHtcblx0XHRcdHRoaXMubG9nLmRlYnVnKGBIb29rICR7dGhpcy5uYW1lfSBpcyBkaXNhYmxlZCBpbiBtb2RlICR7YXBwbGljYXRpb24ucnVudGltZS5tb2RlfS5gKTtcblx0XHRcdHRoaXMuZGlzYWJsZShhcHBsaWNhdGlvbik7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR0aGlzLmhvb2tEaWRSZWdpc3RlcihhcHBsaWNhdGlvbik7XG5cdFx0dGhpcy5zdGFnZXMucmVnaXN0ZXIgPSB0cnVlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGlzYWJsZSgpIHtcblx0XHRpZiAoIXRoaXMuZGlzYWJsZWQpIHtcblx0XHRcdHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGhvb2tXaWxsUmVnaXN0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRob29rRGlkUmVnaXN0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3luYyBzdGFnZShzdGFnZU5hbWUsIGFwcGxpY2F0aW9uKSB7XG5cdFx0aWYgKHRoaXMuc3RhZ2VzW3N0YWdlTmFtZV0gfHwgdGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGFnZXNbc3RhZ2VOYW1lXSA9IHRydWU7XG5cdFx0dGhpcy5sb2cuZGVidWcoYFJ1bm5pbmcgc3RhZ2UgJyR7c3RhZ2VOYW1lfScgb24gaG9vayAnJHt0aGlzLm5hbWV9J2ApO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRoaXNbbGlmZWN5Y2xlW3N0YWdlTmFtZV1bMF1dKGFwcGxpY2F0aW9uKTtcblx0XHRcdGF3YWl0IHRoaXNbc3RhZ2VOYW1lXShhcHBsaWNhdGlvbik7XG5cdFx0XHR0aGlzLmxvZy5kZWJ1ZyhgUmFuIHN0YWdlICcke3N0YWdlTmFtZX0nIG9uIGhvb2sgJyR7dGhpcy5uYW1lfSdgKTtcblx0XHRcdGF3YWl0IHRoaXNbbGlmZWN5Y2xlW3N0YWdlTmFtZV1bMV1dKGFwcGxpY2F0aW9uKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aGlzLmxvZy5lcnJvcihgQW4gZXJyb3Igb2N1cnJlZCBvbiBzdGFnZSAke3N0YWdlTmFtZX0gb2YgaG9vayAnJHt0aGlzLm5hbWV9J2ApO1xuXHRcdFx0aWYgKGVycm9yLnN0YWNrKSB7XG5cdFx0XHRcdHRoaXMubG9nLmVycm9yKGVycm9yLnN0YWNrKTtcblx0XHRcdH1cblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGNvbmZpZ3VyZShhcHBsaWNhdGlvbikge1xuXHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR0aGlzLmNvbmZpZ3VyYXRpb24gPSBtZXJnZShcblx0XHRcdHRoaXMuY29uZmlndXJhdGlvbixcblx0XHRcdHRoaXMuZGVmYXVsdHMsXG5cdFx0XHRhcHBsaWNhdGlvbi5jb25maWd1cmF0aW9uW3RoaXMuY29uZmlndXJhdGlvbktleV1cblx0XHQpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgaG9va1dpbGxDb25maWd1cmUoKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3luYyBob29rRGlkQ29uZmlndXJlKCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgc3RhcnQoKSB7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRhc3luYyBob29rV2lsbFN0YXJ0KCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXN5bmMgaG9va0RpZFN0YXJ0KCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGhvb2tGYWN0b3J5KC4uLmFyZ3MpIHtcblx0cmV0dXJuIG5ldyBIb29rKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob29rRmFjdG9yeTtcbmV4cG9ydCB7XG5cdEhvb2sgYXMgSG9va1xufTtcbiJdfQ==