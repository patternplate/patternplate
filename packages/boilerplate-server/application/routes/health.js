'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = healthRouteFactory;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function healthRouteFactory(application) {
	return (() => {
		var _ref = _asyncToGenerator(function* () {
			this.body = {
				'name': application.name,
				'healthy': true
			};
		});

		function healthRoute() {
			return _ref.apply(this, arguments);
		}

		return healthRoute;
	})();
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvaGVhbHRoLmpzIl0sIm5hbWVzIjpbImhlYWx0aFJvdXRlRmFjdG9yeSIsImFwcGxpY2F0aW9uIiwiYm9keSIsIm5hbWUiLCJoZWFsdGhSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxrQjs7OztBQUFULFNBQVNBLGtCQUFULENBQThCQyxXQUE5QixFQUE0QztBQUMxRDtBQUFBLCtCQUFPLGFBQThCO0FBQ3BDLFFBQUtDLElBQUwsR0FBWTtBQUNYLFlBQVFELFlBQVlFLElBRFQ7QUFFWCxlQUFXO0FBRkEsSUFBWjtBQUlBLEdBTEQ7O0FBQUEsV0FBc0JDLFdBQXRCO0FBQUE7QUFBQTs7QUFBQSxTQUFzQkEsV0FBdEI7QUFBQTtBQU1BIiwiZmlsZSI6ImhlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWx0aFJvdXRlRmFjdG9yeSAoIGFwcGxpY2F0aW9uICkge1xuXHRyZXR1cm4gYXN5bmMgZnVuY3Rpb24gaGVhbHRoUm91dGUgKCkge1xuXHRcdHRoaXMuYm9keSA9IHtcblx0XHRcdCduYW1lJzogYXBwbGljYXRpb24ubmFtZSxcblx0XHRcdCdoZWFsdGh5JzogdHJ1ZVxuXHRcdH07XG5cdH07XG59XG4iXX0=