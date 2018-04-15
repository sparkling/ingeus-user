import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_USER,
  LOAD_USER_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  user: {},
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION: {
      return state;
    }
    case UPDATE_USER: {
      return state.setIn(['user', action.property], action.value);
    }
    case LOAD_USER_SUCCEEDED: {
      return state.set('user', fromJS(action.user));
    }
    default: {
      return state;
    }
  }
}

export default homePageReducer;
