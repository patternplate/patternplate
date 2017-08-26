import {createAction} from 'redux-actions';
export default createAction('DEMO_CONTENT_RESIZE', ({width, height}) => ({width, height}));
