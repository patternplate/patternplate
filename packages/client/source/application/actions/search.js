import raf from 'raf';
import {patchLocation} from './';

export default search;
export const type = 'SEARCH';

function search(payload) {
	return (dispatch, getState) => {
		const state = getState();

		dispatch({
			type: 'SET_SEARCH',
			payload: payload.value
		});

		raf(() => {
			if (payload.persist) {
				dispatch(patchLocation({
					query: {
						'search': payload.value,
						'search-preview': state.search === payload.value ? state.searchPreview : 0
					}
				}));
			} else if (payload.perform) {
				dispatch({
					type: 'PERFORM_SEARCH',
					payload: payload.value
				});
			}
		});
	};
}

search.type = type;
