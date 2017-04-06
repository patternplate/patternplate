import {merge, omit} from 'lodash';
import findRoot from 'find-root';

import boilerplate from 'boilerplate-server';
import patternplateServer from 'patternplate-server';
import patternplateClient from 'patternplate-client';

const defaults = {
	patternplateServer: {},
	patternplateClient: {},
	patternplate: {}
};

async function patternplate(args) {
	const options = merge({}, defaults, args);
	const topLevel = omit(options, Object.keys(defaults));
	const patterncwd = process.cwd();

	const patternplateSpecifics = {name: 'patternplate', cwd: findRoot(__dirname)};
	const patternplateOptions = merge({}, topLevel, options.patternplate, patternplateSpecifics);
	const patternplate = await boilerplate(patternplateOptions);

	const patternplateSeverSpecifics = {patterncwd};
	const patternplateServerOptions = merge({}, topLevel, options.patternplateServer, topLevel, patternplateSeverSpecifics);
	const patternplateServerInstance = await patternplateServer(patternplateServerOptions);

	const patternplateClientSpecifics = {env: options.patternplateClient.env || 'production'};
	const patternplateClientOptions = merge({}, topLevel, options.patternplateServer, topLevel, patternplateClientSpecifics);
	const patternplateClientInstance = await patternplateClient(patternplateClientOptions);

	patternplate.log.debug(`Running in mode ${patternplateServerInstance.runtime.mode}...`);

	if (patternplateServerInstance.runtime.mode === 'server') {
		patternplate.mount(patternplateClientInstance);
		patternplate.mount(patternplateServerInstance, '/api');
		patternplateClientInstance.configuration.client.path = patternplateServerInstance.runtime.prefix;
		patternplateClientInstance.log.debug(`Changing patternplate-client.client.path to ${patternplateServerInstance.runtime.prefix}`);
	} else {
		patternplate.log.debug(`Skipping mounts, not in mode server.`);
	}

	patternplate.server = patternplateServerInstance;
	patternplate.client = patternplateClientInstance;

	patternplate.resources = [];
	patternplate.server.resources = patternplate.resources;
	patternplate.client.resources = patternplate.resources;

	patternplate.server.parent = patternplate;
	patternplate.client.parent = patternplate;
	return patternplate;
}

export default patternplate;
