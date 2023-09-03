import React from "react";
import { Icon, Text, Heading } from "../../components";
import { Building } from "../../types";
import "./Card.css";

interface CardProps {
  content: Building;
  variant: "building" | "floors";
}

const Card = ({ content, variant }: CardProps) => {
  return (
    <div className="content-card">
      <Icon name={variant} color="#67aad8" size={120} className="content-card-img" />
      <div>
        <Heading variant={3} align="left" color="#67aad8">
          {variant === "building"
            ? content.name
            : `Floor ${content.floors.length + 1}`}
        </Heading>
        <Text
          textColor="#77758b"
          icon={variant === "building" ? "location" : "building"}
          iconColor="#77758b"
          iconSize={15}
        >
          {variant === "building" ? content.address : content.name}
        </Text>
        <div className="content-card-info">
          {variant === "building" && (
            <Text
              textColor="#77758b"
              icon="floors"
              iconColor="#77758b"
              iconSize={15}
            >
              Floors: {content.floors.length.toString()}
            </Text>
          )}
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
