'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = startEtagsMiddleware;

var _koaConditionalGet = require('koa-conditional-get');

var _koaConditionalGet2 = _interopRequireDefault(_koaConditionalGet);

var _koaEtag = require('koa-etag');

var _koaEtag2 = _interopRequireDefault(_koaEtag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startEtagsMiddleware(application) {
	application.engine.use((0, _koaConditionalGet2.default)());

	application.engine.use(function* test(next) {
		yield next;
	});

	return (0, _koaEtag2.default)();
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9taWRkbGV3YXJlcy9ldGFncy5qcyJdLCJuYW1lcyI6WyJzdGFydEV0YWdzTWlkZGxld2FyZSIsImFwcGxpY2F0aW9uIiwiZW5naW5lIiwidXNlIiwidGVzdCIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd3QkEsb0I7O0FBSHhCOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLG9CQUFULENBQWdDQyxXQUFoQyxFQUE4QztBQUM1REEsYUFBWUMsTUFBWixDQUFtQkMsR0FBbkIsQ0FBdUIsa0NBQXZCOztBQUVBRixhQUFZQyxNQUFaLENBQW1CQyxHQUFuQixDQUF1QixVQUFXQyxJQUFYLENBQWdCQyxJQUFoQixFQUFzQjtBQUM1QyxRQUFNQSxJQUFOO0FBQ0EsRUFGRDs7QUFJQSxRQUFPLHdCQUFQO0FBQ0EiLCJmaWxlIjoiZXRhZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZGl0aW9uYWwgZnJvbSAna29hLWNvbmRpdGlvbmFsLWdldCc7XG5pbXBvcnQgZXRhZyBmcm9tICdrb2EtZXRhZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0RXRhZ3NNaWRkbGV3YXJlICggYXBwbGljYXRpb24gKSB7XG5cdGFwcGxpY2F0aW9uLmVuZ2luZS51c2UoY29uZGl0aW9uYWwoKSk7XG5cblx0YXBwbGljYXRpb24uZW5naW5lLnVzZShmdW5jdGlvbiAqIHRlc3QobmV4dCkge1xuXHRcdHlpZWxkIG5leHQ7XG5cdH0pO1xuXG5cdHJldHVybiBldGFnKCk7XG59XG4iXX0=