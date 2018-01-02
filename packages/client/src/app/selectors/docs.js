import { merge } from "lodash";
import { createSelector } from "reselect";
import Immutable from "seamless-immutable";
import { flatten, sanitize } from "./tree";

const docs = createSelector(
  state => state.schema.docs,
  state => state.id,
  state => state.hideEnabled,
  state => state.routing.locationBeforeTransitions,
  state => state.base,
  (tree, id, hide, location, base) => {
    const context = { hide, id, prefix: "doc", location, base };
    const t = sanitize(merge({}, tree), context);
    return Immutable.from(t);
  }
);

export default docs;
export const flat = createSelector(docs, flatten);
