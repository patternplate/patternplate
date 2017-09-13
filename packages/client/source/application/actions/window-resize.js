import {createAction} from 'redux-actions';
export default createAction('WINDOW_RESIZE', ({width, height}) => ({width, height}));
