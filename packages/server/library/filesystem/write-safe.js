'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _path = require('path');

const _util = require('util');

const _makeDirectory = require('./make-directory');

const _makeDirectory2 = _interopRequireDefault(_makeDirectory);

const _writeFile = require('./write-file');

const _writeFile2 = _interopRequireDefault(_writeFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  const _ref = _asyncToGenerator(function* (path, buffer) {
    const debug = (0, _util.debuglog)('write-safe');
    yield (0, _makeDirectory2.default)((0, _path.dirname)(path));
    debug('Writing %s', path);
    return (0, _writeFile2.default)(path, buffer);
  });

  function writeSafe(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return writeSafe;
})();

module.exports = exports.default;