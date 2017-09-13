import {pick} from 'lodash';

export default function composeReducers(...args) {
	const required = args.reduce((registry, arg) => {
		const amend = arg.dependencies || [];
		return [...registry, ...amend];
	}, []);

	const reducer = (state, action, dependencies) => {
		return args.reduce((state, arg) => {
			return arg(state, action, pick(dependencies, arg.dependencies || []));
		}, state);
	};

	reducer.dependencies = required;
	return reducer;
}
