'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var routes = {
	'enabled': {
		'patternStatic': {
			'enabled': true,
			'method': 'GET',
			'path': /\/pattern-static\/(.*)/,
			'options': {
				'root': './static',
				'maxage': 3600000,
				'hidden': false,
				'defer': false
			}
		}
	}
};

exports['default'] = routes;
module.exports = exports['default'];