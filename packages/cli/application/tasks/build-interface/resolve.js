'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _resolve = require('resolve');

exports.default = resolve;


function resolve(id) {
  return (0, _resolve.sync)(id, {
    basedir: process.cwd()
  });
}
module.exports = exports.default;