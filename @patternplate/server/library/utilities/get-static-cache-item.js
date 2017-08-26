'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fs = require('fs');

var _path = require('path');

var _util = require('util');

var _arson = require('arson');

var _arson2 = _interopRequireDefault(_arson);

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _lodash = require('lodash');

var _readFile = require('../filesystem/read-file.js');

var _readFile2 = _interopRequireDefault(_readFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const debug = (0, _util.debuglog)('cache-static');

const defaults = {
	id: null,
	base: null,
	extension: 'json',
	cache: null,
	stream: false
};

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (options) {
		const settings = (0, _lodash.merge)({}, defaults, options);
		const id = settings.id;
		const base = settings.base;
		const extension = settings.extension;
		const cache = settings.cache;
		const stream = settings.stream;


		const baseName = id.split('/').join('-');
		var _settings$filters = settings.filters;
		const filters = _settings$filters === undefined ? {} : _settings$filters;

		var _ref2 = filters.environments || [];

		var _ref3 = _slicedToArray(_ref2, 1);

		const envFilter = _ref3[0];

		const envName = envFilter === 'index' ? null : envFilter;

		const name = [baseName, envName].filter(Boolean).join('--');

		const cacheFilePath = (0, _path.resolve)(base, `${name}.${extension}`);
		const readFile = (0, _readFile2.default)({ cache: cache });

		if (!(yield (0, _pathExists2.default)(cacheFilePath))) {
			debug('static cache miss for %s', cacheFilePath);
			return null;
		}

		debug('using static cache for %s', cacheFilePath);
		const cacheFileContents = stream === false ? yield readFile(cacheFilePath) : (0, _fs.createReadStream)(cacheFilePath);

		if (extension === 'json' && stream === false) {
			return _arson2.default.parse(cacheFileContents);
		}

		return cacheFileContents;
	});

	function getStaticCacheItem(_x) {
		return _ref.apply(this, arguments);
	}

	return getStaticCacheItem;
})();

module.exports = exports['default'];