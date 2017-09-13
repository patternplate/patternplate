import boilerplate from 'boilerplate-server';
import findRoot from 'find-root';

async function server(opts) {
	const options = {
		name: 'patternplate-client',
		cwd: findRoot(__dirname),
		...opts
	};

	return await boilerplate(options);
}

export default server;
