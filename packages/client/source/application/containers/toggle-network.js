import * as actions from '../actions';
import ToggleNetwork from '../components/toggle-network';
import withToggle from '../connectors/with-toggle';

export default withToggle(actions.toggleNetwork)(ToggleNetwork);
