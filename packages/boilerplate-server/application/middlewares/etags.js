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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9taWRkbGV3YXJlcy9ldGFncy5qcyJdLCJuYW1lcyI6WyJzdGFydEV0YWdzTWlkZGxld2FyZSIsImFwcGxpY2F0aW9uIiwiZW5naW5lIiwidXNlIiwidGVzdCIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd3QkEsb0I7O0FBSHhCOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLG9CQUFULENBQThCQyxXQUE5QixFQUEyQztBQUN4REEsY0FBWUMsTUFBWixDQUFtQkMsR0FBbkIsQ0FBdUIsa0NBQXZCOztBQUVBRixjQUFZQyxNQUFaLENBQW1CQyxHQUFuQixDQUF1QixVQUFVQyxJQUFWLENBQWVDLElBQWYsRUFBcUI7QUFDMUMsVUFBTUEsSUFBTjtBQUNELEdBRkQ7O0FBSUEsU0FBTyx3QkFBUDtBQUNEIiwiZmlsZSI6ImV0YWdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmRpdGlvbmFsIGZyb20gJ2tvYS1jb25kaXRpb25hbC1nZXQnO1xuaW1wb3J0IGV0YWcgZnJvbSAna29hLWV0YWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydEV0YWdzTWlkZGxld2FyZShhcHBsaWNhdGlvbikge1xuICBhcHBsaWNhdGlvbi5lbmdpbmUudXNlKGNvbmRpdGlvbmFsKCkpO1xuXG4gIGFwcGxpY2F0aW9uLmVuZ2luZS51c2UoZnVuY3Rpb24qIHRlc3QobmV4dCkge1xuICAgIHlpZWxkIG5leHQ7XG4gIH0pO1xuXG4gIHJldHVybiBldGFnKCk7XG59XG4iXX0=