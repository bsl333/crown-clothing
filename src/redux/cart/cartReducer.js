import { TOGGLE_CART_DROPDOWN, ADD_ITEM_TO_CART } from './types';
import { addItemToCart } from './cartUtils';

const INITIAL_STATE = {
  showCartDropdown: false,
  cartItems: [],
  itemCount: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        itemCount: state.itemCount + 1,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
