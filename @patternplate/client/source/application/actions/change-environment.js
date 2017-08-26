import {patchLocation} from './';

export default changeEnvironment;
export const type = 'CHANGE_ENVIRONMENT';

function changeEnvironment(environment) {
	return dispatch => {
		dispatch(patchLocation({
			query: {environment}
		}));
	};
}

changeEnvironment.type = type;
