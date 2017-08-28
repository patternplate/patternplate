import {resolve} from 'path';

import requireAll from 'require-all';
import hookFactory from './default';

export default function loadHooks(application, path, modules = false) {
	const rawAppHooks = requireAll(path);
	const enabledHooks = selectEnabledHooks(application);

	const appHooks = Object.entries(rawAppHooks)
		.map(entry => {
			const [name, hook] = entry;
			const mod = hook.index || hook;
			const requirePath = resolve(path, name);
			return {...mod, name, requirePath};
		})
		.map(hook => Object.assign(hook, {requirePath: resolve(path, hook.name)}));

	const moduleHooks = modules ?
		Object.values(enabledHooks)
			.filter(moduleName => typeof moduleName === 'string')
			.map(moduleName => {
				const requirePath = require.resolve(moduleName);
				const mod = require(moduleName);
				mod.requirePath = requirePath;
				return mod;
			}) :
		[];

	return [...appHooks, ...moduleHooks]
		.filter(Boolean).map(hook => hookFactory(application, hook.name, hook));
}

function selectEnabledHooks(application) {
	const config = application.configuration || {};
	const hooks = config.hooks || {};
	const enabled = hooks.enabled || {};
	return enabled;
}
