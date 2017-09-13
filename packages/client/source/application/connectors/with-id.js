import {connect} from 'react-redux';
import selectItem from '../selectors/item';

export default connect(withId);

function withId(state) {
	const item = selectItem(state);
	return {
		id: item ? item.id : null
	};
}
