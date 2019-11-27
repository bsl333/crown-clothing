import {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_ITEM_FROM_CART
} from './types';

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

export const removeItemFromCart = item => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item
  };
};

export const clearItemFromCart = item => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: item
  };
};
