import {
	merge
} from 'lodash';

const lifecycle = {
	configure: ['hookWillConfigure', 'hookDidConfigure'],
	start: ['hookWillStart', 'hookDidStart']
};

class Hook {
	wait = true;
	disabled = false;
	modes = [];

	after = ['application:after'];
	defaults = {};
	configuration = {};

	stageName = 'init';

	stages = {
		register: false,
		configure: false,
		start: false
	};

	constructor(application, name, extender) {
		merge(this, extender);

		this.configurationKey = extender.configurationKey || name;
		this.wait = typeof extender.wait === 'undefined' ? this.wait : extender.wait;
		this.disabled = typeof extender.disabled === 'undefined' ? this.disabled : extender.disabled;
		this.log = application.log;
	}

	register(application) {
		this.hookWillRegister(application);

		this.log.silly(`Registering hook '${this.name}'`);

		const hasModes = this.modes.length > 0;
		const matchesModes = hasModes &&
			this.modes.indexOf(application.runtime.mode) > -1;

		if (hasModes && !matchesModes) {
			this.log.debug(`Hook ${this.name} is disabled in mode ${application.runtime.mode}.`);
			this.disable(application);
			return this;
		}

		this.hookDidRegister(application);
		this.stages.register = true;
		return this;
	}

	disable() {
		if (!this.disabled) {
			this.disabled = true;
		}
		return this;
	}

	hookWillRegister() {
		return this;
	}

	hookDidRegister() {
		return this;
	}

	async stage(stageName, application) {
		if (this.stages[stageName] || this.disabled) {
			return this;
		}

		this.stages[stageName] = true;
		this.log.debug(`Running stage '${stageName}' on hook '${this.name}'`);

		try {
			await this[lifecycle[stageName][0]](application);
			await this[stageName](application);
			this.log.debug(`Ran stage '${stageName}' on hook '${this.name}'`);
			await this[lifecycle[stageName][1]](application);
			return this;
		} catch (error) {
			this.log.error(`An error ocurred on stage ${stageName} of hook '${this.name}'`);
			if (error.stack) {
				this.log.error(error.stack);
			}
			throw error;
		}
	}

	async configure(application) {
		if (this.disabled) {
			return this;
		}

		this.configuration = merge(
			this.configuration,
			this.defaults,
			application.configuration[this.configurationKey]
		);
		return this;
	}

	async hookWillConfigure() {
		return this;
	}

	async hookDidConfigure() {
		return this;
	}

	async start() {
		return this;
	}

	async hookWillStart() {
		return this;
	}

	async hookDidStart() {
		return this;
	}
}

function hookFactory(...args) {
	return new Hook(...args);
}

export default hookFactory;
export {
	Hook as Hook
};
