module.exports = {
	formats: {
		js: {
			transforms: ['babel', 'react-to-markup']
		}
	},
	mount: {
		format: ['js'],
		name: 'Components',
		transforms: ['babel', 'react-mount', 'browserify']
	}
};
