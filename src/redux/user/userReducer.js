import { SET_CURRENT_USER } from './types';

const INITIAL_STATE = {
  currentUser: undefined
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
