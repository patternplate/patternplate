import { connect } from "react-redux";

export default connect(withToggleStates);

function withToggleStates(state) {
  return {
    dependenciesEnabled: state.dependenciesEnabled,
    dependentsEnabled: state.dependentsEnabled,
    manifestEnabled: state.manifestEnabled
  };
}
