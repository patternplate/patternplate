'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sander = require('sander');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const defaults = {
	cache: null
};

function cacheIo(fn, cache) {
	return (() => {
		var _ref = _asyncToGenerator(function* (file) {
			const key = `fs:readfile:${file}`;
			const cached = cache.get(key);

			if (cached) {
				return cached;
			}

			const content = yield fn(file);
			cache.set(key, content);
			return content;
		});

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	})();
}

exports.default = options => {
	const settings = _extends({}, defaults, options);
	const cache = settings.cache;

	const cacheFn = cache ? fn => cacheIo(fn, cache) : fn => fn;

	return cacheFn(_sander.readFile);
};

module.exports = exports['default'];