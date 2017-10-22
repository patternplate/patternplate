import { connect } from "react-redux";

import { mountable, skippable } from "../behaviours";
import DocPane from "../components/doc-pane";
import * as item from "../selectors/item";

export default connect(mapProps)(skippable(mountable(DocPane)));

function mapProps(state) {
  return {
    active: Boolean(item.selectContents(state)),
    doc: item.selectContents(state)
  };
}
