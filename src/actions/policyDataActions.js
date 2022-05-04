import { actionTypes } from "../constants/actionType";

export const setSearchedPolicyData = (data) => {
  return {
    type: actionTypes.FILTERED_SEARCH_DATA,
    payload: data,
  };
};

export const updatePolicyData = (data) => {
  return {
    type: actionTypes.UPDATE_POLICY_DATA,
    payload: data,
  };
};
