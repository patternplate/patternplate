import merge from 'lodash.merge';
import findRoot from 'find-root';

import boilerplate from 'boilerplate-server';
import patternplateServer from 'patternplate-server';
import patternplateClient from 'patternplate-client';

const defaults = {
	'patternplate-server': {},
	'patternplate-client': {},
	'patternplate': {}
};

async function patternplate(args) {
	const options = merge({}, defaults, args);

	const patternplate = await boilerplate({
		name: 'patternplate',
		mode: options.mode,
		cwd: findRoot(__dirname)
	});

	const patternplateServerInstance = await patternplateServer(
		merge(options['patternplate-server'],
			{
				mode: options.mode,
				patterncwd: process.cwd()
			}
		));

	const patternplateClientInstance = await patternplateClient(
		merge(options['patternplate-client'],
			{
				mode: options.mode,
				env: options['patternplate-client'].env || 'production'
			}
	));

	patternplate.log.info(`Running in mode ${patternplateServerInstance.runtime.mode}...`);

	if (patternplateServerInstance.runtime.mode === 'server') {
		patternplate.mount(patternplateClientInstance);
		patternplate.mount(patternplateServerInstance, '/api');
		patternplateClientInstance.configuration.client.path = patternplateServerInstance.runtime.prefix;

		patternplateClientInstance.log.warn(`Changing patternplate-client.client.path to ${patternplateServerInstance.runtime.prefix}`);
	} else {
		patternplate.log.info(`Skipping mounts, not in mode server.`);
	}

	patternplate.server = patternplateServerInstance;
	return patternplate;
}

export default patternplate;
