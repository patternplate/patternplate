import {Network} from '@patternplate/components';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {bindActionCreators} from 'redux';
import vis from 'vis';
import * as actions from '../actions';
import {selectId} from '../selectors/item';
import {flatten} from '../selectors/tree';

export default connect(mapProps, mapDispatch)(Network);

const selectFlattened = createSelector(
  state => state.navigation,
  (meta) => flatten(meta)
);

const selectNodes = createSelector(
  selectFlattened,
  flat => {
    return flat
      .filter(f => f.type === 'pattern')
      .map(f => ({
        id: f.id,
        label: f.manifest.displayName,
        value: f.dependencies.length,
        mass: (f.dependencies.length + 10) * 15
      }));
  }
);

const selectNodesDataSet = createSelector(
  selectNodes,
  (nodes) => new vis.DataSet(nodes)
);

const selectEdges = createSelector(
  selectFlattened,
  flat => {
    return flat
      .filter(f => f.type === 'pattern')
      .reduce((r, f) => {
        const deps = f.dependencies
          .map(d => ({from: f.id, to: d}));

        const demoDeps = f.demoDependencies
          .map(d => ({from: f.id, to: d, dashes: true}));

        Array.prototype.push.apply(r, deps);
        Array.prototype.push.apply(r, demoDeps);

        return r;
      }, []);
  }
);

const selectEdgesDataSet = createSelector(
  selectEdges,
  (edges) => new vis.DataSet(edges)
);


function mapProps(state) {
  return {
    active: state.activeNode || selectId(state),
    edges: selectEdgesDataSet(state),
    nodes: selectNodesDataSet(state)
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {onSelect: actions.activateNode},
    dispatch
  );
}
