import {resolve} from 'path';

import 'babel-core/polyfill';

import boilerplate from 'boilerplate-server';
import patternServer from 'patternplate-server';
import patternClient from 'patternplate-client';

const defaults = { patternServer: {}, patternClient: {}, core: {} };

async function patternplate ( args ) {
	const options = Object.assign({}, defaults, args);

	let patternplate = await boilerplate(Object.assign({
		'name': 'patternplate',
		'cwd': options.core.cwd || resolve(__dirname, '..'),
		'patterncwd': options.patterncwd || options.core.patterncwd || process.cwd()
	}, { 'mode': options.mode || 'server' }));

	let server = await patternServer(Object.assign({}, options.patternServer, {
		'cwd': options.patternServer.cwd || resolve(require.resolve('patternplate-server'), '..', '..'),
		'patterncwd': options.patterncwd || options.patternServer.patterncwd || process.cwd(),
		'paths': {
			'configuration': [
				'./configuration',
				resolve(__dirname, '..', './configuration/server'),
				resolve(process.cwd(), './configuration/server')
			]
		}
	}, { 'mode': options.mode || 'server' }));

	let client = await patternClient(Object.assign({}, options.patternClient, {
		'cwd': resolve(require.resolve('patternplate-client'), '..', '..'),
		'env': options.patternClient.env || 'production',
		'paths': {
			'configuration': [
				'./configuration',
				resolve(__dirname, '..', './configuration/client'),
				resolve(process.cwd(), './configuration/client')
			]
		}
	}, { 'mode': options.mode || 'server' }));

	patternplate.log.info(`Running in mode ${server.runtime.mode}...`);

	if (server.runtime.mode === 'server') {
		patternplate.mount(client);
		patternplate.mount(server, '/api');
		client.configuration.client.path = server.runtime.prefix;
	} else {
		patternplate.log.info(`Skipping mounts, not in mode server.`);
	}

	patternplate.server = server;
	return patternplate;
}

export default patternplate;
