import { createSearch } from "@patternplate/search";
import { merge } from "lodash";
import { createSelector } from "reselect";
import Immutable from "seamless-immutable";
import { flat as selectNavigation } from "../selectors/navigation";
import { flatten, sanitize } from "./tree";

const selectSearch = createSelector(
  selectNavigation,
  (patterns) => {
    const search = createSearch(patterns);
    return term => {
      const matches = search(term);
      return matches.map(item => patterns.find(p => p.id === item));
    };
  }
);

const docs = createSelector(
  state => state.schema.docs,
  state => state.id,
  state => state.hideEnabled,
  state => state.routing.locationBeforeTransitions,
  state => state.base,
  selectSearch,
  (tree, id, hide, location, base, search) => {
    const context = { hide, id, prefix: "doc", location, base, search };
    const t = sanitize(merge({}, tree), context);
    return Immutable.from(t);
  }
);

export default docs;
export const flat = createSelector(docs, flatten);
