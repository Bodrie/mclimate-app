import React from "react";
import { Container } from "reactstrap";
import { buildings } from "../../mock/buildings";
import { Button, BuildingCard, Text } from "../../components";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Container>
      <div className="cards-container">
        <div className="cards-heading">
          <Text textColor="#51545a">Buildings ({buildings.length.toString()})</Text>
          <Button
            text="Create New Building"
            variant="primary"
            icon="plus-icon"
            iconColor="white"
            iconSize={15}
          />
        </div>
        <BuildingCard buildings={buildings} />
      </div>
    </Container>
  );
};

export default HomePage;
