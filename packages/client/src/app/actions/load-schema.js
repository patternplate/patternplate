import url from "url";
import { createPromiseThunkAction } from "./promise-thunk-action";
import fetch from "../utils/fetch";

export default createPromiseThunkAction(
  "LOAD_SCHEMA",
  async (_, __, getState) => {
    const uri = [getState().base, "api/state.json"].join("/");
    const response = await fetch(uri);
    return response.json();
  }
);
