import { createSelector } from "reselect";
import { flat as selectDocs } from "./docs";
import { flat as selectPool } from "./pool";
import createRelationSelector from "./relation";

const selectVirtual = createSelector(
  selectDocs,
  docs => {
    return docs.filter(d => {
      const {manifest} = d;
      const {options = {}} = manifest;
      const {query = ""} = options;
      return Boolean(query);
    });
  }
);

const selectItem = createSelector(
  selectPool,
  state => state.id,
  (pool, id) => {
    const item = pool.find(item => id === `${item.contentType}/${item.id}`);

    if (item) {
      return item;
    }

    if (id === '/') {
      return pool[0];
    }
  }
);

export default selectItem;

const filter = hidden => {
  return hidden
    ? item => (item.manifest.options || {}).hidden !== true
    : i => i;
};

const selectFilter = createSelector(state => state.hide, hide => filter(hide));

const relation = key => createRelationSelector(key, selectItem, selectFilter);

export const selectDependencies = relation("dependencies");
export const selectDependents = relation("dependents");

export const selectManifest = createSelector(
  selectItem,
  item => (item ? JSON.stringify(item.manifest, null, "  ") : "")
);

export const selectContentType = createSelector(
  selectItem,
  item => (item ? item.contentType : "")
);

export const selectType = createSelector(
  selectItem,
  item => (item ? item.type : "")
);

export const selectActive = createSelector(
  selectItem,
  state => state.searchEnabled,
  (item, search) => !search && item !== null && typeof item !== "undefined"
);

export const selectIcon = createSelector(
  selectItem,
  item => (item ? item.manifest.icon || item.type : "")
);

export const selectName = createSelector(
  selectItem,
  item => (item ? item.manifest.displayName : "")
);

export const selectTags = createSelector(
  selectItem,
  item => (item ? item.manifest.tags || [] : [])
);

export const selectVersion = createSelector(
  selectItem,
  item => (item ? item.manifest.version : "")
);

export const selectFlag = createSelector(
  selectItem,
  item => (item ? item.manifest.flag : "")
);

export const selectId = createSelector(
  selectItem,
  item => (item ? item.id : "")
);

export const selectContents = createSelector(selectItem, item => {
  if (!item) {
    return null;
  }
  return typeof item.contents === "string" ? item.contents : null;
});

export const selectDescription = createSelector(
  selectItem,
  item => (item ? item.manifest.description : "")
);
