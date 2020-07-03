import ShoppingConstants from "../constants";

export const getProductList = () => ({
  type: ShoppingConstants.GET_PRODUCT_LIST,
  payload: null,
});

export const setProductList = (productList) => ({
  type: ShoppingConstants.SET_PRODUCT_LIST,
  payload: productList,
});

export default { getProductList, setProductList };
