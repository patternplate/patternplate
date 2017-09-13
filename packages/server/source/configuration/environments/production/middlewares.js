const middlewares = {
	path: ['application/middlewares'],
	enabled: {
		basicauth: {
			enabled: true,
			credentials: {
				name: process.env.PATTERNPLATE_SERVER_BASIC_AUTH_LOGIN ||
					process.env.BOILERPLATE_SERVER_BASIC_AUTH_LOGIN ||
					process.env.NODE_BASIC_AUTH_LOGIN || 'patternplate-server',
				pass: process.env.PATTERNPLATE_SERVER_BASIC_AUTH_PASS ||
					process.env.BOILERPLATE_SERVER_BASIC_AUTH_PASS ||
					process.env.NODE_BASIC_AUTH_PASS || 'patternplate-server'
			}
		}
	}
};

export default middlewares;
