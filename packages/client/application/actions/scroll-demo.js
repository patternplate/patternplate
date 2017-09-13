'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = scrollDemo;
var type = exports.type = 'SCROLL_DEMO';

var loop = void 0;
var frame = void 0;

function scrollDemo(payload) {
	return function (dispatch, getState) {
		function run() {
			loop = global.requestAnimationFrame(function () {
				var state = getState();

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