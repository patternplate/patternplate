'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = fileRouteFactory;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _getPatternSource = require('../../library/get-pattern-source');

var _getPatternSource2 = _interopRequireDefault(_getPatternSource);

var _urlQuery = require('../../library/utilities/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function fileRouteFactory(application) {
	const getPatternSource = (0, _getPatternSource2.default)(application);
	return (() => {
		var _ref = _asyncToGenerator(function* () {
			const extname = _path2.default.extname(this.path);
			const format = extname.slice(1);

			var _urlQuery$parse = _urlQuery2.default.parse(this.params.id);

			const pathname = _urlQuery$parse.pathname;
			const query = _urlQuery$parse.query;

			const type = query.type;
			const environment = query.environment;

			if (!format) {
				this.throw(404);
			}

			if (!type || !['source', 'transformed'].includes(type)) {
				this.throw(404);
			}

			if (!environment) {
				this.throw(404);
			}

			const source = yield getPatternSource(pathname, type, environment);
			this.type = source.type;
			this.body = source.body;
		});

		function fileRoute() {
			return _ref.apply(this, arguments);
		}

		return fileRoute;
	})();
}
module.exports = exports['default'];