import activeBlock from "./active-block";
import activeNode from "./active-node";
import base from "./base";
import codeEnabled from "./code-enabled";
import connection from "./connection";
import depth from "./depth";
import demo from "./demo";
import dependenciesEnabled from "./dependencies-enabled";
import dependentsEnabled from "./dependents-enabled";
import docEnabled from "./doc-enabled";
import fetching from "./fetching";
import id from "./id";
import infoEnabled from "./info-enabled";
import isStatic from "./is-static";
import manifestEnabled from "./manifest-enabled";
import messages from "./messages";
import navigationEnabled from "./navigation-enabled";
import networkEnabled from "./network-enabled";
import opacity from "./opacity";
import componentsEnabled from "./components-enabled";
import search from "./search";
import searchEnabled from "./search-enabled";
import searchPreview from "./search-preview";
import searchValue from "./search-value";
import schema from "./schema";
import shortcuts from "./shortcuts";
import theme from "./theme";
import hideEnabled from "./hide-enabled";
import window from "./window";

const ident = state => state || {};
const getDependencies = (reducer = {}) => reducer.dependencies || [];

export default {
  activeBlock,
  activeNode,
  base,
  codeEnabled,
  config: ident,
  connection,
  demo,
  dependenciesEnabled,
  dependentsEnabled,
  depth,
  docEnabled,
  fetching,
  hideEnabled,
  id,
  isStatic,
  infoEnabled,
  manifestEnabled,
  messages,
  navigationEnabled,
  networkEnabled,
  opacity,
  componentsEnabled,
  schema,
  search,
  searchEnabled,
  searchPreview,
  searchValue,
  shortcuts,
  startBase: ident,
  theme,
  window
};

export const dependencies = {
  connection: getDependencies(connection)
};
