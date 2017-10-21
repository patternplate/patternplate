import queryString from "query-string";
import { createSelector } from "reselect";
import urlQuery from "../utils/url-query";
import selectItem from "./item";

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
