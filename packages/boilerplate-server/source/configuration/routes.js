const routes = {
	'path': './application/routes',
	'enabled': {
		'index': {
			'enabled': true,
			'method': 'GET',
			'path': '/'
		},
		'static': {
			'enabled': true,
			'method': 'GET',
			'path': '/static/:path*',
			'options': {
				'root': './static'
			}
		},
		'health': {
			'enabled': true,
			'method': 'GET',
			'path': '/health/'
		}
	}
};

export default routes;
