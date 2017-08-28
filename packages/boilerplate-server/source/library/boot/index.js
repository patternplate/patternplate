import {
	EventEmitter
} from 'events';

import appRootPath from 'app-root-path';
import {
	merge
} from 'lodash';

import queuedLogger from '../utilities/queued-logger';
import hooks from '../hooks';

const emergencyLogger = {
	log(level, ...rest) {
		console.log(...[level, ...rest]);
	},
	error(...message) {
		emergencyLogger.log('error', ...message);
	},
	warn(...message) {
		emergencyLogger.log('message', ...message);
	},
	info(...message) {
		emergencyLogger.log('info', ...message);
	},
	debug(...message) {
		emergencyLogger.log('debug', ...message);
	},
	silly(...message) {
		emergencyLogger.log('silly', ...message);
	}
};

class BoilerPlateServer extends EventEmitter {
	constructor(options) {
		super();

		this.name = options.name;
		this.subs = options.subs || [];

		this.runtime = merge({}, {
			mode: 'server',
			prefix: '/',
			env: process.env.BOILERPLATESERVER_ENV || process.env.BOILERPLATE_ENV || process.env.NODE_ENV || process.env.ENV || 'development',
			cwds: [],
			cwd: appRootPath.path
		}, options);

		this.log = queuedLogger(this.name);
	}

	async start(host = this.configuration.server.host, port = this.configuration.server.port) {
		await this.engine.start(host, port);
		return this;
	}

	async stop() {
		this.log.info('\nStopping server gracefully...');
		await this.engine.stop();
		this.log.info('\nStopped server gracefully...');
		return this;
	}

	mount(...args) {
		const [sub] = args;
		sub.runtime.cwds.splice(1, 0, ...this.runtime.cwds);
		sub.runtime.cwds = [...new Set(sub.runtime.cwds)];
		this.engine.mount(...args);
		return this;
	}

	async run(command, options) {
		if (!this.console) {
			this.log.warn('application.console is not avaiable. Aborting.');
			return this;
		}

		await this.console.run(command, options);
		return this;
	}
}

async function boot(options) {
	const application = new BoilerPlateServer(options);
	try {
		const result = await hooks(application);
		return result;
	} catch (error) {
		application.log.error(error);
		// Drain the logging queue in case of an error
		if (application.log.deploy) {
			application.log.drain(emergencyLogger);
		}
		throw error;
	}
}

export default boot;
