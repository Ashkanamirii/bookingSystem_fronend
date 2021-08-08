import { createStore, applyMiddleware, compose } from "redux";
// import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";

import reducers from "../reducers";

const middleWare = [thunk];

//delete this line for release
// middleWare.push(createLogger())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  undefined,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleWare))
);
export default store;
