#!/usr/bin/env node
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let start = (() => {
	var _ref = _asyncToGenerator(function* (options) {
		const mode = 'console';
		const settings = _extends({}, options, { mode: mode });
		const command = settings._[1];

		const application = yield (0, _2.default)(settings);
		yield application.run(command, settings);
	});

	return function start(_x) {
		return _ref.apply(this, arguments);
	};
})();

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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