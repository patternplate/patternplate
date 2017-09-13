'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

let readTree = (() => {
	var _ref = _asyncToGenerator(function* (directoryPath) {
		let cache = arguments.length <= 1 || arguments[1] === undefined ? cacheShim : arguments[1];

		const key = `fs:readtree:${directoryPath}`;
		const cached = cache.peek(key);

		if (cached) {
			return cache.get(key);
		}

		if (!(yield (0, _pathExists2.default)(directoryPath))) {
			return [];
		}

		const stats = yield (0, _sander.stat)(directoryPath);

		if (stats.isFile()) {
			return [directoryPath];
		}

		const list = yield (0, _sander.readdir)(directoryPath);

		const jobs = list.map(function (item) {
			return readTree(_path2.default.resolve(directoryPath, item), cache);
		});
		const result = (0, _lodash.flattenDeep)((yield Promise.all(jobs)));

		cache.set(key, result);

		return result;
	});

	return function readTree(_x) {
		return _ref.apply(this, arguments);
	};
})();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sander = require('sander');

var _lodash = require('lodash');

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = readTree;


const cacheShim = {
	peek: function peek() {
		return false;
	},
	get: function get() {
		return null;
	},
	set: function set() {
		return null;
	}
};

module.exports = exports['default'];