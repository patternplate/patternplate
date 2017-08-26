import {createAction} from 'redux-actions';
import handleDependentActions from './handle-dependent-actions';

const ident = i => i;
const asyncIdent = async i => i;

export function createPromiseThunkAction(name, rawCreator) {
	const creator = rawCreator || asyncIdent;

	const fn = payload => {
		const delayedAction = createAction(`${name}_DELAYED`);
		const successAction = createAction(`${name}_SUCCESS`);
		const startAction = createAction(`${name}_START`);
		const throwsAction = createAction(`${name}_THROWS`);

		return async (dispatch, getState) => {
			dispatch(startAction(payload, ident, getState));
			const delayedTimer = global.setTimeout(() => {
				dispatch(delayedAction(payload, ident, getState));
			}, 1000);
			try {
				const result = await creator(payload, dispatch, getState);
				global.clearTimeout(delayedTimer);
				dispatch(successAction(result));
				return result;
			} catch (error) {
				console.error(error);
				global.clearTimeout(delayedTimer);
				dispatch(throwsAction(error));
				return error;
			}
		};
	};
	fn.__name = name;
	return fn;
}

export function handlePromiseThunkAction(rawName, handler, options = {}) {
	const name = rawName.__name || rawName;
	options.dependencies = options.dependencies || [];
	const reducer = handleDependentActions({
		[`${name}_START`]: handler.start || ident,
		[`${name}_DELAYED`]: handler.delayed || ident,
		[`${name}_SUCCESS`]: handler.success || ident,
		[`${name}_THROWS`]: handler.throws || ident
	}, options);
	return reducer;
}
