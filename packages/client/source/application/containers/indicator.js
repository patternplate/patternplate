import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Indicator from '../components/indicator';

function mapProps(state) {
	return {
		status: state.connection,
		shortcut: state.shortcuts.reload
	};
}

function mapDispatch(dispatch) {
	return bindActionCreators({
		onClick: actions.reload
	}, dispatch);
}

export default connect(mapProps, mapDispatch)(Indicator);
