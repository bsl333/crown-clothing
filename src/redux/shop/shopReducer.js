import SHOP_DATA from './shoppingData';

const INITIAL_DATA = {
  collections: SHOP_DATA
};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
