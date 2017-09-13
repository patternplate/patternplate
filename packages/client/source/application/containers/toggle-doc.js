import * as actions from '../actions';
import Doc from '../components/toggle-doc';
import withToggle from '../connectors/with-toggle';
import withActiveForDoc from '../connectors/with-active-for-doc';

const DocToggle = withToggle(actions.toggleDoc)(Doc);
export default withActiveForDoc(DocToggle);
