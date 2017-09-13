'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = staticRouteFactory;

var _path = require('path');

var _koaSend = require('koa-send');

var _koaSend2 = _interopRequireDefault(_koaSend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function staticRouteFactory(application, configuration) {
  const root = (0, _path.resolve)(application.runtime.base, application.configuration.paths.static);
  let roots = Array.isArray(configuration.options.root) ? configuration.options.root : [configuration.options.root];

  roots = [(0, _path.resolve)(process.cwd(), application.configuration.paths.static)].concat(_toConsumableArray(roots));
  roots = roots.map(item => (0, _path.resolve)(application.runtime.cwd, item));
  roots.push(root);

  return function* staticRoute() {
    this.assert(this.params.path, 404);

    for (const root of roots) {
      yield (0, _koaSend2.default)(this, this.params.path, { root: root });

      if (this.status === 200) {
        application.log.debug(`Matched ${this.params.path} on ${root}`);
        break;
      } else {
        application.log.debug(`No match for ${this.params.path} on ${root}`);
      }
    }
  };
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvc3RhdGljLmpzIl0sIm5hbWVzIjpbInN0YXRpY1JvdXRlRmFjdG9yeSIsImFwcGxpY2F0aW9uIiwiY29uZmlndXJhdGlvbiIsInJvb3QiLCJydW50aW1lIiwiYmFzZSIsInBhdGhzIiwic3RhdGljIiwicm9vdHMiLCJBcnJheSIsImlzQXJyYXkiLCJvcHRpb25zIiwicHJvY2VzcyIsImN3ZCIsIm1hcCIsIml0ZW0iLCJwdXNoIiwic3RhdGljUm91dGUiLCJhc3NlcnQiLCJwYXJhbXMiLCJwYXRoIiwic3RhdHVzIiwibG9nIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd3QkEsa0I7O0FBSHhCOztBQUNBOzs7Ozs7OztBQUVlLFNBQVNBLGtCQUFULENBQTRCQyxXQUE1QixFQUF5Q0MsYUFBekMsRUFBd0Q7QUFDckUsUUFBTUMsT0FBTyxtQkFDWEYsWUFBWUcsT0FBWixDQUFvQkMsSUFEVCxFQUVYSixZQUFZQyxhQUFaLENBQTBCSSxLQUExQixDQUFnQ0MsTUFGckIsQ0FBYjtBQUlBLE1BQUlDLFFBQVFDLE1BQU1DLE9BQU4sQ0FBY1IsY0FBY1MsT0FBZCxDQUFzQlIsSUFBcEMsSUFDUkQsY0FBY1MsT0FBZCxDQUFzQlIsSUFEZCxHQUVSLENBQUNELGNBQWNTLE9BQWQsQ0FBc0JSLElBQXZCLENBRko7O0FBSUFLLFdBQ0UsbUJBQVFJLFFBQVFDLEdBQVIsRUFBUixFQUF1QlosWUFBWUMsYUFBWixDQUEwQkksS0FBMUIsQ0FBZ0NDLE1BQXZELENBREYsNEJBRUtDLEtBRkw7QUFJQUEsVUFBUUEsTUFBTU0sR0FBTixDQUFVQyxRQUFRLG1CQUFRZCxZQUFZRyxPQUFaLENBQW9CUyxHQUE1QixFQUFpQ0UsSUFBakMsQ0FBbEIsQ0FBUjtBQUNBUCxRQUFNUSxJQUFOLENBQVdiLElBQVg7O0FBRUEsU0FBTyxVQUFVYyxXQUFWLEdBQXdCO0FBQzdCLFNBQUtDLE1BQUwsQ0FBWSxLQUFLQyxNQUFMLENBQVlDLElBQXhCLEVBQThCLEdBQTlCOztBQUVBLFNBQUssTUFBTWpCLElBQVgsSUFBbUJLLEtBQW5CLEVBQTBCO0FBQ3hCLFlBQU0sdUJBQUssSUFBTCxFQUFXLEtBQUtXLE1BQUwsQ0FBWUMsSUFBdkIsRUFBNkIsRUFBQ2pCLFVBQUQsRUFBN0IsQ0FBTjs7QUFFQSxVQUFJLEtBQUtrQixNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3ZCcEIsb0JBQVlxQixHQUFaLENBQWdCQyxLQUFoQixDQUF1QixXQUFVLEtBQUtKLE1BQUwsQ0FBWUMsSUFBSyxPQUFNakIsSUFBSyxFQUE3RDtBQUNBO0FBQ0QsT0FIRCxNQUdPO0FBQ0xGLG9CQUFZcUIsR0FBWixDQUFnQkMsS0FBaEIsQ0FBdUIsZ0JBQWUsS0FBS0osTUFBTCxDQUFZQyxJQUFLLE9BQU1qQixJQUFLLEVBQWxFO0FBQ0Q7QUFDRjtBQUNGLEdBYkQ7QUFjRCIsImZpbGUiOiJzdGF0aWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHNlbmQgZnJvbSAna29hLXNlbmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0aWNSb3V0ZUZhY3RvcnkoYXBwbGljYXRpb24sIGNvbmZpZ3VyYXRpb24pIHtcbiAgY29uc3Qgcm9vdCA9IHJlc29sdmUoXG4gICAgYXBwbGljYXRpb24ucnVudGltZS5iYXNlLFxuICAgIGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24ucGF0aHMuc3RhdGljXG4gICk7XG4gIGxldCByb290cyA9IEFycmF5LmlzQXJyYXkoY29uZmlndXJhdGlvbi5vcHRpb25zLnJvb3QpXG4gICAgPyBjb25maWd1cmF0aW9uLm9wdGlvbnMucm9vdFxuICAgIDogW2NvbmZpZ3VyYXRpb24ub3B0aW9ucy5yb290XTtcblxuICByb290cyA9IFtcbiAgICByZXNvbHZlKHByb2Nlc3MuY3dkKCksIGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24ucGF0aHMuc3RhdGljKSxcbiAgICAuLi5yb290c1xuICBdO1xuICByb290cyA9IHJvb3RzLm1hcChpdGVtID0+IHJlc29sdmUoYXBwbGljYXRpb24ucnVudGltZS5jd2QsIGl0ZW0pKTtcbiAgcm9vdHMucHVzaChyb290KTtcblxuICByZXR1cm4gZnVuY3Rpb24qIHN0YXRpY1JvdXRlKCkge1xuICAgIHRoaXMuYXNzZXJ0KHRoaXMucGFyYW1zLnBhdGgsIDQwNCk7XG5cbiAgICBmb3IgKGNvbnN0IHJvb3Qgb2Ygcm9vdHMpIHtcbiAgICAgIHlpZWxkIHNlbmQodGhpcywgdGhpcy5wYXJhbXMucGF0aCwge3Jvb3R9KTtcblxuICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgYXBwbGljYXRpb24ubG9nLmRlYnVnKGBNYXRjaGVkICR7dGhpcy5wYXJhbXMucGF0aH0gb24gJHtyb290fWApO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwcGxpY2F0aW9uLmxvZy5kZWJ1ZyhgTm8gbWF0Y2ggZm9yICR7dGhpcy5wYXJhbXMucGF0aH0gb24gJHtyb290fWApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiJdfQ==