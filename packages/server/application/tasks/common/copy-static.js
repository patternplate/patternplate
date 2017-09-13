'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _copyDirectory = require('../../../library/filesystem/copy-directory');

const _copyDirectory2 = _interopRequireDefault(_copyDirectory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = copyStatic;


function copyStatic(cwd, targetRoot) {
  const staticRoot = _path2.default.resolve(cwd, 'static');
  return (0, _copyDirectory2.default)(staticRoot, _path2.default.resolve(targetRoot, 'static'));
}
module.exports = exports.default;