import ShoppingConstants from "../constants";

export const addProductToCart = (productId) => ({
  type: ShoppingConstants.ADD_PRODUCT_TO_CART,
  payload: productId,
});

export const removeProductFromCart = (productId) => ({
  type: ShoppingConstants.REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});

export const getProductIdsFromCart = () => ({
  type: ShoppingConstants.GET_PRODUCTIDS_FROM_CART,
  payload: null,
});

export const increaseProductQuantity = (productSKU) => ({
  type: ShoppingConstants.INCREASE_PRODUCT_QUANTITY,
  payload: productSKU,
});

export const decreaseProductQuantity = (productSKU) => ({
  type: ShoppingConstants.DECREASE_PRODUCT_QUANTITY,
  payload: productSKU,
});

export const setTotalPrice = (total) => ({
  type: ShoppingConstants.SET_TOTAL_COST,
  payload: total,
});

export const getTotalItems = () => ({
  type: ShoppingConstants.GET_TOTAL_ITEMS,
});
