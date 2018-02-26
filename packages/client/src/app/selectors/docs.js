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

const selectDocsTree = createSelector(
  state => state.schema.docs,
  state => state.id,
  state => state.hideEnabled,
  state => state.routing.locationBeforeTransitions,
  state => state.base,
  selectSearch,
  (tree, id, hide, location, base, search) => {
    const context = { hide, id, prefix: "doc", location, base, search };
    return sanitize(merge({}, tree), context);
  }
);

const selectFirstItem = createSelector(
  selectDocsTree,
  (tree) => {
    const list = flatten(tree);
    return list ? list[0]: null;
  }
);

const docs = createSelector(
  selectDocsTree,
  selectFirstItem,
  state => state.id,
  (tree, first, id) => {
    if (id === '/' && first) {
      first.active = true;
    }
    return Immutable.from(tree);
  }
);

export default docs;
export const flat = createSelector(docs, flatten);
