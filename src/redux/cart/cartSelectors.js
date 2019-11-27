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

export const selectCartTotalCast = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
