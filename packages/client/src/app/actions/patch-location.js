import { merge } from "lodash";
import { push } from "react-router-redux";
import url from "url";

export default patchLocation;
export const type = "PATCH_LOCATION";

function patchLocation(payload) {
  return (dispatch, getState) => {
    const state = getState();
    const location = state.routing.locationBeforeTransitions;

    if (payload.hasOwnProperty("pathname")) {
      payload.pathname = payload.pathname.indexOf(state.base)
        ? payload.pathname
        : `${prefix(state.base)}/${payload.pathname}`;
    }

    dispatch(push(merge({}, location, payload)));
  };
}

patchLocation.type = type;

function prefix(base) {
  return base.charAt(base.length - 1) === "/"
    ? base.slice(0, base.length - 1)
    : base;
}
