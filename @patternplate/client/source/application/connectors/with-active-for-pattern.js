import {connect} from 'react-redux';
import selectItem from '../selectors/item';

export default connect(withActiveForPattern);

function withActiveForPattern(state) {
	const item = selectItem(state);
	return {
		active: item ? item.type === 'pattern' : false
	};
}
