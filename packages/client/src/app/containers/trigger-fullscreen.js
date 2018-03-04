import querystring from "querystring";
import { connect } from "react-redux";
import Fullscreen from "../components/trigger-fullscreen";
import withActiveForPattern from "../connectors/with-active-for-pattern";
import withId from "../connectors/with-id";
import * as demo from "../selectors/demo";
import { skippable } from "../behaviours";

const SkippableFullscreen = withActiveForPattern(skippable(Fullscreen));

const mapProps = state => {
  const q = querystring.stringify({
    reload: state.isStatic ? null : true
  });
  return {
    href: `${demo.selectSrc(state)}?${q}`
  };
};

export default connect(mapProps)(withId(SkippableFullscreen));
