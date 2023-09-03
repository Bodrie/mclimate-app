import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { buildings } from "../../mock/buildings";
import { Button, Heading, Card, Text } from "../../components";
import ContentNav from "./ContentNav/ContentNav";
import "./DashboardPage.css";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { buildingId } = state;
  const currentBuilding = buildings.find(
    (currentElement) => currentElement.id === buildingId
  );
  if (typeof currentBuilding === "undefined") return <></>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-head-panel">
        <Button
          text="BACK"
          variant="secondary"
          icon="arrow-left"
          iconColor="#77758b"
          iconSize={12}
          onClick={() => navigate("/home")}
        />
        <Button text="Edit building" variant="primary" />
      </div>
      <Heading variant={2} align="left" color="#51545a">
        Building dashboard
      </Heading>
      <Card content={currentBuilding} />
      <div className="dashboard-devices">
        <div className="dashboard-devices-panel">
          <Text textColor="#77758b">Online Devices</Text>
          <Text textColor="#77758b" icon="dot" iconColor="green" iconSize={15}>
            {currentBuilding.onlineDevices.length.toString()}
          </Text>
        </div>
        <div className="dashboard-devices-panel">
          <Text textColor="#77758b">Total Devices</Text>
          <Text textColor="#77758b">
            {currentBuilding.devices.length.toString()}
          </Text>
        </div>
      </div>
      <ContentNav currentBuildingInfo={currentBuilding} />
    </div>
  );
};

export default DashboardPage;
