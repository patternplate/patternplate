import url from "url";
import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { MainNavigation } from "@patternplate/components";
import { Link } from "@patternplate/components";
import { patchLocation } from "../actions";

import selectNavigation from "../selectors/navigation";
import selectDocs from "../selectors/docs";

export default connect(mapProps, mapDispatch)(MainNavigation);
export const NavigationHeader = MainNavigation.NavigationHeader;
export const NavigationToolbar = MainNavigation.NavigationToolbar;

function mapProps(state) {
  return {
    active: state.id,
    docs: selectDocs(state),
    patternsEnabled: state.patternsEnabled,
    navigation: selectNavigation(state)
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      onItemClick(e) {
        e.preventDefault();

        if (!e.currentTarget.href) {
          return { type: "noop" };
        }

        const parsed = url.parse(e.currentTarget.href);
        return push(`${parsed.pathname}?${parsed.query}`);
      },
      onLabelClick(query) {
        return patchLocation({query});
      }
    },
    dispatch
  );
}
