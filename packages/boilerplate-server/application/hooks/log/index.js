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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9ob29rcy9sb2cvaW5kZXguanMiXSwibmFtZXMiOlsiYWZ0ZXIiLCJjb25maWd1cmUiLCJhcHBsaWNhdGlvbiIsImNvbmZpZ3VyYXRpb24iLCJkZWZhdWx0cyIsIm5hbWUiLCJsZXZlbCIsInJ1bnRpbWUiLCJhcGkiLCJsb2dsZXZlbCIsInN0YXJ0IiwibG9nZ2VyIiwibG9nIiwic2lsbHkiLCJkcmFpbiIsImRlcGxveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ2JBLFNBQU8sQ0FBQyw4QkFBRCxDQURNOztBQUdiQyxXQUhhLHFCQUdIQyxXQUhHLEVBR1U7QUFDckIsU0FBS0MsYUFBTCxnQkFDSyxLQUFLQSxhQURWLEVBRUssS0FBS0MsUUFGVixFQUdLRixZQUFZQyxhQUFaLENBQTBCLEtBQUtFLElBQS9CLENBSEw7QUFLQSxTQUFLRixhQUFMLENBQW1CRyxLQUFuQixHQUNFSixZQUFZSyxPQUFaLENBQW9CQyxHQUFwQixDQUF3QkMsUUFBeEIsSUFBb0MsS0FBS04sYUFBTCxDQUFtQkcsS0FEekQ7QUFFQSxXQUFPLElBQVA7QUFDRCxHQVpZO0FBY2JJLE9BZGEsaUJBY1BSLFdBZE8sRUFjTTtBQUNqQixVQUFNUyxTQUFTLHNCQUFZLEVBQVosRUFBZ0IsS0FBS1IsYUFBckIsQ0FBZjs7QUFFQUQsZ0JBQVlVLEdBQVosQ0FBZ0JDLEtBQWhCLENBQXNCLCtCQUF0QjtBQUNBWCxnQkFBWVUsR0FBWixDQUFnQkUsS0FBaEIsQ0FBc0JILE1BQXRCOztBQUVBQSxXQUFPRSxLQUFQLENBQWEsaUNBQWI7QUFDQVgsZ0JBQVlVLEdBQVosQ0FBZ0JHLE1BQWhCLENBQXVCSixNQUF2Qjs7QUFFQSxXQUFPLElBQVA7QUFDRDtBQXhCWSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXJ0TG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhZnRlcjogWydob29rczp1c2VyLWhvb2tzOnN0YXJ0OmFmdGVyJ10sXG5cbiAgY29uZmlndXJlKGFwcGxpY2F0aW9uKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0ge1xuICAgICAgLi4udGhpcy5jb25maWd1cmF0aW9uLFxuICAgICAgLi4udGhpcy5kZWZhdWx0cyxcbiAgICAgIC4uLmFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb25bdGhpcy5uYW1lXVxuICAgIH07XG4gICAgdGhpcy5jb25maWd1cmF0aW9uLmxldmVsID1cbiAgICAgIGFwcGxpY2F0aW9uLnJ1bnRpbWUuYXBpLmxvZ2xldmVsIHx8IHRoaXMuY29uZmlndXJhdGlvbi5sZXZlbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBzdGFydChhcHBsaWNhdGlvbikge1xuICAgIGNvbnN0IGxvZ2dlciA9IHN0YXJ0TG9nZ2VyKCcnLCB0aGlzLmNvbmZpZ3VyYXRpb24pO1xuXG4gICAgYXBwbGljYXRpb24ubG9nLnNpbGx5KCdEcmFpbmluZyBib290IGxvZ2dlciBxdWV1ZS4uLicpO1xuICAgIGFwcGxpY2F0aW9uLmxvZy5kcmFpbihsb2dnZXIpO1xuXG4gICAgbG9nZ2VyLnNpbGx5KCdEZXBsb3lpbmcgYXBwbGljYXRpb24gbG9nZ2VyLi4uJyk7XG4gICAgYXBwbGljYXRpb24ubG9nLmRlcGxveShsb2dnZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG4iXX0=