'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const readDirectory = (() => {
  const _ref = _asyncToGenerator(function* (directoryPath) {
    const list = yield (0, _sander.readdir)(directoryPath);

    const filtering = list.map((() => {
      const _ref2 = _asyncToGenerator(function* (item) {
        const stats = yield (0, _sander.stat)(_path2.default.resolve(directoryPath, item));
        return stats.isFile() ? item : null;
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    })());

    const results = yield Promise.all(filtering);
    return results.filter(Boolean);
  });

  return function readDirectory(_x) {
    return _ref.apply(this, arguments);
  };
})();

const _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sander = require('sander');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = readDirectory;
module.exports = exports.default;