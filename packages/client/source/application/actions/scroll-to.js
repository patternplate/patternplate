import scrollparent from 'scrollparent';

export default scrollTo;
export const type = 'SCROLL_TO';

function scrollTo(hash) {
	const {document} = global;
	if (document) {
		const target = document.getElementById(hash);
		const parent = scrollparent(target);
		parent.scrollTop = target.offsetTop;
	}

	return dispatch => {
		dispatch({
			type: 'SCROLLED_TO',
			payload: hash
		});
	};
}

scrollTo.type = type;
