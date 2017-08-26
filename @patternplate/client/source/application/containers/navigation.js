import {connect} from 'react-redux';
import Navigation from '../components/navigation';
import selectNavigation from '../selectors/navigation';
import selectDocs from '../selectors/docs';

export default connect(mapProps)(Navigation);

function mapProps(state) {
	return {
		active: state.id,
		docs: selectDocs(state),
		navigation: selectNavigation(state)
	};
}
