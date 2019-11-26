import { TOGGLE_CART_DROPDOWN, ADD_ITEM_TO_CART } from './types';

export const toggleCartDropdown = () => {
  return {
    type: TOGGLE_CART_DROPDOWN
  };
};

export const addItemToCart = item => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  };
};
