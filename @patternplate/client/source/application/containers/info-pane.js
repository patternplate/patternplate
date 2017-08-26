import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions';
import InfoPane from '../components/info-pane';
import * as item from '../selectors/item';
import withToggleStates from '../connectors/with-toggle-states';

function mapProps(state) {
	return {
		active: item.selectActive(state),
		demoDependencies: item.selectDemoDependencies(state),
		demoDependents: item.selectDemoDependents(state),
		dependencies: item.selectDependencies(state),
		dependents: item.selectDependents(state),
		env: item.selectEnv(state),
		envs: item.selectEnvs(state),
		flag: item.selectFlag(state),
		id: state => state.id,
		icon: item.selectIcon(state),
		type: item.selectType(state),
		name: item.selectName(state),
		mount: item.selectAutomount(state),
		manifest: item.selectManifest(state),
		tags: item.selectTags(state),
		version: item.selectVersion(state)
	};
}

export function mapDispatch(dispatch) {
	return bindActionCreators({
		onEnvChange: e => actions.changeEnvironment(e.target.value),
		onMountChange: e => actions.toggleMount({forced: e.target.checked})
	}, dispatch);
}

export default withToggleStates(connect(mapProps, mapDispatch)(InfoPane));
