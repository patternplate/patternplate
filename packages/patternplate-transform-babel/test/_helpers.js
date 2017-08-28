/* eslint-disable xo/filename-case */
import {merge} from 'lodash/fp';

export const getFile = merge({
	buffer: new Buffer(''),
	path: 'mocks/index.js',
	dependencies: {}
});
