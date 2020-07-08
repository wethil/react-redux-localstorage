import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import storeSynchronize from "redux-localstore";

import rootReducer from "./rootReducer";

export default (initialState) => {
  const store = createStore(rootReducer(), initialState, composeWithDevTools());
  storeSynchronize(store);
  return store;
};
