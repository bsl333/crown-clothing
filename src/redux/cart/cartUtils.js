export const addItemToCart = (existingCartItems, newItem) => {
  const itemExists = existingCartItems.find(item => item.id === newItem.id);

  if (itemExists) {
    return existingCartItems.map(item => {
      if (item.id === newItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }
  return [...existingCartItems, { ...newItem, quantity: 1 }];
};
