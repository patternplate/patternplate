import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import * as actions from "../actions";

export default connect(mapState, mapDispatch)((props) => {
  const items = props.contributions
    .filter(contribution => contribution.anchor === props.anchor);

  return (
    <React.Fragment>
      {typeof props.render === "function" ? items.map(item => props.render(item, {
        onClick(e) {
          e.stopPropagation();
          props.onClick(item);
        }
      })) : null}
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

      return menus.map(menu => {
        menu.plugin = plugin.id;
        return menu;
      });
    }, [])
  };
}

function mapDispatch(dispatch) {
  return {
    onClick(menu) {
      dispatch(actions.pluginCommand(menu));
    }
  };
}
