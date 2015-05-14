import {resolve} from 'path';

import 'babel-core/polyfill';

import boilerplate from 'boilerplate-server';
import patternServer from 'patternplate-server';
import patternClient from 'patternplate-client';

const defaults = { patternServer: {}, patternClient: {}, core: {} };

async function patternplate ( args ) {
	const options = Object.assign({}, defaults, args);

	let patternplate = await boilerplate({
		'name': 'patternplate',
		'cwd': options.core.cwd || resolve(__dirname, '..'),
		'patterncwd': options.patterncwd || options.core.patterncwd || process.cwd()
	});

	let server = await patternServer(Object.assign(options.patternServer, {
		'cwd': options.patternServer.cwd || resolve(require.resolve('patternplate-server'), '..', '..'),
		'patterncwd': options.patterncwd || options.patternServer.patterncwd || process.cwd()
	}));

	let client = await patternClient(Object.assign(options.patternClient, {
		'env': options.patternClient.env || options.env || 'production',
		'cwd': options.patternClient.cwd || resolve(require.resolve('patternplate-client'), '..', '..'),
		'routes': { 'enabled': { 'api': { 'enabled': false } } }
	}));

	patternplate.mount(client);
	patternplate.mount(server, '/api');

	server.cache = patternplate.cache;
	client.cache = patternplate.cache;

	client.configuration.client.path = server.runtime.prefix;
	return patternplate;
}

export default patternplate;
