import { combineReducers } from "redux";
import policyDataReducer from "./policyDataReducer.js";

const rootReducer = combineReducers({
  policyDataReducer,
});

export default rootReducer;
