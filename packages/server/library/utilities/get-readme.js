'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let getExistingBaseName = (() => {
	var _ref = _asyncToGenerator(function* (basePath, baseNames) {
		const exist = yield Promise.all(baseNames.map(function (baseName) {
			return (0, _path.resolve)(basePath, baseName);
		}).map((() => {
			var _ref2 = _asyncToGenerator(function* (path) {
				return {
					path: path,
					exists: yield (0, _pathExists2.default)(path)
				};
			});

			return function (_x3) {
				return _ref2.apply(this, arguments);
			};
		})()));

		return ((0, _lodash.find)(exist, 'exists') || {}).path;
	});

	return function getExistingBaseName(_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

let getMarkdown = (() => {
	var _ref3 = _asyncToGenerator(function* (id, base, options) {
		const readFile = (0, _readFile2.default)({
			cache: options.cache
		});

		const basePath = (0, _path.resolve)(base, id.split('/').join(_path.sep));
		const markdownPath = yield getExistingBaseName(basePath, options.baseNames);

		if (markdownPath) {
			const buffer = yield readFile(markdownPath);
			return buffer.toString('utf-8');
		}

		return '';
	});

	return function getMarkdown(_x4, _x5, _x6) {
		return _ref3.apply(this, arguments);
	};
})();

var _path = require('path');

var _lodash = require('lodash');

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _readFile = require('../filesystem/read-file.js');

var _readFile2 = _interopRequireDefault(_readFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const defaults = {
	fallback: true,
	cache: null,
	baseNames: ['README.md', 'Readme.md', 'readme.md', 'index.md']
};

exports.default = (() => {
	var _ref4 = _asyncToGenerator(function* (id, base, options) {
		const settings = _extends({}, defaults, options);
		return yield getMarkdown(id, base, settings);
	});

	function getReadme(_x7, _x8, _x9) {
		return _ref4.apply(this, arguments);
	}

	return getReadme;
})();

module.exports = exports['default'];