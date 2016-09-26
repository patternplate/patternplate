'use strict';

module.exports = {
	'babel': {
		inFormat: 'js',
		outFormat: 'js',
		opts: {
			presets: ['es2015', 'react']
		}
	},
	'browserify': {
		inFormat: 'js',
		outFormat: 'js',
		opts: {
			debug: true
		}
	},
	'react': {
		inFormat: 'jsx',
		outFormat: 'js'
	},
	'react-mount': {
		inFormat: 'js',
		outFormat: 'js'
	},
	'react-to-markup': {
		inFormat: 'js',
		outFormat: 'html'
	},
	'less': {
		inFormat: 'less',
		outFormat: 'css',
		plugins: {},
		opts: {}
	}
};
