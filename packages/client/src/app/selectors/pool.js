import { createSearch } from "@patternplate/search";
import { createSelector } from "reselect";
import * as Immutable from "seamless-immutable";
import { flat as selectDocs } from "../selectors/docs";
import { flat as selectNavigation } from "../selectors/navigation";
import { enrich } from "../selectors/tree";

export const selectFlatPool = createSelector(
  selectDocs,
  selectNavigation,
  state => ({
    hide: state.hideEnabled,
    id: state.id,
    location: state.routing.locationBeforeTransitions,
    base: state.base,
    prefix: "doc",
    search: () => []
  }),
  (docs, nav, context) => {
    const enriched = flatten(docs.map(d => {
      return enrich(Immutable.asMutable(d), context);
    }));
    return Immutable.from(enriched)
      .concat(nav)
      .filter(item => Boolean(item.id) && Boolean(item.contentType))
  });

const selectSearch = createSelector(
  selectFlatPool,
  flatPool => {
    const search = createSearch(flatPool);
    return term => {
      const matches = search(term);
      return matches.map(item => flatPool.find(p => p.id === item));
    };
  }
);

const selectPool = createSelector(
  selectDocs,
  selectNavigation,
  state => ({
    hide: state.hideEnabled,
    id: state.id,
    location: state.routing.locationBeforeTransitions,
    base: state.base,
    prefix: "doc",
    search: selectSearch(state)
  }),
  (docs, nav, context) => {
    const enriched = flatten(docs.map(d => {
      return enrich(Immutable.asMutable(d), context);
    }));
    return Immutable.from(enriched)
      .concat(nav)
      .filter(item => Boolean(item.id) && Boolean(item.contentType))
  });

function flatten(tree, initial = []) {
  return tree.reduce((acc, item) => {
    acc.push(item);
    if (Array.isArray(item.children)) {
      flatten(item.children, acc);
    }
    return acc;
  }, initial);
}

export default selectPool;
export const flat = createSelector(
  selectDocs,
  selectNavigation,
  (docs, nav) => flatten(docs.concat(nav)).filter(item => item.type === "item")
);
