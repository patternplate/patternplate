import {connect} from 'react-redux';

import Logo from '../components/logo';

export default connect(mapState)(Logo);

function mapState(state) {
	return {
		source: state.config.logo
	};
}
