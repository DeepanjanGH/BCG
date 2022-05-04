import { actionTypes } from "../constants/actionType";

import policydata from "../data/policyData.json";

const initialState = {
  searchedPolicyData: {},
  policyDataList: policydata,
};

const policyDataReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.FILTERED_SEARCH_DATA:
      return {
        ...state,
        searchedPolicyData: actions.payload,
      };
    case actionTypes.UPDATE_POLICY_DATA:
      return {
        ...state,
        policyDataList: actions.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default policyDataReducer;
