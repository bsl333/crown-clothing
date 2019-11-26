import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectShowCartDropdown = createSelector(
  [selectCart],
  cart => cart.showCartDropdown
);
