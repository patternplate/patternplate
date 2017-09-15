import getIdByPathname from '../utils/get-id-by-pathname';
import {handleActions} from 'redux-actions';

function handler(_, {payload}) {
  return payload.query['active-node'];
}

export default handleActions(
  {
    '@@router/LOCATION_CHANGE': handler
  }
);
