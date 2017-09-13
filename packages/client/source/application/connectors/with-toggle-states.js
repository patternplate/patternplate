import {connect} from 'react-redux';

export default connect(withToggleStates);

function withToggleStates(state) {
	return {
		demoDependenciesEnabled: state.demoDependenciesEnabled,
		demoDependentsEnabled: state.demoDependentsEnabled,
		dependenciesEnabled: state.dependenciesEnabled,
		dependentsEnabled: state.dependentsEnabled,
		manifestEnabled: state.manifestEnabled
	};
}
