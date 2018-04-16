import { createSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Markdown, themes } from "@patternplate/components";

import { flat as selectPool } from "../selectors/pool";
import { scrollTo } from "../actions";

const selectWidgetSrc = createSelector(
  state => state.staticBase,
  (staticBase, manifest) => `${staticBase}/widgets.js`
);

const selectThemes = createSelector(
  state => state.config.ui,
  ui => themes(ui)
);


function mapProps(state) {
  const location = state.routing.locationBeforeTransitions;
  return {
    base: state.base,
    hash: location.hash,
    pathname: location.pathname,
    query: location.query,
    widgetSrc: selectWidgetSrc(state),
    widgetState: {
      themes: selectThemes(state),
      base: state.base,
      pool: selectPool(state)
    }
  };
}

export function mapDispatch(dispatch) {
  return bindActionCreators({ scrollTo }, dispatch);
}

export default connect(mapProps, mapDispatch)(Markdown);
