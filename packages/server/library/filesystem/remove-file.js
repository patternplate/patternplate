'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rm;

const _rimraf = require('rimraf');

const _rimraf2 = _interopRequireDefault(_rimraf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rm(target) {
  return new Promise((resolve, reject) => {
    (0, _rimraf2.default)(target, {}, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
module.exports = exports.default;