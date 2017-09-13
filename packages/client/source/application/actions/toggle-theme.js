import {patchLocation} from './';

export default toggleTheme;
export const type = 'TOGGLE_THEME';

function toggleTheme(forced) {
	return (dispatch, getState) => {
		const theme = forced ? forced : getState().theme === 'dark' ? 'light' : 'dark';
		dispatch(patchLocation({
			query: {
				theme
			}
		}));
	};
}

toggleTheme.type = type;
