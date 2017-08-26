import {connect} from 'react-redux';

import Favicon from '../components/favicon';

export default connect(mapState)(Favicon);

function mapState(state) {
	return {
		source: state.config.favicon
	};
}
