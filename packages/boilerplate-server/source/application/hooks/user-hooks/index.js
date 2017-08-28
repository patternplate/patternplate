import {
	resolve
} from 'path';

import {
	exists
} from '../../../library/utilities/fs';

import getHookTree from '../../../library/hooks/get-hook-tree';
import load from '../../../library/hooks/load';
import runHookTree from '../../../library/hooks/run-hook-tree';

export default {
	configurationKey: 'hooks',
	after: ['hooks:configure:start:after'],
	async start(application) {
		const coreHookPath = resolve(application.runtime.base, application.configuration.paths.hooks);
		this.configuration.path = Array.isArray(this.configuration.path) ? this.configuration.path : [this.configuration.path];

		const userHookPaths = [...this.configuration.path
			.reduce((items, item) => [
				...items,
				...application.runtime.cwds.map(cwd => resolve(cwd, item))
			], [])
			.filter(item => item !== coreHookPath)];

		let userHooks = [];

		// load user hooks
		for (const userHookPath of userHookPaths) {
			if (await exists(userHookPath) === false) { // eslint-disable-line
				continue;
			} else {
				application.log.debug(`Loading user hooks from ${userHookPath}...`);
			}

			try {
				const loadedHooks = load(application, userHookPath, true);
				userHooks = userHooks.concat(loadedHooks);
				application.log.debug(`Loaded ${loadedHooks.length} user hooks: ${loadedHooks.map(loadedHook => loadedHook.name)}`);
			} catch (error) {
				application.log.error(`Failed loading hooks from ${userHookPath}: ${error.message}`);
				if (error.stack) {
					application.log.error(`${error.stack}`);
				}
				throw error;
			}
		}

		// Let the last user hook with a given name reign
		userHooks = [...new Set(userHooks.reverse())].reverse();

		userHooks = userHooks
			.map(userHook => {
				// Detect hooks conflicting with core hooks
				const conflictingCoreHook = application.hooks.filter(coreHook => coreHook.name === userHook.name)[0];
				if (conflictingCoreHook) {
					throw new Error(`Hook "${userHook.name}" from ${userHook.requirePath} conflicts with core hook "${conflictingCoreHook.name}", will not load.`);
				}
				return userHook;
			})
			.filter(Boolean);

		const registered = [
			...application.hooks,
			...userHooks
		].map(hook => hook.register(application));

		const jobs = runHookTree(getHookTree(registered), registered, application, {});
		await Promise.all(jobs);
		application.hooks = registered;
		return this;
	}
};
