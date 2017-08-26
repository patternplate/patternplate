import assert from 'assert';
import {handleActions} from 'redux-actions';
import {pick} from 'lodash';

export default handleDependentActions;

function partialReduce(deps) {
	return handlers => {
		return Object.entries(handlers)
			.reduce((registry, entry) => {
				const [name, fn] = entry;
				registry[name] = (state, action) => {
					return fn(state, action, deps);
				};
				return registry;
			}, {});
	};
}

function handleDependentActions(actionHandlers, options) {
	assert.ok(Array.isArray(options.dependencies), 'options.dependencies must be an array');

	const handler = (...args) => {
		const [, , dependencies = {}] = args;

		if (Object.keys(dependencies).length > 0) {
			const missing = options.dependencies.filter(dependency => !(dependency in dependencies));
			assert.ok(
				missing.length === 0,
				`dependencies for ${Object.keys(actionHandlers).join(', ')} must be present in state. missing: ${missing.join(',')}. available: ${Object.keys(dependencies)}`
			);
		}

		const deps = pick(dependencies, options.dependencies);
		const handlers = partialReduce(deps)(actionHandlers);
		const reducer = handleActions(handlers, options.defaultValue);
		return reducer(...args);
	};
	handler.dependencies = options.dependencies;
	return handler;
}
