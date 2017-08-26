'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = require('fs');

var _path = require('path');

var _fs2 = require('mz/fs');

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function devRequire(id) {
	var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if (process.env.NODE_ENV !== 'production') {
		return require(id);
	}
	return fallback;
}

function styleRouteFactory(application) {
	var cwd = application.runtime.cwd;


	return function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var staticPath, name, path, less, Autoprefix, Cleancss, NpmImport, autoprefix, cleancss, npmimport, buffer, results;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							staticPath = (0, _path.resolve)(cwd, 'assets', 'style', this.params.path);


							this.type = 'css';

							_context.next = 4;
							return (0, _pathExists2.default)(staticPath);

						case 4:
							if (!_context.sent) {
								_context.next = 7;
								break;
							}

							this.body = (0, _fs.createReadStream)(staticPath);
							return _context.abrupt('return');

						case 7:

							if (process.env.NODE_ENV === 'production') {
								this.throw(404);
							}

							name = (this.params.path || '').replace('.css', '.less');
							path = (0, _path.resolve)(application.runtime.cwd, 'assets', 'style', name);
							_context.next = 12;
							return (0, _pathExists2.default)(path);

						case 12:
							if (_context.sent) {
								_context.next = 14;
								break;
							}

							this.throw(404);

						case 14:
							_context.prev = 14;
							less = devRequire('less');
							Autoprefix = devRequire('less-plugin-autoprefix', function () {});
							Cleancss = devRequire('less-plugin-clean-css', function () {});
							NpmImport = devRequire('less-plugin-npm-import', function () {});
							autoprefix = new Autoprefix({ browser: ['IE 8', 'last 2 versions'] });
							cleancss = new Cleancss({ advanced: true });
							npmimport = new NpmImport();
							_context.next = 24;
							return (0, _fs2.readFile)(path);

						case 24:
							buffer = _context.sent;
							_context.next = 27;
							return less.render(buffer.toString(), {
								paths: [(0, _path.dirname)(path)],
								plugins: [npmimport, autoprefix, cleancss]
							});

						case 27:
							results = _context.sent;


							this.type = 'css';
							this.body = results.css;
							_context.next = 36;
							break;

						case 32:
							_context.prev = 32;
							_context.t0 = _context['catch'](14);

							application.log.error(_context.t0);
							this.throw(_context.t0, 500);

						case 36:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[14, 32]]);
		}));

		function styleRoute() {
			return _ref.apply(this, arguments);
		}

		return styleRoute;
	}();
}

