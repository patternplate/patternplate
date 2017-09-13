'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _path = require('path');

const _readTree = require('./read-tree');

const _readTree2 = _interopRequireDefault(_readTree);

const _copySafe = require('./copy-safe');

const _copySafe2 = _interopRequireDefault(_copySafe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  const _ref = _asyncToGenerator(function* (source, target) {
    const files = yield (0, _readTree2.default)(source);

    return Promise.all(files.filter(_path.extname).map((() => {
      const _ref2 = _asyncToGenerator(function* (file) {
        const targetFile = (0, _path.resolve)(target, (0, _path.relative)(source, file));
        return (0, _copySafe2.default)(file, targetFile);
      });

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    })()));
  });

  function copyDirectory(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return copyDirectory;
})();

module.exports = exports.default;