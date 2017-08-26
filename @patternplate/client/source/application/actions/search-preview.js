import {patchLocation} from './';

export default searchPreview;
export const type = 'SEARCH_PREVIEW';

const MOVEMENTS = {
	up: -1,
	down: 1
};

function searchPreview(payload) {
	if (typeof payload === 'number') {
		return dispatch => {
			dispatch(patchLocation({
				query: {
					'search-preview': payload
				}
			}));
		};
	}

	return (dispatch, getState) => {
		const state = getState();
		const delta = MOVEMENTS[payload] || 0;

		dispatch(patchLocation({
			query: {
				'search-preview': state.searchPreview + delta
			}
		}));
	};
}

searchPreview.type = type;
