import patch from './patch-location';
import selectItem from '../selectors/item';
import selectPool from '../selectors/pool';

export default arrow;
export const type = 'ARROW';

const OFFSETS = {
	up: -1,
	down: 1,
	default: 0
};

function arrow(payload) {
	return (dispatch, getState) => {
		const state = getState();

		// Is handled locally
		if (state.searchEnabled) {
			return;
		}

		if (!state.navigationEnabled) {
			return;
		}

		switch (payload) {
			case 'left': {
				const i = selectItem(state);
				const p = selectPool(state);
				const id = i.path.slice(0, i.path.length - 1).join('/');
				const next = p.find(i => i.id === id);
				return next && next.href && go(dispatch)(next.href);
			}
			case 'up':
			case 'down':
			default: {
				const offset = payload in OFFSETS ? OFFSETS[payload] : OFFSETS.default;
				const next = jump(selectPool(state), selectItem(state), offset);
				return next && go(dispatch)(next);
			}
		}
	};
}

function go(dispatch) {
	return next => dispatch(
		patch({
			pathname: next === '/' ? next : `/${next}`
		})
	);
}

function jump(pool, start, offset) {
	if (!start) {
		return '';
	}

	if (offset === 0) {
		return start;
	}

	let result = start.href;
	let index = pool.indexOf(start);

	while (result === start.href) {
		index += offset;
		result = pool[index].href;

		if (offset < 0 && index === 0) {
			break;
		}
		if (offset > 0 && index === pool.length) {
			break;
		}
	}

	return result;
}
