import ShoppingConstants from "../constants";

const CatalogInitialState = {
  catalog: [],
};

const catalogReducer = (state = CatalogInitialState, action) => {
  const { type, payload } = action; 

  switch (type) {
    case ShoppingConstants.GET_PRODUCT_LIST:
      return {
        ...state,
        catalog: payload.filter(({product}) => product),
      };
    default:
      return state;
  }
};

export default catalogReducer;