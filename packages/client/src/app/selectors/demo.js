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
    return [base, 'api/demo', `${item.id}.html`].join("/");
  }
);
