import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heading, Button, Card, Text } from "../../components";
import ContentNav from "./ContentNav/ContentNav";
import { Building } from "../../types";

const DashboardFloorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentBuilding: Building = location.state;
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-head-panel">
        <Button
          text="BACK"
          variant="secondary"
          icon="arrow-left"
          iconColor="#77758b"
          iconSize={12}
          onClick={() => navigate(`/dashboard?id${currentBuilding.id}`)}
        />
        <Button text="Edit floor" variant="primary" />
      </div>
      <Heading variant={2} align="left" color="#51545a">
        Floor dashboard
      </Heading>
      <Card variant="floors" content={currentBuilding} />
      <ContentNav />
    </div>
  );
};

export default DashboardFloorPage;
