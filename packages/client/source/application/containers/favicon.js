import {connect} from 'react-redux';

import Favicon from '../components/favicon';

export default connect(mapState)(Favicon);

function mapState(state) {
	return {
    error: state.demo.error,
		source: state.config.favicon
	};
}
