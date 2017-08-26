import * as actions from '../actions';
import Opacity from '../components/toggle-opacity';
import withToggle from '../connectors/with-toggle';
import withActiveForPattern from '../connectors/with-active-for-pattern';
import {skippable} from '../behaviours';

const OpacityToggle = withToggle(actions.toggleOpacity)(Opacity);
export default withActiveForPattern(skippable(OpacityToggle));
