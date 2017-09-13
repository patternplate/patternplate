const middlewares = {
	'path': [
		'application/middlewares',
		'application/patternplate-client/middlewares'
	],
	'enabled': {
		'jsonerror': true,
		'basicauth': {
			'enabled': false,
			'credentials': {
				'name': process.env.PATTERNPLATE_CLIENT_BASIC_AUTH_LOGIN ||
					process.env.BOILERPLATE_SERVER_BASIC_AUTH_LOGIN ||
					process.env.NODE_BASIC_AUTH_LOGIN || 'patternplate-client',
				'pass': process.env.PATTERNPLATE_CLIENT_BASIC_AUTH_PASS ||
					process.env.BOILERPLATE_SERVER_BASIC_AUTH_PASS ||
					process.env.NODE_BASIC_AUTH_PASS || 'patternplate-client'
			}
		}
	}
};

export default middlewares;
