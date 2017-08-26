'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	after: ['hooks:user-hooks:start:after'],

	configure: function configure(application) {
		this.configuration = _extends({}, this.configuration, this.defaults, application.configuration[this.name]);
		this.configuration.level = application.runtime.api.loglevel || this.configuration.level;
		return this;
	},
	start: function start(application) {
		const logger = (0, _logger2.default)('', this.configuration);

		application.log.silly('Draining boot logger queue...');
		application.log.drain(logger);

		logger.silly('Deploying application logger...');
		application.log.deploy(logger);

		return this;
	}
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9sb2cvaW5kZXguanMiXSwibmFtZXMiOlsiYWZ0ZXIiLCJjb25maWd1cmUiLCJhcHBsaWNhdGlvbiIsImNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0cyIsIm5hbWUiLCJsZXZlbCIsInJ1bnRpbWUiLCJhcGkiLCJsb2dsZXZlbCIsInN0YXJ0IiwibG9nZ2VyIiwibG9nIiwic2lsbHkiLCJkcmFpbiIsImRlcGxveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ2RBLFFBQU8sQ0FBQyw4QkFBRCxDQURPOztBQUdkQyxVQUhjLHFCQUdKQyxXQUhJLEVBR1M7QUFDdEIsT0FBS0MsYUFBTCxnQkFBeUIsS0FBS0EsYUFBOUIsRUFBZ0QsS0FBS0MsUUFBckQsRUFBa0VGLFlBQVlDLGFBQVosQ0FBMEIsS0FBS0UsSUFBL0IsQ0FBbEU7QUFDQSxPQUFLRixhQUFMLENBQW1CRyxLQUFuQixHQUEyQkosWUFBWUssT0FBWixDQUFvQkMsR0FBcEIsQ0FBd0JDLFFBQXhCLElBQW9DLEtBQUtOLGFBQUwsQ0FBbUJHLEtBQWxGO0FBQ0EsU0FBTyxJQUFQO0FBQ0EsRUFQYTtBQVNkSSxNQVRjLGlCQVNSUixXQVRRLEVBU0s7QUFDbEIsUUFBTVMsU0FBUyxzQkFBWSxFQUFaLEVBQWdCLEtBQUtSLGFBQXJCLENBQWY7O0FBRUFELGNBQVlVLEdBQVosQ0FBZ0JDLEtBQWhCLENBQXNCLCtCQUF0QjtBQUNBWCxjQUFZVSxHQUFaLENBQWdCRSxLQUFoQixDQUFzQkgsTUFBdEI7O0FBRUFBLFNBQU9FLEtBQVAsQ0FBYSxpQ0FBYjtBQUNBWCxjQUFZVSxHQUFaLENBQWdCRyxNQUFoQixDQUF1QkosTUFBdkI7O0FBRUEsU0FBTyxJQUFQO0FBQ0E7QUFuQmEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGFydExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0YWZ0ZXI6IFsnaG9va3M6dXNlci1ob29rczpzdGFydDphZnRlciddLFxuXG5cdGNvbmZpZ3VyZShhcHBsaWNhdGlvbikge1xuXHRcdHRoaXMuY29uZmlndXJhdGlvbiA9IHsuLi50aGlzLmNvbmZpZ3VyYXRpb24sIC4uLnRoaXMuZGVmYXVsdHMsIC4uLmFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb25bdGhpcy5uYW1lXX07XG5cdFx0dGhpcy5jb25maWd1cmF0aW9uLmxldmVsID0gYXBwbGljYXRpb24ucnVudGltZS5hcGkubG9nbGV2ZWwgfHwgdGhpcy5jb25maWd1cmF0aW9uLmxldmVsO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN0YXJ0KGFwcGxpY2F0aW9uKSB7XG5cdFx0Y29uc3QgbG9nZ2VyID0gc3RhcnRMb2dnZXIoJycsIHRoaXMuY29uZmlndXJhdGlvbik7XG5cblx0XHRhcHBsaWNhdGlvbi5sb2cuc2lsbHkoJ0RyYWluaW5nIGJvb3QgbG9nZ2VyIHF1ZXVlLi4uJyk7XG5cdFx0YXBwbGljYXRpb24ubG9nLmRyYWluKGxvZ2dlcik7XG5cblx0XHRsb2dnZXIuc2lsbHkoJ0RlcGxveWluZyBhcHBsaWNhdGlvbiBsb2dnZXIuLi4nKTtcblx0XHRhcHBsaWNhdGlvbi5sb2cuZGVwbG95KGxvZ2dlcik7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcbiJdfQ==