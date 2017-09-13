import * as actions from '../actions';
import toggle from './toggle';

export default toggle(actions.toggleMount, {defaultValue: null});
