import { PatternList } from "@patternplate/widgets";
import { createSearch } from "@patternplate/search";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import selectPool from "../selectors/pool";

export default connect(mapState)(PatternList);

const selectSearch = createSelector(
  selectPool,
  patterns => {
    const search = createSearch(patterns);
    return query => search(query).map(id => patterns.find(p => p.id === id));
  }
);

function mapState(state) {
  return {
    base: state.base,
    search: selectSearch(state)
  };
}
