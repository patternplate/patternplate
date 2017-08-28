const privates = new WeakMap();

class LogQueue {
	constructor ( prefix ) {
		let queue = [];
		privates.set(this, { queue, prefix });
	}

	fill (level, ...args) {
		let { queue, prefix } = privates.get(this);
		let message = [prefix, ...args];
		queue.push([level, ...message]);
	}

	drain (logger) {
		let { queue } = privates.get(this);

		for (let item of queue) {
			let [method, ...message] = item;
			logger[method](...message);
		}
	}

	deploy (logger) {
		this.fill = function(level, ...args) {
			logger[level](...args);
		};
	}

	error (...args) {
		this.fill('error', ...args);
	}

	warn (...args) {
		this.fill('warn', ...args);
	}

	info (...args) {
		this.fill('info', ...args);
	}

	debug (...args) {
		this.fill('debug', ...args);
	}

	silly (...args) {
		this.fill('silly', ...args);
	}
}

function logQueueFactory(...args) {
	return new LogQueue(...args);
}

export default logQueueFactory;
export { LogQueue as LogQueue };
