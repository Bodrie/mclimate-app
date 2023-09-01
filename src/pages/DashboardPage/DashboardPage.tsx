import React from "react";
import { useLocation } from "react-router-dom";
import { buildings } from "../../mock/buildings";

const DashboardPage = () => {
  const { state } = useLocation();
  const { buildingId } = state;
  const currentBuilding = buildings.find(
    (currentElement) => currentElement.id === buildingId
  );

  return <>DashboardPage</>;
};

export default DashboardPage;
