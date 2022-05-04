import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const loggerMiddleware = (store) => (next) => (action) => {
  next(action);
};

const middleware = applyMiddleware(...[loggerMiddleware]);
const store = createStore(rootReducer, middleware);

export default store;
