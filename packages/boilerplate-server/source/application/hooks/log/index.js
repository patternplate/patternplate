import startLogger from './logger';

export default {
	after: ['hooks:user-hooks:start:after'],

	configure(application) {
		this.configuration = {...this.configuration, ...this.defaults, ...application.configuration[this.name]};
		this.configuration.level = application.runtime.api.loglevel || this.configuration.level;
		return this;
	},

	start(application) {
		const logger = startLogger('', this.configuration);

		application.log.silly('Draining boot logger queue...');
		application.log.drain(logger);

		logger.silly('Deploying application logger...');
		application.log.deploy(logger);

		return this;
	}
};
