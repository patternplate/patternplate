#!/usr/bin/env node --harmony
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = start;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _patternplateServer = require('patternplate-server');

var _patternplateServer2 = _interopRequireDefault(_patternplateServer);

var _patternplateClient = require('patternplate-client');

var _patternplateClient2 = _interopRequireDefault(_patternplateClient);

function start() {
	var options = arguments[0] === undefined ? {} : arguments[0];
	var server;
	return regeneratorRuntime.async(function start$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return _patternplateServer2['default']({
					'server': {
						'port': 1338
					},
					'cwd': options.cwd || _path.resolve(require.resolve('patternplate-server'), '..', '..'),
					'patterncwd': options.patterncwd || process.cwd()
				});

			case 2:
				server = context$1$0.sent;
				context$1$0.next = 5;
				return _patternplateClient2['default']({
					'env': 'production',
					'cwd': _path.resolve(require.resolve('patternplate-client'), '..', '..')
				});

			case 5:
				return context$1$0.abrupt('return', server);

			case 6:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

module.exports = exports['default'];