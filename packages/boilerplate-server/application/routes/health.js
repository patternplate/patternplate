"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = healthRouteFactory;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function healthRouteFactory(application) {
  return (() => {
    var _ref = _asyncToGenerator(function* () {
      this.body = {
        name: application.name,
        healthy: true
      };
    });

    function healthRoute() {
      return _ref.apply(this, arguments);
    }

    return healthRoute;
  })();
}
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvaGVhbHRoLmpzIl0sIm5hbWVzIjpbImhlYWx0aFJvdXRlRmFjdG9yeSIsImFwcGxpY2F0aW9uIiwiYm9keSIsIm5hbWUiLCJoZWFsdGh5IiwiaGVhbHRoUm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsa0I7Ozs7QUFBVCxTQUFTQSxrQkFBVCxDQUE0QkMsV0FBNUIsRUFBeUM7QUFDdEQ7QUFBQSxpQ0FBTyxhQUE2QjtBQUNsQyxXQUFLQyxJQUFMLEdBQVk7QUFDVkMsY0FBTUYsWUFBWUUsSUFEUjtBQUVWQyxpQkFBUztBQUZDLE9BQVo7QUFJRCxLQUxEOztBQUFBLGFBQXNCQyxXQUF0QjtBQUFBO0FBQUE7O0FBQUEsV0FBc0JBLFdBQXRCO0FBQUE7QUFNRCIsImZpbGUiOiJoZWFsdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFsdGhSb3V0ZUZhY3RvcnkoYXBwbGljYXRpb24pIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIGhlYWx0aFJvdXRlKCkge1xuICAgIHRoaXMuYm9keSA9IHtcbiAgICAgIG5hbWU6IGFwcGxpY2F0aW9uLm5hbWUsXG4gICAgICBoZWFsdGh5OiB0cnVlXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==