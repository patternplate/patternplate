import {patchLocation} from './';

export default openDocumentation;
export const type = 'OPEN_DOCUMENTATION';

function openDocumentation() {
	return (dispatch, getState) => {
		const state = getState();
		const pathname = state.base;
		dispatch(patchLocation({pathname}));
	};
}

openDocumentation.key = '';
openDocumentation.property = '';
openDocumentation.type = type;
