import queryString from "query-string";
import { createSelector } from "reselect";
import urlQuery from "../utils/url-query";
import selectItem from "./item";

const selectEnv = createSelector(
  state => state.environment,
  state => state.schema.envs,
  (env, envs) =>
    Array.isArray(envs) ? envs.find(e => e.name === env) : { name: "index" }
);

export const selectSrc = createSelector(
  selectItem,
  state => state.base,
  (item, base) => {
    if (!item) {
      return null;
    }
    return `${base}demo/${item.id}/index.html`;
  }
);
