'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _boilerplateServer = require('boilerplate-server');

var _boilerplateServer2 = _interopRequireDefault(_boilerplateServer);

var _findRoot = require('find-root');

var _findRoot2 = _interopRequireDefault(_findRoot);

var _chokidar = require('chokidar');

var _chokidar2 = _interopRequireDefault(_chokidar);

var _readFile = require('./filesystem/read-file');

var _readFile2 = _interopRequireDefault(_readFile);

var _readTree = require('./filesystem/read-tree');

var _readTree2 = _interopRequireDefault(_readTree);

var _cache = require('./cache');

var _cache2 = _interopRequireDefault(_cache);

var _pattern = require('./pattern');

var _pattern2 = _interopRequireDefault(_pattern);

var _transforms = require('./transforms');

var _transforms2 = _interopRequireDefault(_transforms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
	var _ref = _asyncToGenerator(function* (options) {
		const instance = yield (0, _boilerplateServer2.default)(_extends({
			name: 'patternplate-server',
			cwd: (0, _findRoot2.default)(__dirname)
		}, options));

		instance.transforms = yield (0, _transforms2.default)(instance);
		instance.pattern = yield (0, _pattern2.default)(instance);

		const cache = yield (0, _cache2.default)(instance);
		instance.cache = cache;

		if (options.mode !== 'console') {
			const readFile = (0, _readFile2.default)({ cache: cache });

			(0, _readTree2.default)(_path2.default.resolve('./patterns'), cache).then(function (tree) {
				return Promise.all(tree.map(function (file) {
					return readFile(file);
				}));
			});

			const watcher = _chokidar2.default.watch('./patterns', { ignoreInitial: true });

			watcher.on('change', (() => {
				var _ref2 = _asyncToGenerator(function* (f) {
					const filePath = _path2.default.resolve(f);
					cache.delete(`fs:readfile:`, filePath);
					yield readFile(filePath);
					watcher.emit('changed', filePath);
				});

				return function (_x2) {
					return _ref2.apply(this, arguments);
				};
			})());

			watcher.on('add', function (f) {
				const filePath = _path2.default.resolve(f);
				cache.delete(`fs:readfile:`, filePath);
				cache.delete(`fs:readtree`, '**\/*');
				readFile(filePath);
				(0, _readTree2.default)('./patterns', cache);
			});

			watcher.on('unlink', function (f) {
				const filePath = _path2.default.resolve(f);
				cache.delete('fs:readfile:', filePath);
				cache.delete(`fs:readtree`, '**\/*');
				(0, _readTree2.default)('./patterns', cache);
			});

			watcher.on('addDir', function () {
				cache.delete(`fs:readtree`, '**\/*');
				(0, _readTree2.default)('./patterns', cache);
			});

			watcher.on('unlinkDir', function () {
				cache.delete(`fs:readtree`, '**\/*');
				(0, _readTree2.default)('./patterns', cache);
			});

			instance.watcher = watcher;
		}

		return instance;
	});

	return function (_x) {
		return _ref.apply(this, arguments);
	};
})();

module.exports = exports['default'];