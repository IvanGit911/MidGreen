import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// const configureStore = (preloadedState = {}) =>
//   // createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
//   createStore(
//     rootReducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware(thunk, logger))
//   );

const configureStore = (preloadedState = {}) => {
  let middleware = [thunk, logger];
  if (process.env.NODE_ENV === "production") {
    middleware = [thunk];
  }

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
