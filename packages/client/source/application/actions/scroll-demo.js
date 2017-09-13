export default scrollDemo;
export const type = 'SCROLL_DEMO';

let loop;
let frame;

function scrollDemo(payload) {
	return (dispatch, getState) => {
		function run() {
			loop = global.requestAnimationFrame(() => {
				const state = getState();

				if (state.scrollDemoX.x !== frame.x) {
					dispatch({
						type: 'SCROLL_DEMO_X',
						payload: frame.x
					});
				}
				if (state.scrollDemoY.y !== frame.y) {
					dispatch({
						type: 'SCROLL_DEMO_Y',
						payload: frame.y
					});
				}
				run();
			});
		}

		if (!loop) {
			run();
		}

		frame = payload;
	};
}

scrollDemo.type = type;
