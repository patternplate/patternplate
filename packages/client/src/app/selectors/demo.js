import { createSelector } from "reselect";
import selectItem from "./item";

export const selectSrc = createSelector(
  selectItem,
  state => state.base,
  (item, base) => {
    if (!item) {
      return null;
    }
    if (item.type !== "pattern") {
      return null;
    }
    return `${base}api/demo/${item.id}/index.html`;
  }
);
