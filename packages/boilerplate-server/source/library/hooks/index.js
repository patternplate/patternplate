import {
	resolve
} from 'path';

import getHookTree from './get-hook-tree';
import load from './load';
import runHookTree from './run-hook-tree';

export default async function(application) {
	// load the system hooks
	const hooks = await load(application, resolve(application.runtime.base, 'application', 'hooks'));

	// allow access to all the hooks
	application.hooks = hooks;

	// register them
	const registered = await Promise.all(hooks.map(async hook => hook.register(application)));

	// get interpendence tree
	const tree = getHookTree(registered);

	// run the tree, wait for all dependencies
	const jobs = runHookTree(tree, registered, application, {});
	await Promise.all(jobs);

	return application;
};
