import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {skippable} from '../behaviours';

import Message from '../components/message';
import * as demo from '../selectors/demo';

export default connect(mapState)(skippable(Message));

const selectMessage = createSelector(
	state => state.messages,
	demo.selectSrc,
	(messages, src) => messages[src]
);

const selectActive = createSelector(
	selectMessage,
	message => typeof message === 'string'
);

function mapState(state) {
	return {
		active: selectActive(state),
		message: selectMessage(state)
	};
}
