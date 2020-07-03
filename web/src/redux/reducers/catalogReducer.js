import ShoppingConstants from "../constants";

const CatalogInitialState = {
  catalog: [],
};

const catalogReducer = (state = CatalogInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ShoppingConstants.SET_PRODUCT_LIST:
      return {
        ...state,
        catalog: payload,
      };
    default:
      return state;
  }
};

export default catalogReducer;
