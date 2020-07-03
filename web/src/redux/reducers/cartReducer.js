import ShoppingConstants from "../constants";
import countItemsFromCart from "../../utils/countItemsFromCart";

const CartInitialState = {
  count: 0,
  items: [],
  totalCost: "",
  errorMessage: "",
};

const cartReducer = (state = CartInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ShoppingConstants.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        count: state.count + 1,
        items: [...state.items, payload],
      };
    case ShoppingConstants.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.sku !== payload;
        }),
      };
    case ShoppingConstants.GET_PRODUCTIDS_FROM_CART:
      return {
        ...state,
        items: state.items,
      };
    case ShoppingConstants.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.sku === payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
        count: state.count + 1,
      };
    case ShoppingConstants.DECREASE_PRODUCT_QUANTITY:
      let decreased = 0;

      return {
        ...state,
        items: state.items.map((item) => {
          if (item.sku === payload) {
            if (item.quantity === 0) return item;
            decreased = 1;
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
        count: state.count - decreased,
      };

    case ShoppingConstants.SET_TOTAL_COST:
      return {
        ...state,
        totalCost: payload,
      };

    case ShoppingConstants.SET_TOTAL_ITEMS:
      return {
        ...state,
        count: payload,
      };

    case ShoppingConstants.GET_TOTAL_ITEMS:
      return {
        ...state,
        count: countItemsFromCart(state.items),
      };

    default:
      return state;
  }
};

export default cartReducer;
