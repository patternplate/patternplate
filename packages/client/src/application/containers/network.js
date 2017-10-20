import React from "react";
import { Network } from "@patternplate/components";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { bindActionCreators } from "redux";
import vis from "vis";
import * as actions from "../actions";
import { selectId } from "../selectors/item";
import { flatten } from "../selectors/tree";

class NetworkContainer extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { detailed: null };
    this.handleHover = this.handleHover.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleHover(id) {
    this.setState({ detailed: id });
  }

  handleBlur() {
    this.setState({ detailed: null });
  }

  render() {
    return (
      <Network
        {...this.props}
        detailed={this.state.detailed}
        onHover={this.handleHover}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default connect(mapProps, mapDispatch)(NetworkContainer);

const selectFlattened = createSelector(
  state => state.navigation,
  meta => flatten(meta)
);

const selectNodes = createSelector(selectFlattened, flat => {
  return flat.filter(f => f.type === "pattern").map(f => ({
    id: f.id,
    label: f.manifest.displayName,
    value: f.dependencies.length,
    mass: (f.dependencies.length + 10) * 15
  }));
});

const selectNodesDataSet = createSelector(
  selectNodes,
  nodes => new vis.DataSet(nodes)
);

const selectEdges = createSelector(selectFlattened, flat => {
  return flat.filter(f => f.type === "pattern").reduce((r, f) => {
    const deps = f.dependencies.map(d => ({ from: f.id, to: d }));

    const demoDeps = f.demoDependencies.map(d => ({
      from: f.id,
      to: d,
      dashes: true
    }));

    Array.prototype.push.apply(r, deps);
    Array.prototype.push.apply(r, demoDeps);

    return r;
  }, []);
});

const selectEdgesDataSet = createSelector(
  selectEdges,
  edges => new vis.DataSet(edges)
);

function mapProps(state) {
  return {
    active: state.activeNode || selectId(state),
    edges: selectEdgesDataSet(state),
    nodes: selectNodesDataSet(state)
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators({ onSelect: actions.activateNode }, dispatch);
}
