export const countItemsFromCart = (items = []) => {
  return items.reduce((itemsCount, { quantity }) => {
    return itemsCount + quantity;
  }, 0);
};

export default countItemsFromCart;
