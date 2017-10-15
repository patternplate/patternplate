import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import Indicator from "../components/indicator";

export default connect(mapProps, mapDispatch)(Indicator);

function mapProps(state) {
  return {
    status: selectStatus(state),
    shortcut: state.shortcuts.reload
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      onClick: actions.reload
    },
    dispatch
  );
}

function selectStatus(state) {
  if (state.demo.error) {
    return "error";
  }
  return state.connection;
}
