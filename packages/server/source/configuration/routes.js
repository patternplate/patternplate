import {resolve} from 'path';

const routes = {
	path: ['application/routes'],
	enabled: {
		index: {
			enabled: true,
			path: '/'
		},
		pattern: {
			enabled: true,
			path: '/pattern/:id+',
			options: {
				key: 'patterns'
			}
		},
		resource: {
			enabled: true,
			path: '/resource/:id+.:ext'
		},
		docs: {
			enabled: true,
			path: '/docs/:id+'
		},
		file: {
			enabled: true,
			path: '/file/:id+'
		},
		static: {
			options: {
				root: [
					resolve(__dirname, '../', 'static'),
					resolve(process.cwd(), 'static')
				]
			}
		}
	}
};

export default routes;
