import {resolve} from 'path';

import requireAll from 'require-all';

import {exists} from '../../../library/utilities/fs';

export default {
	after: ['hooks:routes:start:after'],
	modes: ['server'],

	start: async function startMiddlewareHook(application) {
		const coreMiddlewares = requireAll(resolve(application.runtime.base, application.configuration.paths.middlewares));
		const userMiddlewares = {};
		this.configuration.path = Array.isArray(this.configuration.path) ? this.configuration.path : [this.configuration.path];

		const middlewarePaths = this.configuration.path
			.reduce((items, item) => items.concat(
				application.runtime.cwds.map(cwd => resolve(cwd, item))
			), []);

		for (const middlewarePath of middlewarePaths) {
			if (await exists(middlewarePath)) {
				Object.assign(userMiddlewares, requireAll(middlewarePath));
			}
		}

		// Load module middlewares
		const moduleMiddlewares = Object.keys(this.configuration.enabled)
			.filter(middlewareName => typeof this.configuration.enabled[middlewareName].enabled === 'string')
			.reduce((result, middlewareName) => {
				const middlewareModuleName = this.configuration.enabled[middlewareName].enabled;

				try {
					result[middlewareName] = require(middlewareModuleName);
					this.log.silly(`Required module middleware '${middlewareName}' from module '${middlewareModuleName}'`);
				} catch (err) {
					this.log.warn(`Could not require module middleware '${middlewareName}' from module '${middlewareModuleName}'`);
					this.log.error(err);
					throw err;
				}

				return result;
			}, {});

		const middlewares = Object.assign({}, coreMiddlewares, userMiddlewares, moduleMiddlewares);

		// Check if required modules are functions, bind to engine
		Object.keys(middlewares).forEach(middlewareName => {
			const middlewareFactoryFunction = middlewares[middlewareName];
			const middlewareConfig = this.configuration.enabled[middlewareName];

			if (typeof middlewareFactoryFunction !== 'function') {
				this.log.warn(`'${middlewareName}' is no valid middleware factory`);
				return;
			}

			const isObject = typeof middlewareConfig === 'object';

			if (middlewareConfig === false || isObject && middlewareConfig.enabled !== true) {
				this.log.debug(`Middleware '${middlewareName}' is explicitly disabled.`);
				return;
			}

			if (typeof middlewareConfig === 'undefined') {
				this.log.debug(`Middleware '${middlewareName}' is not configured, will not mount.`);
				return;
			}

			const fn = middlewareFactoryFunction(application, middlewareConfig);

			if (typeof fn !== 'function') {
				this.log.warn(`'${middlewareName}' middleware factory does not produce valid middlewares, will not mount.`);
				return;
			}

			try {
				application.router.use(fn);
				this.log.debug(`Middleware '${middlewareName}' mounted.`);
			} catch (err) {
				this.log.error(`Binding '${middlewareName}' to engine failed`);
				this.log.debug(err);
				throw err;
			}
		});

		return application;
	}
};
