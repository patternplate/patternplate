'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _deepRequire = require('./deep-require');

const _deepRequire2 = _interopRequireDefault(_deepRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = serverRequire;


function serverRequire(id) {
  return (0, _deepRequire2.default)(`@patternplate/server/library/${id}`);
}
module.exports = exports.default;