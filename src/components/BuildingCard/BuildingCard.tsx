import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { Text, Icon } from "../../components";
import { Building } from "../../types";
import "./BuildingCard.css";

interface BuildingCardProps {
  buildings: Building[];
}

const BuildingCard = ({ buildings }: BuildingCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      {buildings.map(
        ({
          id,
          name,
          address,
          floors,
          offices,
          rooms,
          devices,
          onlineDevices,
        }) => {
          return (
            <div key={`${name} - ${id}`} className="card-element">
              <Icon name="building" color="#67aad8" size={100} />
              <div className="card-content">
                <div className="card-building">
                  <Text textColor="#51545a">{name}</Text>
                  <button>
                    <Icon name="edit" color="#77758b" size={25} />
                  </button>
                </div>
                <div className="card-address">
                  <Text icon="location" iconColor="#77778d" iconSize={15}>
                    {address}
                  </Text>
                </div>
                <div className="card-info">
                  <Text icon="floors" iconColor="#77758b" iconSize={15}>
                    Floors: {floors.length.toString()}
                  </Text>
                  <Text icon="key" iconColor="#77758b" iconSize={15}>
                    Offices: {offices.length.toString()}
                  </Text>
                  <Text icon="door" iconColor="#77758b" iconSize={15}>
                    Rooms: {rooms.length.toString()}
                  </Text>
                  <Text icon="chip-cpu" iconColor="#77758b" iconSize={15}>
                    Devices: {devices.length.toString()}
                  </Text>
                  <Text
                    textColor="#62be90"
                    icon="dot"
                    iconColor="#62be90"
                    iconSize={24}
                  >
                    Online devices: {onlineDevices.length.toString()}
                  </Text>
                  <button
                    className="card-arrow-right"
                    onClick={() => {
                      navigate("/dashboard", { state: { buildingId: id } });
                    }}
                  >
                    <Icon name="arrow-right" color="#77758b" size={25} />
                  </button>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default BuildingCard;
