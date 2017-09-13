import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Markdown from '../components/common/markdown';
import {scrollTo} from '../actions';

function mapProps(state) {
	const location = state.routing.locationBeforeTransitions;
	return {
		base: state.base,
		hash: location.hash,
		pathname: location.pathname,
		query: location.query
	};
}

export function mapDispatch(dispatch) {
	return bindActionCreators({scrollTo}, dispatch);
}

export default connect(mapProps, mapDispatch)(Markdown);
