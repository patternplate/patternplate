import fetch from 'isomorphic-fetch';
import * as demo from '../selectors/demo';

export default () => {
	return async (dispatch, getState) => {
		const getSrc = src(getState);
		const uri = getSrc();

		if (!uri) {
			return;
		}

		dispatch({
			type: 'LOAD_PATTERN_DEMO_START',
			payload: {id: uri}
		});

		const response = await fetch(uri, {
			headers: {Accept: 'text/html'}
		});

		// Bail if the src changed in the meantime
		if (uri !== getSrc()) {
			return;
		}

		const body = await response.text();

		// Bail if the src changed in the meantime
		if (uri !== getSrc()) {
			return;
		}

		if (response.status >= 400) {
			return dispatch({
				type: 'LOAD_PATTERN_DEMO_ERROR',
				payload: {id: uri, error: body}
			});
		}

		dispatch({
			type: 'LOAD_PATTERN_DEMO_SUCCESS',
			payload: {id: uri, contents: body}
		});
	};
};

function src(getState) {
	return () => demo.selectSrc(getState());
}
