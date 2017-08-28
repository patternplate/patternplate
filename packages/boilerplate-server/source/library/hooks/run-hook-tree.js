import {
	find
} from 'lodash';

import runHook from './run-hook';

export default function runHookTree(tree, registered, application, checklist) {
	return Object.entries(tree)
		.map(async entry => {
			const [entryName, entryDependencies] = entry;
			for (const dependencyName of [...entryDependencies, entryName]) {
				if (!checklist[dependencyName]) {
					const hook = find(registered, {name: dependencyName});
					checklist[dependencyName] = hook.stages.start ?
						Promise.resolve() :
						runHook(hook, application);
				}
				await checklist[dependencyName];
			}
			return checklist[entryName];
		});
}
