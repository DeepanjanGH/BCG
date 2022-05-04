import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Policydata from "./Policydata";
import PolicyGraph from "./PolicyGraph";

const Body = () => {
  const [selectedTab, setselectedTab] = useState("policyData");
  return (
    <div className='body-container'>
      <Nav
        variant='pills'
        className={`justify-content-center body-tab`}
        activeKey={selectedTab}
      >
        <Nav.Item>
          <Nav.Link
            onClick={() => setselectedTab("policyData")}
            eventKey='policyData'
          >
            Policy Data
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => setselectedTab("policyGraph")}
            eventKey='policyGraph'
          >
            Policy Graph
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {selectedTab === "policyData" ? <Policydata /> : <PolicyGraph />}
    </div>
  );
};

export default Body;
