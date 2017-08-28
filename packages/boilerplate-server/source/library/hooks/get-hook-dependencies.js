import {find} from 'lodash';

export default function getHookDependencies(hookName, registered) {
	const hook = find(registered, {name: hookName});

	if (!hook) {
		throw new Error(`Could not find hook ${hookName}`);
	}

	return hook.after.reduce((dependencies, after) => {
		const [nameSpace, dependencyName] = after.split(':');

		if (nameSpace === 'hooks' && !find(registered, {name: dependencyName})) {
			throw new Error(`Could not find hook dependency ${dependencyName} for ${hookName}`);
		}

		return nameSpace === 'hooks' ? dependencies.concat([
			...getHookDependencies(dependencyName, registered),
			dependencyName
		]) : dependencies;
	}, []);
}
