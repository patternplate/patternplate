'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;


function toString(input) {
  if (!input) {
    return;
  }
  if (typeof input === 'string') {
    return input;
  }
  if (input.toString) {
    return input.toString();
  }
  return String(input);
}
module.exports = exports.default;