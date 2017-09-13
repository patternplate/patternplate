'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _resolve = require('./resolve');

const _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = deepRequire;


function deepRequire(id) {
  return require((0, _resolve2.default)(id));
}
module.exports = exports.default;