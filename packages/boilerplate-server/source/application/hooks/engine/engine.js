import koa from 'koa';
import {merge} from 'lodash';

import ports from '../../../library/utilities/ports';

function engineBlueprint() {
	const nameSpace = new WeakMap();

	return class Engine {
		constructor(application) {
			const fuel = koa();
			fuel.experimental = true;

			this.env = fuel.env;
			nameSpace.set(this, {application, fuel, mounts: {}});
		}

		async start(host, port) {
			const {fuel, application} = nameSpace.get(this);
			const server = application.configuration.server;
			const env = application.configuration.environment;

			if (application.router) {
				application.log.debug(`Kicking off router ...`);
				fuel.use(application.router.routes());
				fuel.use(application.router.allowedMethods());
				application.log.debug(`Kicked off router ...`);
			}

			if (application.runtime.env === 'development') {
				if (await ports.test(port, host) !== true) {
					if (server.autoPort !== true) {
						throw new Error(`Port ${port} is taken and server.autPort is disabled, could not start server.`);
					}

					application.log.warn(`Port ${port} is taken, trying to obtain next open port... `);
					server.port = await ports.find(server.port + 1, server.port + 51, server.host);

					application.subs.forEach(sub => {
						application.log.debug(`Changing configuration of subapplications ${sub.name}`);

						sub.mountable.configuration.server = server;
						sub.mountable.configuration.client = Object.assign(sub.mountable.configuration.client || {}, {
							host: server.host,
							port: server.port
						});

						application.log.silly(`${sub.mountable.name}.configuration.server: ${JSON.stringify(sub.mountable.configuration.server)}`);
						application.log.silly(`${sub.mountable.name}.configuration.client: ${JSON.stringify(sub.mountable.configuration.client)}`);
					});
				}
			}

			application.log.debug(`Starting engine at http://${server.host}:${server.port} in environment '${env}' ...`);
			const http = await fuel.listen(server.port);
			application.log.info(`Started ${env} server at http://${server.host}:${server.port}`);

			nameSpace.set(this, {http});
			return application;
		}

		async stop() {
			return new Promise((resolve, reject) => {
				const {http, application} = nameSpace.get(this);

				http.close(err => {
					if (err) {
						return reject(err);
					}
					return resolve(application);
				});
			});
		}

		mount(mountable, path = '/') {
			const {fuel, application} = nameSpace.get(this);
			const fragments = path.split('/');
			const hostFragments = application.runtime.prefix.split('/');

			application.log.debug(`Mounting ${mountable.name} on ${path}`);

			if (path === '/') {
				mountable.router.stack.routes.forEach(route => {
					const match = application.router.route(route.name);
					if (match) {
						const index = application.router.stack.routes.indexOf(match);
						application.router.stack.routes.splice(index, 1);
						application.log.debug(`Route "${route.name}" of "${mountable.name}" overwrites ${application.name}'s route with same name.`);
					}
				});

				application.router.stack.routes = application.router.stack.routes.concat(mountable.router.stack.routes);
			} else {
				mountable.router.prefix(path);
			}

			application.router.stack.middleware.forEach(middleware => {
				const [match] = mountable.router.stack.middleware
					.filter(mountMiddleware => mountMiddleware.name === middleware.name);
				if (match) {
					return;
				}
				mountable.router.stack.middleware.push(middleware);
			});

			mountable.configuration.middlewares = mountable.configuration.middlewares || {};

			// Override middleware config on mountable by host middleware config
			for (const middlewareName of Object.keys(application.configuration.middlewares.enabled || {})) {
				const config = application.configuration.middlewares.enabled[middlewareName];
				let mountableConfig = mountable.configuration.middlewares.enabled[middlewareName];

				mountableConfig = typeof mountableConfig === 'undefined' ? config : mountableConfig;

				if (typeof config === 'object') {
					merge(mountableConfig, config);
				} else {
					mountableConfig = config;
				}
			}

			fuel.use(mountable.router.routes());
			fuel.use(mountable.router.allowedMethods());

			application.router.subs = application.router.subs || [];
			application.router.subs.push(mountable.router);

			const prefix = fragments.concat(hostFragments).filter(Boolean).join('/');
			mountable.runtime.prefix = [`/${prefix}`];

			application.subs.push({path, mountable});

			mountable.configuration.server = {...mountable.configuration.server, ...application.configuration.server};
			mountable.configuration.client = {...mountable.configuration.client, ...application.configuration.server};

			application.log.debug(`Changing configuration of subapplications ${mountable.name}`);
			application.log.silly(`${mountable.name}.configuration.server: ${JSON.stringify(mountable.configuration.server)}`);
			application.log.silly(`${mountable.name}.configuration.client: ${JSON.stringify(mountable.configuration.client)}`);

			return application;
		}

		use(...args) {
			const {fuel, application} = nameSpace.get(this);
			fuel.use(...args);
			return application;
		}
	};
}

function engineFactory(...args) {
	return new (engineBlueprint())(...args);
}

export default engineFactory;
