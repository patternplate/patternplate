#!/usr/bin/env node
'use strict';

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const start = (() => {
  const _ref = _asyncToGenerator(function* (options) {
    const mode = 'console';
    const settings = _extends({}, options, { mode });
    const command = settings._[1];

    const application = yield (0, _2.default)(settings);
    yield application.run(command, settings);
  });

  return function start(_x) {
    return _ref.apply(this, arguments);
  };
})();

require('babel-polyfill');

const _minimist = require('minimist');

const _minimist2 = _interopRequireDefault(_minimist);

const _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { const gen = fn.apply(this, arguments); return new Promise((resolve, reject) => { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then((value) => { step("next", value); }, (err) => { step("throw", err); }); } } return step("next"); }); }; }

const args = (0, _minimist2.default)(process.argv.slice(1));

start(args).then(() => {
  process.exit(0);
}).catch(err => {
  setTimeout(() => {
    throw err;
  });
});

// Catch unhandled rejections globally
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at: Promise ', promise, ' reason: ', reason);
  throw reason;
});