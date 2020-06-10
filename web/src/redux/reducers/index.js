import { combineReducers } from "redux";

import cartReducer from './cartReducer';
import catalogReducer from "./catalogReducer";

const allReducers = combineReducers({
  cart: cartReducer,
  catalog: catalogReducer,
});

export default allReducers;