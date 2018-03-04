import { PatternDemo } from "@patternplate/widgets";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import selectPool from "../selectors/pool";


export default connect(mapState)(PatternDemo);

const selectGet = createSelector(
  selectPool,
  pool => id => pool.find(pattern => pattern.id === id)
);

const selectSrc = createSelector(
  selectGet,
  state => state.base,
  (get, base) => {
    return id => {
      const item = get(id);
      if (!item) {
        return null;
      }
      if (item.contentType !== "pattern") {
        return null;
      }
      return [base, "api/demo", `${item.id}.html`].join("/");
    };
  }
);

function mapState(state) {
  return {
    get: selectGet(state),
    src: selectSrc(state),
    reload: state.isStatic ? null : true
  };
}
