import url from "url";
import { createPromiseThunkAction } from "./promise-thunk-action";
import fetch from "../utils/fetch";

export default createPromiseThunkAction(
  "LOAD_SCHEMA",
  async (_, __, getState) => {
    const response = await fetch(`${prefix(base)}/api/state.json`);
    return response.json();
  }
);

function prefix(base) {
  return base.charAt(base.length - 1) === "/"
    ? base.slice(0, base.length - 1)
    : base;
}
