'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

require('babel-core/polyfill');

var _lodashMerge = require('lodash.merge');

var _lodashMerge2 = _interopRequireDefault(_lodashMerge);

var _appRootPath = require('app-root-path');

var _appRootPath2 = _interopRequireDefault(_appRootPath);

var _boilerplateServer = require('boilerplate-server');

var _boilerplateServer2 = _interopRequireDefault(_boilerplateServer);

var _patternplateServer = require('patternplate-server');

var _patternplateServer2 = _interopRequireDefault(_patternplateServer);

var _patternplateClient = require('patternplate-client');

var _patternplateClient2 = _interopRequireDefault(_patternplateClient);

var defaults = {
	'patternplate-server': {},
	'patternplate-client': {},
	'patternplate': {}
};

function patternplate(args) {
	var options, patternplate, patternplateServerInstance, patternplateClientInstance;
	return regeneratorRuntime.async(function patternplate$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				options = (0, _lodashMerge2['default'])({}, defaults, args);
				context$1$0.next = 3;
				return regeneratorRuntime.awrap((0, _boilerplateServer2['default'])({
					'name': 'patternplate',
					'mode': options.mode,
					'cwd': _appRootPath2['default'].path
				}));

			case 3:
				patternplate = context$1$0.sent;
				context$1$0.next = 6;
				return regeneratorRuntime.awrap((0, _patternplateServer2['default'])((0, _lodashMerge2['default'])(options['patternplate-server'], {
					'mode': options.mode,
					'patterncwd': process.cwd()
				})));

			case 6:
				patternplateServerInstance = context$1$0.sent;
				context$1$0.next = 9;
				return regeneratorRuntime.awrap((0, _patternplateClient2['default'])((0, _lodashMerge2['default'])(options['patternplate-client'], {
					'mode': options.mode,
					'env': options['patternplate-client'].env || 'production'
				})));

			case 9:
				patternplateClientInstance = context$1$0.sent;

				patternplate.log.info('Running in mode ' + patternplateServerInstance.runtime.mode + '...');

				if (patternplateServerInstance.runtime.mode === 'server') {
					patternplate.mount(patternplateClientInstance);
					patternplate.mount(patternplateServerInstance, '/api');
					patternplateClientInstance.configuration.client.path = patternplateServerInstance.runtime.prefix;

					patternplateClientInstance.log.warn('Changing patternplate-client.client.path to ' + patternplateServerInstance.runtime.prefix);
				} else {
					patternplate.log.info('Skipping mounts, not in mode server.');
				}

				patternplate.server = patternplateServerInstance;
				return context$1$0.abrupt('return', patternplate);

			case 14:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

exports['default'] = patternplate;
module.exports = exports['default'];