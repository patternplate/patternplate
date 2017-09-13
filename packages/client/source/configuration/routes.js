const routes = {
	path: [
		'application/routes',
		'application/patternplate-client/routes'
	],
	enabled: {
		index: {
			enabled: true,
			path: '/'
		},
		pattern: {
			enabled: true,
			path: '/pattern/:path+'
		},
		demo: {
			enabled: true,
			path: '/demo/:id+'
		},
		docs: {
			enabled: true,
			path: '/doc/:path+'
		},
		component: {
			enabled: true,
			path: '/demo/:id+/component.js'
		},
		script: {
			enabled: true,
			path: '/script/:path+'
		},
		style: {
			enabled: true,
			path: '/style/:path+'
		},
		static: {
			enabled: true,
			path: '/static/:path+'
		},
		zcatch: {
			enabled: true,
			path: '!(/api/)(.*)'
		}
	}
};

export default routes;
