import React, { useCallback } from "react";
import bcgLogo from "../assets/bcgLogo.png";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedPolicyData } from "../actions/policyDataActions";

const Header = ({ showPolicyData }) => {
  const dispatch = useDispatch();
  const { policyDataList } = useSelector((state) => ({
    policyDataList: state.policyDataReducer.policyDataList,
  }));

  const handleSearchRowClick = useCallback(
    (rowData) => {
      if (rowData) {
        dispatch(setSearchedPolicyData(rowData));
      }
    },
    [showPolicyData]
  );

  return (
    <div className='header-container'>
      <img className='bcg-logo' src={bcgLogo} alt='bcg-logo' />
      <Search
        className='search-box'
        list={policyDataList}
        handleItemClick={(item) => handleSearchRowClick(item)}
      />
      <h3 className='header-title'>Insurance Portal</h3>
    </div>
  );
};

export default Header;
