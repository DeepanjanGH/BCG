import React, { useCallback, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePolicyData } from "../actions/policyDataActions";
import PolicyDataForm from "./PolicyDataForm";

const Policydata = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const [disableSaveButton, setDisableSaveButton] = useState(false);
  const { searchedPolicyData, policyDataList } = useSelector((state) => ({
    searchedPolicyData: state.policyDataReducer.searchedPolicyData,
    policyDataList: state.policyDataReducer.policyDataList,
  }));

  const getData = useCallback(
    (data) => {
      setUpdatedData(data);
    },
    [setUpdatedData]
  );

  const onSave = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      let ind = policyDataList.findIndex(
        (item) => item["Policy_id"] == updatedData["Policy_id"]
      );

      let listArr = [...policyDataList];
      if (ind !== -1) {
        listArr[ind] = updatedData;
      }
      dispatch(updatePolicyData(listArr));
    }
  };

  return (
    <Card className='policy-data-container'>
      {Object.keys(searchedPolicyData).length ? (
        <Card.Title className='card-title'>
          <span>Policy Id: {searchedPolicyData.Policy_id}</span>
          <Button
            disabled={disableSaveButton}
            variant='outline-dark'
            onClick={onSave}
          >
            {isEdit ? "Save" : "Edit"}
          </Button>
        </Card.Title>
      ) : (
        ""
      )}
      <Card.Body>
        {Object.keys(searchedPolicyData).length ? (
          <PolicyDataForm
            formData={searchedPolicyData}
            isEdit={isEdit}
            getData={(data) => getData(data)}
            disableSave={(val) => setDisableSaveButton(val)}
          />
        ) : (
          <Card.Text className='search-text'>
            Search policy details with Policy Id or Customer Id
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default Policydata;
