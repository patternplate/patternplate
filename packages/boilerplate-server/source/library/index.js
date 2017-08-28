import { resolve } from 'path';

import boot from './boot';

async function boilerplate ( options = {} ) {
	/*eslint-disable no-process-env */

	let augmented = Object.assign( {}, {
			'cwd': process.cwd(),
			'base': options.base || resolve( __dirname, '../' ),
			'env': process.env.NODE_ENV || 'development',
			'name': options.name || 'boilerplate-server'
		}, options, { 'api': options } );

	return await boot( augmented );
}

export default boilerplate;
