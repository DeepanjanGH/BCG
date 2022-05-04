import React, { useEffect, useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const PolicyDataForm = ({ formData, isEdit, getData, disableSave }) => {
  const [customerId, setCustomerId] = useState("");
  const [dateOfPurchase, setDateOfPurchase] = useState("");
  const [fuel, setFuel] = useState("");
  const [vehicleSegment, setVehicleSegment] = useState("");
  const [premium, setPremium] = useState("");
  const [bodilyInjuryLiability, setBodilyInjuryLiability] = useState("");
  const [personalInjuryProtection, setPersonalInjuryProtection] = useState("");
  const [propertyDamageLiability, setPropertyDamageLiability] = useState("");
  const [collision, setCollision] = useState("");
  const [comprehensive, setComprehensive] = useState("");
  const [customerGender, setCustomerGender] = useState("");
  const [customerIncomeGroup, setCustomerIncomeGroup] = useState("");
  const [customerRegion, setCustomerRegion] = useState("");
  const [customerMaritalStatus, setCustomerMaritalStatus] = useState("");
  const [errorForPremium, setErrorForPremium] = useState("");

  useEffect(() => {
    setCustomerId(formData.Customer_id);
    setDateOfPurchase(formData["Date of Purchase"]);
    setFuel(formData.Fuel);
    setVehicleSegment(formData["VEHICLE_SEGMENT"]);
    setPremium(formData.Premium);
    setBodilyInjuryLiability(formData["bodily injury liability"]);
    setPersonalInjuryProtection(formData["personal injury protection"]);
    setPropertyDamageLiability(formData["property damage liability"]);
    setCollision(formData.collision);
    setComprehensive(formData.comprehensive);
    setCustomerGender(formData["Customer_Gender"]);
    setCustomerIncomeGroup(formData["Customer_Income group"]);
    setCustomerRegion(formData["Customer_Region"]);
    setCustomerMaritalStatus(formData["Customer_Marital_status"]);
  }, [formData]);

  const prepareData = () => {
    let data = {};
    data["Policy_id"] = formData["Policy_id"];
    data["Customer_id"] = customerId;
    data["Date of Purchase"] = dateOfPurchase;
    data["Fuel"] = fuel;
    data["VEHICLE_SEGMENT"] = vehicleSegment;
    data["Premium"] = premium;
    data["bodily injury liability"] = bodilyInjuryLiability;
    data["personal injury protection"] = personalInjuryProtection;
    data["property damage liability"] = propertyDamageLiability;
    data["collision"] = collision;
    data["comprehensive"] = comprehensive;
    data["Customer_Income group"] = customerIncomeGroup;
    data["Customer_Region"] = customerRegion;
    data["Customer_Marital_status"] = customerMaritalStatus;

    return data;
  };

  useEffect(() => {
    getData(prepareData());
  }, [
    customerId,
    dateOfPurchase,
    vehicleSegment,
    fuel,
    premium,
    bodilyInjuryLiability,
    personalInjuryProtection,
    propertyDamageLiability,
    collision,
    comprehensive,
    customerIncomeGroup,
    customerRegion,
    customerMaritalStatus,
  ]);

  return (
    <div className={`policy-data-form ${isEdit ? "enable-form" : ""}`}>
      <div className='form-input-row'>
        <Form.Label>Customer Id:</Form.Label>
        <InputGroup>
          <FormControl
            placeholder='Customer Id'
            disabled={!isEdit}
            name='customerId'
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Date of Purchase</Form.Label>
        <InputGroup>
          <FormControl
            disabled={true}
            placeholder='Date of Purchase'
            name='dateOfPurchase'
            value={dateOfPurchase}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Fuel</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Fuel'
            name='fuel'
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Vehicle Segment</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Vehicle Segment'
            name='vehicleSegment'
            value={vehicleSegment}
            onChange={(e) => setVehicleSegment(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Premium</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Premium'
            name='premium'
            value={premium}
            onChange={(e) => {
              if (e.target.value <= 1000000) {
                setPremium(e.target.value);
                setErrorForPremium(false);
                disableSave(false);
              } else {
                setErrorForPremium(true);
                disableSave(true);
              }
            }}
            isInvalid={errorForPremium}
          />
          <Form.Control.Feedback type='invalid'>
            {errorForPremium ? "Premium cannot exceed 1 million" : ""}
          </Form.Control.Feedback>
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Bodily injury liability</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Bodily injury liability'
            name='bodilyInjuryLiability'
            value={bodilyInjuryLiability}
            onChange={(e) => setBodilyInjuryLiability(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Personal Injury Protection</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Personal Injury Protection'
            name='personalInjuryProtection'
            value={personalInjuryProtection}
            onChange={(e) => setPersonalInjuryProtection(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Property Damage Liability</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Property Damage Liability'
            name='propertyDamageLiability'
            value={propertyDamageLiability}
            onChange={(e) => setPropertyDamageLiability(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Collision</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Collision'
            name='collision'
            value={collision}
            onChange={(e) => setCollision(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Comprehensive</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Comprehensive'
            name='comprehensive'
            value={comprehensive}
            onChange={(e) => setComprehensive(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Customer Gender</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Customer Gender'
            name='customerGender'
            value={customerGender}
            onChange={(e) => setCustomerGender(e.target.value)}
          />
        </InputGroup>
      </div>

      <div className='form-input-row'>
        <Form.Label>Customer Income Group</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Customer Income Group'
            name='customerIncomeGroup'
            value={customerIncomeGroup}
            onChange={(e) => setCustomerIncomeGroup(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Customer Region</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Customer Region'
            name='customerRegion'
            value={customerRegion}
            onChange={(e) => setCustomerRegion(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='form-input-row'>
        <Form.Label>Customer Marital Status</Form.Label>
        <InputGroup>
          <FormControl
            disabled={!isEdit}
            placeholder='Customer Marital Status'
            name='customerMaritalStatus'
            value={customerMaritalStatus}
            onChange={(e) => setCustomerMaritalStatus(e.target.value)}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default React.memo(PolicyDataForm);
