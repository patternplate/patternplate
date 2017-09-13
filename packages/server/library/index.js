'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _boilerplateServer = require('boilerplate-server');

const _boilerplateServer2 = _interopRequireDefault(_boilerplateServer);

const _findRoot = require('find-root');

const _findRoot2 = _interopRequireDefault(_findRoot);

const _chokidar = require('chokidar');

const _chokidar2 = _interopRequireDefault(_chokidar);

const _readFile = require('./filesystem/read-file');

const _readFile2 = _interopRequireDefault(_readFile);

const _readTree = require('./filesystem/read-tree');

const _readTree2 = _interopRequireDefault(_readTree);

const _cache = require('./cache');

const _cache2 = _interopRequireDefault(_cache);

const _pattern = require('./pattern');

const _pattern2 = _interopRequireDefault(_pattern);

const _transforms = require('./transforms');

const _transforms2 = _interopRequireDefault(_transforms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  const _ref = _asyncToGenerator(function* (options) {
    const instance = yield (0, _boilerplateServer2.default)(_extends({
      name: 'patternplate-server',
      cwd: (0, _findRoot2.default)(__dirname)
    }, options));

    instance.transforms = yield (0, _transforms2.default)(instance);
    instance.pattern = yield (0, _pattern2.default)(instance);

    const cache = yield (0, _cache2.default)(instance);
    instance.cache = cache;

    if (options.mode !== 'console') {
      const readFile = (0, _readFile2.default)({ cache });

      (0, _readTree2.default)(_path2.default.resolve('./patterns'), cache).then((tree) => {
        return Promise.all(tree.map((file) => {
          return readFile(file);
        }));
      });

      const watcher = _chokidar2.default.watch('./patterns', { ignoreInitial: true });

      watcher.on('change', (() => {
        const _ref2 = _asyncToGenerator(function* (f) {
          const filePath = _path2.default.resolve(f);
          cache.delete(`fs:readfile:`, filePath);
          yield readFile(filePath);
          watcher.emit('changed', filePath);
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      })());

      watcher.on('add', (f) => {
        const filePath = _path2.default.resolve(f);
        cache.delete(`fs:readfile:`, filePath);
        cache.delete(`fs:readtree`, '**/*');
        readFile(filePath);
        (0, _readTree2.default)('./patterns', cache);
      });

      watcher.on('unlink', (f) => {
        const filePath = _path2.default.resolve(f);
        cache.delete('fs:readfile:', filePath);
        cache.delete(`fs:readtree`, '**/*');
        (0, _readTree2.default)('./patterns', cache);
      });

      watcher.on('addDir', () => {
        cache.delete(`fs:readtree`, '**/*');
        (0, _readTree2.default)('./patterns', cache);
      });

      watcher.on('unlinkDir', () => {
        cache.delete(`fs:readtree`, '**/*');
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

module.exports = exports.default;