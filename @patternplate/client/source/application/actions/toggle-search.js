import {patchLocation, search} from './';
export default toggleSearch;

export const type = 'TOGGLE_SEARCH_ENABLED';

function toggleSearch(payload = {}) {
	return (dispatch, getState) => {
		const state = getState();

		if (payload.sync) {
			focus(state.searchEnabled);
			return;
		}

		const next = ('focus' in payload) ? payload.focus : !state.searchEnabled;

		if (!next) {
			dispatch(search({persist: true, value: value()}));
		}

		dispatch(patchLocation({query: {'search-enabled': next, 'search-preview': 0}}));
	};
}

toggleSearch.type = type;
toggleSearch.key = 'search-enabled';
toggleSearch.property = 'searchEnabled';

function focus(next) {
	if (!next) {
		return;
	}

	if (!('document' in global)) {
		return;
	}

	setTimeout(() => {
		const el = global.document.query('input[data-search]');

		if (!el) {
			return;
		}

		if (global.document.activeElement !== el) {
			el.focus();
		}

		const range = el.value.length;
		el.setSelectionRange(range, range);
	}, 100);
}

function value() {
	if (!('document' in global)) {
		return;
	}

	const el = global.document.query('input[data-search]');

	if (!el) {
		return;
	}

	return el.value;
}
