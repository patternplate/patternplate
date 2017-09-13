import * as actions from '../actions';
import toggle from './toggle';

export default toggle(actions.toggleSearch, {defaultValue: false});
