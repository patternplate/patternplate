import {Logger as WinstonLogger, transports as winstonTransports} from 'winston';

const privates = new WeakMap();

class Logger {
	constructor(prefix, options) {
		const engine = new WinstonLogger(options);
		engine.add(winstonTransports.Console, options);
		privates.set(this, {prefix, options, engine});
	}

	log(method, ...args) {
		const {engine, prefix} = privates.get(this);
		engine[method](...[prefix, ...args]);
	}

	error(...args) {
		this.log('error', ...args);
	}

	warn(...args) {
		this.log('warn', ...args);
	}

	info(...args) {
		this.log('info', ...args);
	}

	debug(...args) {
		this.log('debug', ...args);
	}

	silly(...args) {
		this.log('silly', ...args);
	}
}

function loggerFactory(...args) {
	return new Logger(...args);
}

export default loggerFactory;
export {Logger as Logger};
