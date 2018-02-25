import { merge } from "lodash";
import { createSelector } from "reselect";
import { flatten, sanitize } from "./tree";

const navigation = createSelector(
  state => state.schema.meta,
  state => state.id,
  state => state.hideEnabled,
  state => state.routing.locationBeforeTransitions,
  state => state.base,
  (tree, id, hide, location, base) => {
    const context = { base, hide, id, prefix: "pattern", location };
    return sanitize(merge({}, tree), context);
  }
);

export default navigation;

export const flat = createSelector(navigation, flatten);
