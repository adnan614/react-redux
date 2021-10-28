import { combineReducers } from "redux";

import { productReducer, selectProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectProductReducer,
});

export default reducers;
