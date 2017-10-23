import { connect } from "react-redux";
import { createSelector } from "reselect";
import { skippable } from "../behaviours";

import Message from "../components/message";
import * as demo from "../selectors/demo";

export default connect(mapState)(skippable(Message));

const selectLines = createSelector(
  state => state.messages,
  demo.selectSrc,
  (messages, src) => (messages[src] || "").split("\n").filter(Boolean)
);

const selectMessage = createSelector(selectLines, lines =>
  lines
    .slice(0, 2)
    .map(l => l.trim())
    .join("\n")
);

const selectDetails = createSelector(selectLines, lines => {
  if (lines.length <= 2) {
    return "";
  }
  return lines.join("\n");
});

const selectActive = createSelector(
  selectMessage,
  message => typeof message === "string" && message !== ""
);

function mapState(state) {
  return {
    active: selectActive(state),
    message: selectMessage(state),
    details: selectDetails(state),
    summary: "Details"
  };
}
