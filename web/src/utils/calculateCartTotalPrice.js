export const calculateCartTotalPrice = (items = []) => {
  const total = items.reduce((acc, { price, quantity }) => {
    let itemPrice = parseFloat(price.split(" ")[1].replace(/,/gi, "."));

    return acc + itemPrice * quantity;
  }, 0);

  return total;
};

export default calculateCartTotalPrice;
