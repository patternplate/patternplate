'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollDemo;
const type = exports.type = 'SCROLL_DEMO';

let loop = void 0;
let frame = void 0;

function scrollDemo(payload) {
  return function (dispatch, getState) {
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