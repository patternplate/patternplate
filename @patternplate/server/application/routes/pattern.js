'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = patternRouteFactory;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _getPatternMetaData = require('../../library/get-pattern-meta-data');

var _getPatternMetaData2 = _interopRequireDefault(_getPatternMetaData);

var _urlQuery = require('../../library/utilities/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function withErrorHandling(fn) {
	return (() => {
		var _ref = _asyncToGenerator(function* () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			const id = args[1];

			try {
				const result = yield fn.apply(undefined, args);
				if (!result) {
					const error = new Error(`Could not find pattern with id ${id}`);
					error.fileName = id;
					error.file = id;
					error.status = 404;
					throw error;
				}
				return [null, result];
			} catch (error) {
				return [error];
			}
		});

		return function () {
			return _ref.apply(this, arguments);
		};
	})();
}

function getPatternId(raw) {
	const parsed = _path2.default.parse(raw);
	const extension = getPatternExtension(raw);
	const base = _path2.default.basename(raw, _path2.default.extname(raw));

	if (base === 'index' && extension !== 'json') {
		return _path2.default.dirname(raw);
	}

	return `${_path2.default.dirname(raw)}/${_path2.default.basename(parsed.base, _path2.default.extname(parsed.base))}`;
}

function getPatternExtension(raw) {
	return _path2.default.extname(raw).slice(1) || 'html';
}

const getPatternMetaDataOrError = withErrorHandling(_getPatternMetaData2.default);

function patternRouteFactory(application) {
	return (() => {
		var _ref2 = _asyncToGenerator(function* () {
			const extname = _path2.default.extname(this.path);

			if (extname && extname !== '.json') {
				this.throw(404);
			}

			const parsed = _urlQuery2.default.parse(this.params.id);
			const id = getPatternId(parsed.pathname);
			var _parsed$query$environ = parsed.query.environment;
			const environment = _parsed$query$environ === undefined ? 'index' : _parsed$query$environ;

			var _ref3 = yield getPatternMetaDataOrError(application, id, environment);

			var _ref4 = _slicedToArray(_ref3, 2);

			const error = _ref4[0];
			const data = _ref4[1];


			if (error) {
				this.throw(error);
			}

			this.type = 'json';
			this.body = data;
		});

		function patternRoute() {
			return _ref2.apply(this, arguments);
		}

		return patternRoute;
	})();
}
module.exports = exports['default'];