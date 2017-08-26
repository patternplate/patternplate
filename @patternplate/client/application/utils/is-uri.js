'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isURI;

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isURI(input) {
	var _url$parse = _url2.default.parse(input),
	    host = _url$parse.host,
	    hostname = _url$parse.hostname;

	return [host, hostname].every(Boolean);
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9pcy11cmkuanMiXSwibmFtZXMiOlsiaXNVUkkiLCJpbnB1dCIsInBhcnNlIiwiaG9zdCIsImhvc3RuYW1lIiwiZXZlcnkiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLEs7O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQSxrQkFDWCxjQUFJQyxLQUFKLENBQVVELEtBQVYsQ0FEVztBQUFBLEtBQzdCRSxJQUQ2QixjQUM3QkEsSUFENkI7QUFBQSxLQUN2QkMsUUFEdUIsY0FDdkJBLFFBRHVCOztBQUVwQyxRQUFPLENBQUNELElBQUQsRUFBT0MsUUFBUCxFQUFpQkMsS0FBakIsQ0FBdUJDLE9BQXZCLENBQVA7QUFDQSIsImZpbGUiOiJpcy11cmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVVJJKGlucHV0KSB7XG5cdGNvbnN0IHtob3N0LCBob3N0bmFtZX0gPSB1cmwucGFyc2UoaW5wdXQpO1xuXHRyZXR1cm4gW2hvc3QsIGhvc3RuYW1lXS5ldmVyeShCb29sZWFuKTtcbn1cbiJdfQ==