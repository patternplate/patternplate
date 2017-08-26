import {patchLocation} from './';

export default resizeDemo;
export const type = 'RESIZE_DEMO';

function resizeDemo(payload) {
	return dispatch => {
		dispatch(patchLocation({
			query: {
				width: payload.x,
				height: payload.y
			}
		}));
	};
}

resizeDemo.type = type;
