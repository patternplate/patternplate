import { connect } from "react-redux";
import { Logo } from "@patternplate/components";

export default connect(mapState)(Logo);

function mapState(state) {
  return {
    source: state.config.ui.renderedLogo
  };
}
