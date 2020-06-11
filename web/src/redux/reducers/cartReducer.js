import ShoppingConstants from "../constants";

const CartInitialState = {
  count: 0,
  items: [],
  errorMessage: "",
};

const cartReducer = (state = CartInitialState, action) => {
  const { type, payload } = action; 

  switch (type) {
    case ShoppingConstants.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        count: state.count + 1,
        items: payload.filter(({product}) => product),
      };
    case ShoppingConstants.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        count: state.count - 1,
        items: state.items.filter((item) => item.id !== payload.productId),
      };
    default:
      return state;
  }
};

export default cartReducer;