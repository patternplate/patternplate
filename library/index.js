'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

require('babel-core/polyfill');

var _boilerplateServer = require('boilerplate-server');

var _boilerplateServer2 = _interopRequireDefault(_boilerplateServer);

var _patternplateServer = require('patternplate-server');

var _patternplateServer2 = _interopRequireDefault(_patternplateServer);

var _patternplateClient = require('patternplate-client');

var _patternplateClient2 = _interopRequireDefault(_patternplateClient);

var defaults = { patternServer: {}, patternClient: {}, core: {} };

function patternplate(args) {
	var options, patternplate, server, client;
	return regeneratorRuntime.async(function patternplate$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				options = Object.assign({}, defaults, args);
				context$1$0.next = 3;
				return regeneratorRuntime.awrap((0, _boilerplateServer2['default'])({
					'name': 'patternplate',
					'cwd': options.core.cwd || (0, _path.resolve)(__dirname, '..'),
					'patterncwd': options.patterncwd || options.core.patterncwd || process.cwd()
				}));

			case 3:
				patternplate = context$1$0.sent;
				context$1$0.next = 6;
				return regeneratorRuntime.awrap((0, _patternplateServer2['default'])(Object.assign(options.patternServer, {
					'cwd': options.patternServer.cwd || (0, _path.resolve)(require.resolve('patternplate-server'), '..', '..'),
					'patterncwd': options.patterncwd || options.patternServer.patterncwd || process.cwd(),
					'paths': {
						'configuration': ['./configuration', (0, _path.resolve)(__dirname, '..', './configuration/server'), (0, _path.resolve)(process.cwd(), './configuration/server')]
					}
				})));

			case 6:
				server = context$1$0.sent;
				context$1$0.next = 9;
				return regeneratorRuntime.awrap((0, _patternplateClient2['default'])(Object.assign(options.patternClient, {
					'cwd': (0, _path.resolve)(require.resolve('patternplate-client'), '..', '..'),
					'paths': {
						'configuration': ['./configuration', (0, _path.resolve)(__dirname, '..', './configuration/client'), (0, _path.resolve)(process.cwd(), './configuration/client')]
					}
				})));

			case 9:
				client = context$1$0.sent;

				patternplate.mount(client);
				patternplate.mount(server, '/api');

				client.configuration.client.path = server.runtime.prefix;

				patternplate.server = server;
				return context$1$0.abrupt('return', patternplate);

			case 15:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

exports['default'] = patternplate;
module.exports = exports['default'];