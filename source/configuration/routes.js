const routes = {
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

export default routes;
