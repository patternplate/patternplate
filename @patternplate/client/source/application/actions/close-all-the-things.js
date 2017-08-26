import {patchLocation, dismissAllMessages} from './';

export default closeAllTheThings;
export const type = 'CLOSE_ALL_THE_THINGS';

function closeAllTheThings() {
	return dispatch => {
		dispatch(dismissAllMessages());
		dispatch(patchLocation({
			query: {
				'issue': null,
				'lightbox': null,
				'menu-enabled': null,
				'search-enabled': null,
				'source': null,
				'source-expanded': null
			}
		}));
	};
}

closeAllTheThings.type = type;
