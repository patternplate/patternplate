module.exports = {
	formats: {
		js: {
			transforms: ['babel', 'styled-components', 'react-to-markup']
		}
	},
	mount: {
		format: ['js'],
		name: 'Components',
		transforms: ['babel', 'react-mount', 'browserify']
	}
};
