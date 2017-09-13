'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaBasicAuth = require('koa-basic-auth');

var _koaBasicAuth2 = _interopRequireDefault(_koaBasicAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function basicAuthMiddlewareFactory(application) {
  return function* basicAuthMiddleware(next) {
    const config = application.configuration.middlewares.enabled.basicauth;

    if (config.enabled === false) {
      yield next;
    } else {
      const authorization = (0, _koaBasicAuth2.default)(config.credentials);
      let excluded = false;

      if (config.exclude) {
        const matcher = new RegExp(config.exclude, 'g');
        excluded = matcher.test(this.path);
      }

      if (!excluded) {
        const authorize = authorization.bind(this);
        try {
          yield authorize(next);
        } catch (error) {
          if (error.status === 401) {
            this.status = 401;
            this.set('WWW-Authenticate', 'Basic');
            this.body = 'Unauthorized';
            // This.throw(401);
            return;
          }

          this.throw(error.status);
        }
      } else {
        yield next;
      }
    }
  };
}

exports.default = basicAuthMiddlewareFactory;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9taWRkbGV3YXJlcy9iYXNpY2F1dGguanMiXSwibmFtZXMiOlsiYmFzaWNBdXRoTWlkZGxld2FyZUZhY3RvcnkiLCJhcHBsaWNhdGlvbiIsImJhc2ljQXV0aE1pZGRsZXdhcmUiLCJuZXh0IiwiY29uZmlnIiwiY29uZmlndXJhdGlvbiIsIm1pZGRsZXdhcmVzIiwiZW5hYmxlZCIsImJhc2ljYXV0aCIsImF1dGhvcml6YXRpb24iLCJjcmVkZW50aWFscyIsImV4Y2x1ZGVkIiwiZXhjbHVkZSIsIm1hdGNoZXIiLCJSZWdFeHAiLCJ0ZXN0IiwicGF0aCIsImF1dGhvcml6ZSIsImJpbmQiLCJlcnJvciIsInN0YXR1cyIsInNldCIsImJvZHkiLCJ0aHJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVNBLDBCQUFULENBQW9DQyxXQUFwQyxFQUFpRDtBQUMvQyxTQUFPLFVBQVVDLG1CQUFWLENBQThCQyxJQUE5QixFQUFvQztBQUN6QyxVQUFNQyxTQUFTSCxZQUFZSSxhQUFaLENBQTBCQyxXQUExQixDQUFzQ0MsT0FBdEMsQ0FBOENDLFNBQTdEOztBQUVBLFFBQUlKLE9BQU9HLE9BQVAsS0FBbUIsS0FBdkIsRUFBOEI7QUFDNUIsWUFBTUosSUFBTjtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU1NLGdCQUFnQiw0QkFBS0wsT0FBT00sV0FBWixDQUF0QjtBQUNBLFVBQUlDLFdBQVcsS0FBZjs7QUFFQSxVQUFJUCxPQUFPUSxPQUFYLEVBQW9CO0FBQ2xCLGNBQU1DLFVBQVUsSUFBSUMsTUFBSixDQUFXVixPQUFPUSxPQUFsQixFQUEyQixHQUEzQixDQUFoQjtBQUNBRCxtQkFBV0UsUUFBUUUsSUFBUixDQUFhLEtBQUtDLElBQWxCLENBQVg7QUFDRDs7QUFFRCxVQUFJLENBQUNMLFFBQUwsRUFBZTtBQUNiLGNBQU1NLFlBQVlSLGNBQWNTLElBQWQsQ0FBbUIsSUFBbkIsQ0FBbEI7QUFDQSxZQUFJO0FBQ0YsZ0JBQU1ELFVBQVVkLElBQVYsQ0FBTjtBQUNELFNBRkQsQ0FFRSxPQUFPZ0IsS0FBUCxFQUFjO0FBQ2QsY0FBSUEsTUFBTUMsTUFBTixLQUFpQixHQUFyQixFQUEwQjtBQUN4QixpQkFBS0EsTUFBTCxHQUFjLEdBQWQ7QUFDQSxpQkFBS0MsR0FBTCxDQUFTLGtCQUFULEVBQTZCLE9BQTdCO0FBQ0EsaUJBQUtDLElBQUwsR0FBWSxjQUFaO0FBQ0E7QUFDQTtBQUNEOztBQUVELGVBQUtDLEtBQUwsQ0FBV0osTUFBTUMsTUFBakI7QUFDRDtBQUNGLE9BZkQsTUFlTztBQUNMLGNBQU1qQixJQUFOO0FBQ0Q7QUFDRjtBQUNGLEdBakNEO0FBa0NEOztrQkFFY0gsMEIiLCJmaWxlIjoiYmFzaWNhdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSAna29hLWJhc2ljLWF1dGgnO1xuXG5mdW5jdGlvbiBiYXNpY0F1dGhNaWRkbGV3YXJlRmFjdG9yeShhcHBsaWNhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24qIGJhc2ljQXV0aE1pZGRsZXdhcmUobmV4dCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24ubWlkZGxld2FyZXMuZW5hYmxlZC5iYXNpY2F1dGg7XG5cbiAgICBpZiAoY29uZmlnLmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICB5aWVsZCBuZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhdXRob3JpemF0aW9uID0gYXV0aChjb25maWcuY3JlZGVudGlhbHMpO1xuICAgICAgbGV0IGV4Y2x1ZGVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChjb25maWcuZXhjbHVkZSkge1xuICAgICAgICBjb25zdCBtYXRjaGVyID0gbmV3IFJlZ0V4cChjb25maWcuZXhjbHVkZSwgJ2cnKTtcbiAgICAgICAgZXhjbHVkZWQgPSBtYXRjaGVyLnRlc3QodGhpcy5wYXRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFleGNsdWRlZCkge1xuICAgICAgICBjb25zdCBhdXRob3JpemUgPSBhdXRob3JpemF0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgeWllbGQgYXV0aG9yaXplKG5leHQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSA0MDE7XG4gICAgICAgICAgICB0aGlzLnNldCgnV1dXLUF1dGhlbnRpY2F0ZScsICdCYXNpYycpO1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gJ1VuYXV0aG9yaXplZCc7XG4gICAgICAgICAgICAvLyBUaGlzLnRocm93KDQwMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy50aHJvdyhlcnJvci5zdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5aWVsZCBuZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzaWNBdXRoTWlkZGxld2FyZUZhY3Rvcnk7XG4iXX0=