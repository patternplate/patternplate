import getHookDependencies from './get-hook-dependencies';

export default function getHookTree(registered) {
	return registered
		.reduce((registry, hook) => {
			const amend = {
				[hook.name]: getHookDependencies(hook.name, registered)
			};
			return {
				...registry,
				...amend
			};
		}, {});
}
