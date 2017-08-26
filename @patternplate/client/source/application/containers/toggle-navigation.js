import * as actions from '../actions';
import ToggleNavigation from '../components/toggle-navigation';
import withToggle from '../connectors/with-toggle';

export default withToggle(actions.toggleNavigation)(ToggleNavigation);
