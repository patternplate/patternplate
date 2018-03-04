import { createSelector } from "reselect";
import selectItem from "./item";

export const selectSrc = createSelector(
  selectItem,
  state => state.base,
  (item, base) => {
    if (!item) {
      return null;
    }
    if (item.contentType !== "pattern") {
      return null;
    }
    return `${prefix(base)}/api/demo/${item.id}.html`;
  }
);

function prefix(base) {
  return base.charAt(base.length - 1) === "/"
    ? base.slice(0, base.length - 1)
    : base;
}
