#!/usr/bin/env node
/*eslint-disable no-process-env */
import { resolve } from 'path';

import patternPlateServer from 'patternplate-server';
import patternPlateClient from 'patternplate-client';

export default async function start ( options = {} ) {
	let server = await patternPlateServer({
		'server': {
			'port': 1338
		},
		'cwd': resolve( require.resolve('patternplate-server'), '..', '..' ),
		'patterncwd': process.cwd()
	});

	let client = await patternPlateClient({
		'env': 'production',
		'cwd':  resolve( require.resolve('patternplate-client'), '..', '..' )
	});

	return server;
}
