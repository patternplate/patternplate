import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";

export default connect(mapState)((props) => {
  const items = props.contributions.filter(contribution => contribution.anchor === props.anchor);

  return (
    <React.Fragment>
      {typeof props.render === "function" ? items.map(item => props.render(item)) : null}
    </React.Fragment>
  );
});

function mapState(state) {
  return {
    contributions: (state.schema.plugins || []).reduce((acc, plugin) => {
      const {contributes} = plugin;
      if (typeof contributes !== "object") {
        return acc;
      }

      const {menus} = contributes;
      if (!Array.isArray(menus)) {
        return acc;
      }

      return menus;
    }, [])
  };
}
