import ShoppingConstants from "../constants";

export const getProductList = (productList) => ({
  type: ShoppingConstants.GET_PRODUCT_LIST,
  payload: productList,
});

export const addProductToCart = (productId) => ({
  type: ShoppingConstants.ADD_PRODUCT_TO_CART,
  payload: productId,
});

export const removeProductFromCart = (productId) => ({
  type: ShoppingConstants.REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});
