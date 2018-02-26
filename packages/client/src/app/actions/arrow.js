import { push } from "react-router-redux";
import toggleNavigation from "./toggle-navigation";
import selectPool from "../selectors/pool";

export default arrow;
export const type = "ARROW";

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

    switch (payload) {
      case "right": {
        if (state.navigationEnabled) {
          return dispatch(toggleNavigation());
        }
        return;
      }
      case "left": {
        if (!state.navigationEnabled) {
          return dispatch(toggleNavigation());
        }
        return;
      }
      case "up":
      case "down":
      default: {
        if (!state.navigationEnabled) {
          return;
        }

        const offset = payload in OFFSETS ? OFFSETS[payload] : OFFSETS.default;
        const pool = selectPool(state);
        const index = pool.findIndex((item) => `${item.contentType}/${item.id}` === state.id || state.id === '/' && item.id === '/root');
        const next = pool[index + offset];
        if (next) {
          go(dispatch)(next.href);
        }
      }
    }
  };
}

function go(dispatch) {
  return next => dispatch(push(next));
}

