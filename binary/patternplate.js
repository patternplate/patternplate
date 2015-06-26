#!/usr/bin/env node --harmony

/*eslint-disable no-process-env, no-process-exit */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('babel-core/polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function start() {
	var options = arguments[0] === undefined ? {} : arguments[0];
	var application, settings, log;
	return regeneratorRuntime.async(function start$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				application = undefined;
				settings = Object.assign(options, { 'mode': 'server' });
				context$1$0.prev = 2;
				context$1$0.next = 5;
				return regeneratorRuntime.awrap((0, _2['default'])(settings));

			case 5:
				application = context$1$0.sent;
				context$1$0.next = 13;
				break;

			case 8:
				context$1$0.prev = 8;
				context$1$0.t0 = context$1$0['catch'](2);
				log = application ? application.log || console : console;

				log.error(context$1$0.t0);
				throw new Error(context$1$0.t0);

			case 13:
				context$1$0.prev = 13;
				context$1$0.next = 16;
				return regeneratorRuntime.awrap(application.start(settings));

			case 16:
				context$1$0.next = 22;
				break;

			case 18:
				context$1$0.prev = 18;
				context$1$0.t1 = context$1$0['catch'](13);

				application.log.error(context$1$0.t1);
				throw new Error(context$1$0.t1);

			case 22:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[2, 8], [13, 18]]);
}

start((0, _minimist2['default'])(process.argv.slice(1)));