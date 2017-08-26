module.exports = {
	formats: {
		jsx: {
			transforms: ['babel', 'react-to-markup']
		}
	},
	mount: {
		format: ['jsx'],
		name: 'Components',
		transforms: ['babel', 'react-mount', 'browserify']
	}
};
