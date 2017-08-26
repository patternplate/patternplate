'use strict';

module.exports = {
	formats: {
		less: {
			transforms: ['less']
		},
		js: {
			transforms: ['browserify']
		},
		jsx: {
			transforms: ['react', 'react-to-markup']
		},
		md: {
			transforms: []
		}
	}
};
