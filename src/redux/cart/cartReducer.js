import { TOGGLE_CART_DROPDOWN } from './types';

const INITIAL_STATE = {
  showCartDropdown: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown
      };
    default:
      return state;
  }
};
