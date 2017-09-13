#!/usr/bin/env node
'use strict';

require('babel-polyfill');

const _minimist = require('minimist');

const _minimist2 = _interopRequireDefault(_minimist);

const _ = require('../');

const _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function main() {
  const options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _2.default)(options);
}

const args = (0, _minimist2.default)(process.argv.slice(1));

main(args).catch((err) => {
  setTimeout(() => {
    throw err;
  });
});

// Catch unhandled rejections globally
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
  throw reason;
});