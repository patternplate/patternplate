module.exports = {
	'babel': {
		inFormat: 'jsx',
		outFormat: 'js',
		opts: {
      presets: ['env', 'react'],
      plugins: [
        'transform-object-rest-spread'
      ]
    }
	},
	'browserify': {
		inFormat: 'js',
		outFormat: 'js'
	},
	'react-mount': {
		inFormat: 'js',
		outFormat: 'js'
	},
	'react-to-markup': {
		inFormat: 'js',
		outFormat: 'html'
	}
};
