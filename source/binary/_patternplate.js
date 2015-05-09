#!/usr/bin/env node --harmony
/*eslint-disable no-process-env */
import {resolve} from 'path';

import patternPlateServer from 'patternplate-server';
import patternPlateClient from 'patternplate-client';

export default async function start (options = {}) {
	let server = await patternPlateServer({
		'server': {
			'port': 1338
		},
		'cwd': options.cwd || resolve(require.resolve('patternplate-server'), '..', '..'),
		'patterncwd': options.patterncwd || process.cwd()
	});

	await patternPlateClient({
		'env': 'production',
		'cwd': resolve(require.resolve('patternplate-client'), '..', '..')
	});

	return server;
}
