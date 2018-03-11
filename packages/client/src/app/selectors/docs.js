import { createSearch } from "@patternplate/search";
import { merge } from "lodash";
import { createSelector } from "reselect";
import Immutable from "seamless-immutable";
import { flat as selectNavigation } from "../selectors/navigation";
import { enrich, flatten, sanitize } from "./tree";

const sd = createSelector(
  state => state.schema.docs,
  state => state.id,
  state => state.hideEnabled,
  state => state.routing.locationBeforeTransitions,
  state => state.base,
  () => () => [],
  (tree, id, hide, location, base, search) => {
    const context = { hide, id, prefix: "doc", location, base, search };
    return flatten(sanitize(merge({}, tree), context));
  }
);

const selectFlatPool = createSelector(
  sd,
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
    const enriched = docs.map(d => {
      return enrich(Immutable.asMutable(d), context);
    });
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

const selectQueries = createSelector(
  selectDocsTree,
  tree => flatten(tree)
    .map(item => (item.manifest.options || {}).query)
    .filter(Boolean)
);

const selectQueried = createSelector(
  selectDocsTree,
  selectQueries,
  (tree, queries) => {
    const search = createSearch(flatten(tree));
    return queries.reduce((acc, query) => {
      return acc.concat(search(query).filter(r => acc.indexOf(r) === -1));
    }, []);
  }
);

const selectDocs = createSelector(
  selectDocsTree,
  selectFirstItem,
  selectQueried,
  state => state.id,
  (tree, first, queried, id) => {
    tree.children = tree.children.filter(child => child.type === "folder" || queried.indexOf(child.id) === -1);

    if (id === '/' && first) {
      first.active = true;
    }
    return Immutable.from(tree);
  }
);

export default selectDocs;
export const flat = createSelector(selectDocs, flatten);
