import * as actions from '../actions';
import toggle from './toggle';

export default toggle(actions.toggleInfo, {defaultValue: false});
