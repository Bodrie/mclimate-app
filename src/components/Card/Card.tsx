import React from "react";
import { Icon, Text, Heading } from "../../components";
import { Building } from "../../types";
import "./Card.css";

interface CardProps {
  content: Building;
}

const Card = ({ content }: CardProps) => {
  return (
    <div className="content-card">
      <Icon name="building" color="#67aad8" size={120} />
      <div>
        <Heading variant={3} align="left" color="#67aad8">
          {content.name}
        </Heading>
        <Text
          textColor="#77758b"
          icon="location"
          iconColor="#77758b"
          iconSize={15}
        >
          {content.address}
        </Text>
        <div className="content-card-info">
          <Text
            textColor="#77758b"
            icon="floors"
            iconColor="#77758b"
            iconSize={15}
          >
            Floors: {content.floors.length.toString()}
          </Text>
          <Text
            textColor="#77758b"
            icon="key"
            iconColor="#77758b"
            iconSize={15}
          >
            Offices: {content.offices.length.toString()}
          </Text>
          <Text
            textColor="#77758b"
            icon="door"
            iconColor="#77758b"
            iconSize={15}
          >
            Rooms: {content.rooms.length.toString()}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Card;