exports.default = styleRouteFactory;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yb3V0ZXMvc3R5bGUuanMiXSwibmFtZXMiOlsiZGV2UmVxdWlyZSIsImlkIiwiZmFsbGJhY2siLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJyZXF1aXJlIiwic3R5bGVSb3V0ZUZhY3RvcnkiLCJhcHBsaWNhdGlvbiIsImN3ZCIsInJ1bnRpbWUiLCJzdGF0aWNQYXRoIiwicGFyYW1zIiwicGF0aCIsInR5cGUiLCJib2R5IiwidGhyb3ciLCJuYW1lIiwicmVwbGFjZSIsImxlc3MiLCJBdXRvcHJlZml4IiwiQ2xlYW5jc3MiLCJOcG1JbXBvcnQiLCJhdXRvcHJlZml4IiwiYnJvd3NlciIsImNsZWFuY3NzIiwiYWR2YW5jZWQiLCJucG1pbXBvcnQiLCJidWZmZXIiLCJyZW5kZXIiLCJ0b1N0cmluZyIsInBhdGhzIiwicGx1Z2lucyIsInJlc3VsdHMiLCJjc3MiLCJsb2ciLCJlcnJvciIsInN0eWxlUm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQXVDO0FBQUEsS0FBZkMsUUFBZSx1RUFBSixFQUFJOztBQUN0QyxLQUFJQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDMUMsU0FBT0MsUUFBUUwsRUFBUixDQUFQO0FBQ0E7QUFDRCxRQUFPQyxRQUFQO0FBQ0E7O0FBRUQsU0FBU0ssaUJBQVQsQ0FBMkJDLFdBQTNCLEVBQXdDO0FBQUEsS0FDdEJDLEdBRHNCLEdBQ2RELFdBRGMsQ0FDaENFLE9BRGdDLENBQ3RCRCxHQURzQjs7O0FBR3ZDO0FBQUEsc0ZBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FFLGlCQURBLEdBQ2EsbUJBQVFGLEdBQVIsRUFBYSxRQUFiLEVBQXVCLE9BQXZCLEVBQWdDLEtBQUtHLE1BQUwsQ0FBWUMsSUFBNUMsQ0FEYjs7O0FBR04sWUFBS0MsSUFBTCxHQUFZLEtBQVo7O0FBSE07QUFBQSxjQUtJLDBCQUFPSCxVQUFQLENBTEo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNTCxZQUFLSSxJQUFMLEdBQVksMEJBQWlCSixVQUFqQixDQUFaO0FBTks7O0FBQUE7O0FBVU4sV0FBSVIsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQzFDLGFBQUtXLEtBQUwsQ0FBVyxHQUFYO0FBQ0E7O0FBRUtDLFdBZEEsR0FjTyxDQUFDLEtBQUtMLE1BQUwsQ0FBWUMsSUFBWixJQUFvQixFQUFyQixFQUF5QkssT0FBekIsQ0FBaUMsTUFBakMsRUFBeUMsT0FBekMsQ0FkUDtBQWVBTCxXQWZBLEdBZU8sbUJBQVFMLFlBQVlFLE9BQVosQ0FBb0JELEdBQTVCLEVBQWlDLFFBQWpDLEVBQTJDLE9BQTNDLEVBQW9EUSxJQUFwRCxDQWZQO0FBQUE7QUFBQSxjQWlCSywwQkFBT0osSUFBUCxDQWpCTDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCTCxZQUFLRyxLQUFMLENBQVcsR0FBWDs7QUFsQks7QUFBQTtBQXNCQ0csV0F0QkQsR0FzQlFuQixXQUFXLE1BQVgsQ0F0QlI7QUF1QkNvQixpQkF2QkQsR0F1QmNwQixXQUFXLHdCQUFYLEVBQXFDLFlBQU0sQ0FBRSxDQUE3QyxDQXZCZDtBQXdCQ3FCLGVBeEJELEdBd0JZckIsV0FBVyx1QkFBWCxFQUFvQyxZQUFNLENBQUUsQ0FBNUMsQ0F4Qlo7QUF5QkNzQixnQkF6QkQsR0F5QmF0QixXQUFXLHdCQUFYLEVBQXFDLFlBQU0sQ0FBRSxDQUE3QyxDQXpCYjtBQTJCQ3VCLGlCQTNCRCxHQTJCYyxJQUFJSCxVQUFKLENBQWUsRUFBQ0ksU0FBUyxDQUFDLE1BQUQsRUFBUyxpQkFBVCxDQUFWLEVBQWYsQ0EzQmQ7QUE0QkNDLGVBNUJELEdBNEJZLElBQUlKLFFBQUosQ0FBYSxFQUFDSyxVQUFVLElBQVgsRUFBYixDQTVCWjtBQTZCQ0MsZ0JBN0JELEdBNkJhLElBQUlMLFNBQUosRUE3QmI7QUFBQTtBQUFBLGNBK0JnQixtQkFBU1QsSUFBVCxDQS9CaEI7O0FBQUE7QUErQkNlLGFBL0JEO0FBQUE7QUFBQSxjQWdDaUJULEtBQUtVLE1BQUwsQ0FBWUQsT0FBT0UsUUFBUCxFQUFaLEVBQStCO0FBQ3BEQyxlQUFPLENBQUMsbUJBQVFsQixJQUFSLENBQUQsQ0FENkM7QUFFcERtQixpQkFBUyxDQUFDTCxTQUFELEVBQVlKLFVBQVosRUFBd0JFLFFBQXhCO0FBRjJDLFFBQS9CLENBaENqQjs7QUFBQTtBQWdDQ1EsY0FoQ0Q7OztBQXFDTCxZQUFLbkIsSUFBTCxHQUFZLEtBQVo7QUFDQSxZQUFLQyxJQUFMLEdBQVlrQixRQUFRQyxHQUFwQjtBQXRDSztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUF3Q0wxQixtQkFBWTJCLEdBQVosQ0FBZ0JDLEtBQWhCO0FBQ0EsWUFBS3BCLEtBQUwsY0FBZ0IsR0FBaEI7O0FBekNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVA7O0FBQUEsV0FBc0JxQixVQUF0QjtBQUFBO0FBQUE7O0FBQUEsU0FBc0JBLFVBQXRCO0FBQUE7QUE0Q0E7O2tCQUVjOUIsaUIiLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVJlYWRTdHJlYW19IGZyb20gJ2ZzJztcbmltcG9ydCB7ZGlybmFtZSwgcmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7cmVhZEZpbGV9IGZyb20gJ216L2ZzJztcbmltcG9ydCBleGlzdHMgZnJvbSAncGF0aC1leGlzdHMnO1xuXG5mdW5jdGlvbiBkZXZSZXF1aXJlKGlkLCBmYWxsYmFjayA9IHt9KSB7XG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdFx0cmV0dXJuIHJlcXVpcmUoaWQpO1xuXHR9XG5cdHJldHVybiBmYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gc3R5bGVSb3V0ZUZhY3RvcnkoYXBwbGljYXRpb24pIHtcblx0Y29uc3Qge3J1bnRpbWU6IHtjd2R9fSA9IGFwcGxpY2F0aW9uO1xuXG5cdHJldHVybiBhc3luYyBmdW5jdGlvbiBzdHlsZVJvdXRlKCkge1xuXHRcdGNvbnN0IHN0YXRpY1BhdGggPSByZXNvbHZlKGN3ZCwgJ2Fzc2V0cycsICdzdHlsZScsIHRoaXMucGFyYW1zLnBhdGgpO1xuXG5cdFx0dGhpcy50eXBlID0gJ2Nzcyc7XG5cblx0XHRpZiAoYXdhaXQgZXhpc3RzKHN0YXRpY1BhdGgpKSB7XG5cdFx0XHR0aGlzLmJvZHkgPSBjcmVhdGVSZWFkU3RyZWFtKHN0YXRpY1BhdGgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdFx0XHR0aGlzLnRocm93KDQwNCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmFtZSA9ICh0aGlzLnBhcmFtcy5wYXRoIHx8ICcnKS5yZXBsYWNlKCcuY3NzJywgJy5sZXNzJyk7XG5cdFx0Y29uc3QgcGF0aCA9IHJlc29sdmUoYXBwbGljYXRpb24ucnVudGltZS5jd2QsICdhc3NldHMnLCAnc3R5bGUnLCBuYW1lKTtcblxuXHRcdGlmICghYXdhaXQgZXhpc3RzKHBhdGgpKSB7XG5cdFx0XHR0aGlzLnRocm93KDQwNCk7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGxlc3MgPSBkZXZSZXF1aXJlKCdsZXNzJyk7XG5cdFx0XHRjb25zdCBBdXRvcHJlZml4ID0gZGV2UmVxdWlyZSgnbGVzcy1wbHVnaW4tYXV0b3ByZWZpeCcsICgpID0+IHt9KTtcblx0XHRcdGNvbnN0IENsZWFuY3NzID0gZGV2UmVxdWlyZSgnbGVzcy1wbHVnaW4tY2xlYW4tY3NzJywgKCkgPT4ge30pO1xuXHRcdFx0Y29uc3QgTnBtSW1wb3J0ID0gZGV2UmVxdWlyZSgnbGVzcy1wbHVnaW4tbnBtLWltcG9ydCcsICgpID0+IHt9KTtcblxuXHRcdFx0Y29uc3QgYXV0b3ByZWZpeCA9IG5ldyBBdXRvcHJlZml4KHticm93c2VyOiBbJ0lFIDgnLCAnbGFzdCAyIHZlcnNpb25zJ119KTtcblx0XHRcdGNvbnN0IGNsZWFuY3NzID0gbmV3IENsZWFuY3NzKHthZHZhbmNlZDogdHJ1ZX0pO1xuXHRcdFx0Y29uc3QgbnBtaW1wb3J0ID0gbmV3IE5wbUltcG9ydCgpO1xuXG5cdFx0XHRjb25zdCBidWZmZXIgPSBhd2FpdCByZWFkRmlsZShwYXRoKTtcblx0XHRcdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBsZXNzLnJlbmRlcihidWZmZXIudG9TdHJpbmcoKSwge1xuXHRcdFx0XHRwYXRoczogW2Rpcm5hbWUocGF0aCldLFxuXHRcdFx0XHRwbHVnaW5zOiBbbnBtaW1wb3J0LCBhdXRvcHJlZml4LCBjbGVhbmNzc11cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnR5cGUgPSAnY3NzJztcblx0XHRcdHRoaXMuYm9keSA9IHJlc3VsdHMuY3NzO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0YXBwbGljYXRpb24ubG9nLmVycm9yKGVycik7XG5cdFx0XHR0aGlzLnRocm93KGVyciwgNTAwKTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlUm91dGVGYWN0b3J5O1xuIl19