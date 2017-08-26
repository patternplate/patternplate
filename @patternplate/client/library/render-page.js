'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _lodash = require('lodash');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _resolve = require('resolve');

var _server = require('../application/server');

var _server2 = _interopRequireDefault(_server);

var _layouts = require('../application/layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _getIdByPathname = require('../application/utils/get-id-by-pathname');

var _getIdByPathname2 = _interopRequireDefault(_getIdByPathname);

var _navigate = require('../application/utils/navigate');

var _navigate2 = _interopRequireDefault(_navigate);

var _icon = require('../application/components/common/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cwd = process.cwd();
var resolve = function resolve(id) {
	return (0, _resolve.sync)(id, { basedir: cwd });
};

var getSchema = require('@patternplate/server/library/get-schema');

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(application, pageUrl) {
		var app, client, server, parsed, depth, base, id, config, schema, pattern, render, transfer, _ref2, html, css, head, icons;

		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						app = application.parent;
						client = application;
						server = app.server;
						parsed = _url2.default.parse(pageUrl);
						depth = parsed.pathname.split('/').filter(Boolean).length;
						base = depth > 0 ? (0, _lodash.fill)(Array(depth), '..').join('/') : '.';
						id = (0, _getIdByPathname2.default)(parsed.pathname);
						config = application.configuration.ui;
						_context.next = 10;
						return getSchema(app, client, server);

					case 10:
						schema = _context.sent;
						pattern = (0, _navigate2.default)(id, schema.meta) || {};
						render = {
							base: base,
							config: config,
							pattern: pattern,
							schema: schema,
							startBase: base
						};
						transfer = {
							base: base,
							config: config,
							pattern: { id: id },
							startBase: base
						};
						_context.next = 16;
						return (0, _server2.default)(pageUrl, render);

					case 16:
						_ref2 = _context.sent;
						html = _ref2.html;
						css = _ref2.css;
						head = _reactHelmet2.default.rewind();
						icons = _icon2.default.rewind();
						return _context.abrupt('return', (0, _layouts2.default)({
							attributes: head.htmlAttributes,
							base: base,
							css: css,
							data: transfer,
							html: html,
							icons: icons,
							link: head.link,
							meta: head.meta,
							style: head.style,
							title: head.title,
							scripts: [base + '/script/vendors.bundle.js', base + '/script/index.bundle.js']
						}));

					case 22:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	function renderPage(_x, _x2) {
		return _ref.apply(this, arguments);
	}

	return renderPage;
}();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9saWJyYXJ5L3JlbmRlci1wYWdlLmpzIl0sIm5hbWVzIjpbImN3ZCIsInByb2Nlc3MiLCJyZXNvbHZlIiwiaWQiLCJiYXNlZGlyIiwiZ2V0U2NoZW1hIiwicmVxdWlyZSIsImFwcGxpY2F0aW9uIiwicGFnZVVybCIsImFwcCIsInBhcmVudCIsImNsaWVudCIsInNlcnZlciIsInBhcnNlZCIsInBhcnNlIiwiZGVwdGgiLCJwYXRobmFtZSIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImxlbmd0aCIsImJhc2UiLCJBcnJheSIsImpvaW4iLCJjb25maWciLCJjb25maWd1cmF0aW9uIiwidWkiLCJzY2hlbWEiLCJwYXR0ZXJuIiwibWV0YSIsInJlbmRlciIsInN0YXJ0QmFzZSIsInRyYW5zZmVyIiwiaHRtbCIsImNzcyIsImhlYWQiLCJyZXdpbmQiLCJpY29ucyIsImF0dHJpYnV0ZXMiLCJodG1sQXR0cmlidXRlcyIsImRhdGEiLCJsaW5rIiwic3R5bGUiLCJ0aXRsZSIsInNjcmlwdHMiLCJyZW5kZXJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRRCxHQUFSLEVBQVo7QUFDQSxJQUFNRSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxRQUFNLG1CQUFZQyxFQUFaLEVBQWdCLEVBQUNDLFNBQVNKLEdBQVYsRUFBaEIsQ0FBTjtBQUFBLENBQWhCOztBQUVBLElBQU1LLFlBQVlDLFFBQVEseUNBQVIsQ0FBbEI7OztxRkFFZSxpQkFBMEJDLFdBQTFCLEVBQXVDQyxPQUF2QztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLFNBRFEsR0FDRkYsWUFBWUcsTUFEVjtBQUVSQyxZQUZRLEdBRUNKLFdBRkQ7QUFHUkssWUFIUSxHQUdDSCxJQUFJRyxNQUhMO0FBSVJDLFlBSlEsR0FJQyxjQUFJQyxLQUFKLENBQVVOLE9BQVYsQ0FKRDtBQUtSTyxXQUxRLEdBS0FGLE9BQU9HLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCQyxNQUEzQixDQUFrQ0MsT0FBbEMsRUFBMkNDLE1BTDNDO0FBTVJDLFVBTlEsR0FNRE4sUUFBUSxDQUFSLEdBQVksa0JBQUtPLE1BQU1QLEtBQU4sQ0FBTCxFQUFtQixJQUFuQixFQUF5QlEsSUFBekIsQ0FBOEIsR0FBOUIsQ0FBWixHQUFpRCxHQU5oRDtBQU9ScEIsUUFQUSxHQU9ILCtCQUFnQlUsT0FBT0csUUFBdkIsQ0FQRztBQVFSUSxZQVJRLEdBUUNqQixZQUFZa0IsYUFBWixDQUEwQkMsRUFSM0I7QUFBQTtBQUFBLGFBU09yQixVQUFVSSxHQUFWLEVBQWVFLE1BQWYsRUFBdUJDLE1BQXZCLENBVFA7O0FBQUE7QUFTUmUsWUFUUTtBQVVSQyxhQVZRLEdBVUUsd0JBQVN6QixFQUFULEVBQWF3QixPQUFPRSxJQUFwQixLQUE2QixFQVYvQjtBQVlSQyxZQVpRLEdBWUM7QUFDZFQsaUJBRGM7QUFFZEcscUJBRmM7QUFHZEksdUJBSGM7QUFJZEQscUJBSmM7QUFLZEksa0JBQVdWO0FBTEcsT0FaRDtBQW9CUlcsY0FwQlEsR0FvQkc7QUFDaEJYLGlCQURnQjtBQUVoQkcscUJBRmdCO0FBR2hCSSxnQkFBUyxFQUFDekIsTUFBRCxFQUhPO0FBSWhCNEIsa0JBQVdWO0FBSkssT0FwQkg7QUFBQTtBQUFBLGFBMkJZLHNCQUFPYixPQUFQLEVBQWdCc0IsTUFBaEIsQ0EzQlo7O0FBQUE7QUFBQTtBQTJCUEcsVUEzQk8sU0EyQlBBLElBM0JPO0FBMkJEQyxTQTNCQyxTQTJCREEsR0EzQkM7QUE0QlJDLFVBNUJRLEdBNEJELHNCQUFPQyxNQUFQLEVBNUJDO0FBNkJSQyxXQTdCUSxHQTZCQSxlQUFLRCxNQUFMLEVBN0JBO0FBQUEsdUNBK0JQLHVCQUFPO0FBQ2JFLG1CQUFZSCxLQUFLSSxjQURKO0FBRWJsQixpQkFGYTtBQUdiYSxlQUhhO0FBSWJNLGFBQU1SLFFBSk87QUFLYkMsaUJBTGE7QUFNYkksbUJBTmE7QUFPYkksYUFBTU4sS0FBS00sSUFQRTtBQVFiWixhQUFNTSxLQUFLTixJQVJFO0FBU2JhLGNBQU9QLEtBQUtPLEtBVEM7QUFVYkMsY0FBT1IsS0FBS1EsS0FWQztBQVdiQyxnQkFBUyxDQUNMdkIsSUFESyxnQ0FFTEEsSUFGSztBQVhJLE9BQVAsQ0EvQk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRTs7VUFBZXdCLFU7Ozs7UUFBQUEsVSIsImZpbGUiOiJyZW5kZXItcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1cmwgZnJvbSAndXJsJztcblxuaW1wb3J0IHtmaWxsfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHtzeW5jIGFzIHJlc29sdmVTeW5jfSBmcm9tICdyZXNvbHZlJztcblxuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9hcHBsaWNhdGlvbi9zZXJ2ZXInO1xuaW1wb3J0IGxheW91dCBmcm9tICcuLi9hcHBsaWNhdGlvbi9sYXlvdXRzJztcbmltcG9ydCBnZXRJZEJ5UGF0aG5hbWUgZnJvbSAnLi4vYXBwbGljYXRpb24vdXRpbHMvZ2V0LWlkLWJ5LXBhdGhuYW1lJztcbmltcG9ydCBuYXZpZ2F0ZSBmcm9tICcuLi9hcHBsaWNhdGlvbi91dGlscy9uYXZpZ2F0ZSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2NvbW1vbi9pY29uJztcblxuY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKTtcbmNvbnN0IHJlc29sdmUgPSBpZCA9PiByZXNvbHZlU3luYyhpZCwge2Jhc2VkaXI6IGN3ZH0pO1xuXG5jb25zdCBnZXRTY2hlbWEgPSByZXF1aXJlKCdAcGF0dGVybnBsYXRlL3NlcnZlci9saWJyYXJ5L2dldC1zY2hlbWEnKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUGFnZShhcHBsaWNhdGlvbiwgcGFnZVVybCkge1xuXHRjb25zdCBhcHAgPSBhcHBsaWNhdGlvbi5wYXJlbnQ7XG5cdGNvbnN0IGNsaWVudCA9IGFwcGxpY2F0aW9uO1xuXHRjb25zdCBzZXJ2ZXIgPSBhcHAuc2VydmVyO1xuXHRjb25zdCBwYXJzZWQgPSB1cmwucGFyc2UocGFnZVVybCk7XG5cdGNvbnN0IGRlcHRoID0gcGFyc2VkLnBhdGhuYW1lLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aDtcblx0Y29uc3QgYmFzZSA9IGRlcHRoID4gMCA/IGZpbGwoQXJyYXkoZGVwdGgpLCAnLi4nKS5qb2luKCcvJykgOiAnLic7XG5cdGNvbnN0IGlkID0gZ2V0SWRCeVBhdGhuYW1lKHBhcnNlZC5wYXRobmFtZSk7XG5cdGNvbnN0IGNvbmZpZyA9IGFwcGxpY2F0aW9uLmNvbmZpZ3VyYXRpb24udWk7XG5cdGNvbnN0IHNjaGVtYSA9IGF3YWl0IGdldFNjaGVtYShhcHAsIGNsaWVudCwgc2VydmVyKTtcblx0Y29uc3QgcGF0dGVybiA9IG5hdmlnYXRlKGlkLCBzY2hlbWEubWV0YSkgfHwge307XG5cblx0Y29uc3QgcmVuZGVyID0ge1xuXHRcdGJhc2UsXG5cdFx0Y29uZmlnLFxuXHRcdHBhdHRlcm4sXG5cdFx0c2NoZW1hLFxuXHRcdHN0YXJ0QmFzZTogYmFzZVxuXHR9O1xuXG5cdGNvbnN0IHRyYW5zZmVyID0ge1xuXHRcdGJhc2UsXG5cdFx0Y29uZmlnLFxuXHRcdHBhdHRlcm46IHtpZH0sXG5cdFx0c3RhcnRCYXNlOiBiYXNlXG5cdH07XG5cblx0Y29uc3Qge2h0bWwsIGNzc30gPSBhd2FpdCByb3V0ZXIocGFnZVVybCwgcmVuZGVyKTtcblx0Y29uc3QgaGVhZCA9IEhlbG1ldC5yZXdpbmQoKTtcblx0Y29uc3QgaWNvbnMgPSBJY29uLnJld2luZCgpO1xuXG5cdHJldHVybiBsYXlvdXQoe1xuXHRcdGF0dHJpYnV0ZXM6IGhlYWQuaHRtbEF0dHJpYnV0ZXMsXG5cdFx0YmFzZSxcblx0XHRjc3MsXG5cdFx0ZGF0YTogdHJhbnNmZXIsXG5cdFx0aHRtbCxcblx0XHRpY29ucyxcblx0XHRsaW5rOiBoZWFkLmxpbmssXG5cdFx0bWV0YTogaGVhZC5tZXRhLFxuXHRcdHN0eWxlOiBoZWFkLnN0eWxlLFxuXHRcdHRpdGxlOiBoZWFkLnRpdGxlLFxuXHRcdHNjcmlwdHM6IFtcblx0XHRcdGAke2Jhc2V9L3NjcmlwdC92ZW5kb3JzLmJ1bmRsZS5qc2AsXG5cdFx0XHRgJHtiYXNlfS9zY3JpcHQvaW5kZXguYnVuZGxlLmpzYFxuXHRcdF1cblx0fSk7XG59XG4iXX0=