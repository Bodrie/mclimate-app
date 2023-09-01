import React from "react";
import { Container } from "reactstrap";
import { buildings } from "../../mock/buildings";
import { Button, BuildingCard } from "../../components";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Container>
      <div className="cards-container">
        <div className="cards-heading">
          <p>Buildings ({buildings.length})</p>
          <Button text="Create New Building" plusIcon />
        </div>
        <BuildingCard buildings={buildings} />
      </div>
    </Container>
  );
};

export default HomePage;
