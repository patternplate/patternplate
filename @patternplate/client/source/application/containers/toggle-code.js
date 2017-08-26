import * as actions from '../actions';
import Code from '../components/toggle-code';
import withToggle from '../connectors/with-toggle';
import withActiveForPattern from '../connectors/with-active-for-pattern';
import {skippable} from '../behaviours';

const CodeToggle = withToggle(actions.toggleCode)(Code);
export default withActiveForPattern(skippable(CodeToggle));
