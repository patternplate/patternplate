import {
	dirname,
	resolve
} from 'path';
import {
	merge
} from 'lodash';
import findRoot from 'find-root';
import exists from 'path-exists';

import load from '../../../library/utilities/configuration';

export default {
	after: ['application:before'],

	defaults: {
		path: './configuration',
		filter: /(.*).(js|json)$/
	},

	async configure(application) {
		application.configuration = {};
		this.configuration = merge(
			{},
			this.defaults,
			{
				path: resolve(application.runtime.base, this.defaults.path)
			}
		);
		return this;
	},

	async start(application) {
		// Load boilerplate-server core configuration
		const core = load(
			resolve(
				findRoot(__dirname),
				this.configuration.path
			),
			this.configuration.filter,
			application.runtime.env
		);

		// Load package.jsons
		const corePkgPath = resolve(application.runtime.base, 'package.json');
		const pkgPath = resolve(application.runtime.cwd, 'package.json');

		const corePkg = require(corePkgPath);
		const userPkg = require(pkgPath);
		const pkg = merge({}, corePkg, userPkg);

		// Allow user to override core behaviour via cli and *rc files
		merge(core, {pkg}, application.runtime.api);

		// Find all node modules on the way from here to the top
		let modulePaths = [dirname(module.filename)];
		let moduleRoot = module;
		while (moduleRoot.parent) {
			moduleRoot = moduleRoot.parent;
			modulePaths.push(dirname(moduleRoot.filename));
		}

		modulePaths = [...new Set(modulePaths)];
		modulePaths = modulePaths.filter(modulePath => !modulePath.includes(findRoot(__dirname)));

		const existingModulePaths = [];

		for (let modulePath of modulePaths) { // eslint-disable-line prefer-const
			let moduleRoot = modulePath;
			while (await exists(resolve(moduleRoot, 'package.json')) === false) { // eslint-disable-line babel/no-await-in-loop
				moduleRoot = dirname(moduleRoot);
			}
			existingModulePaths.push(moduleRoot);
		}

		// Set application runtime cwds
		application.runtime.cwds = [
			...new Set([
				application.runtime.cwd,
				...existingModulePaths,
				process.cwd()
			])
		];

		// Check which user config paths exist
		let existingConfigPaths = [];
		for (const configPath of core.paths.configuration) {
			for (const cwd of application.runtime.cwds) {
				for (const suffix of ['', userPkg.name]) {
					const userPath = resolve(cwd, configPath, suffix);
					if (await exists(userPath)) { // eslint-disable-line babel/no-await-in-loop
						existingConfigPaths.push(userPath);
					}
				}
			}
		}

		// Load most specific paths only
		// Check if paths have siblings that contain them completely, thus are sub directories / more specific configuration folders
		existingConfigPaths = existingConfigPaths.filter(configPath => {
			const match = existingConfigPaths.filter(subConfigPath =>
				subConfigPath.includes(configPath) && subConfigPath !== configPath
			);
			return match.length === 0;
		});

		// Load dem configs from filtered paths
		let user = {};
		for (const userPath of existingConfigPaths) {
			this.log.debug(`Loading configuration from '${userPath}'`);
			const userPathConfig = load(userPath, this.configuration.filter, application.runtime.env);
			user = merge(user, userPathConfig);
		}

		merge(application.configuration, core, user, application.runtime.api, (a, b) => {
			if (Array.isArray(b) && typeof a === 'string') {
				return b;
			}
		});

		if (application.name in user) {
			merge(application.configuration, user[application.name]);
		}

		application.runtime.prefix = application.runtime.prefix || '/';
		application.runtime.mode = application.runtime.mode || 'server';
		return this;
	}
};
