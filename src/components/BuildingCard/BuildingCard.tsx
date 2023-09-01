import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CommercialBuildingSvg } from "../../assets/commercial-building.svg";
import { ReactComponent as FloorSvg } from "../../assets/icon_floor.svg";
import { ReactComponent as LocationSvg } from "../../assets/location_icon.svg";
import { ReactComponent as ArrowRightSvg } from "../../assets/arrow_right_icon.svg";
import { ReactComponent as KeySvg } from "../../assets/icon_appartment.svg";
import { ReactComponent as DoorSvg } from "../../assets/icon_door.svg";
import { ReactComponent as ChipCpuSvg } from "../../assets/chip_cpu_icon.svg";
import { ReactComponent as EditSvg } from "../../assets/edit_icon.svg";
import { Building } from "../../types";
import "./BuildingCard.css";

interface BuildingCardProps {
  buildings: Building;
}

const BuildingCard = ({ buildings }: BuildingCardProps) => {
  const navigate = useNavigate();
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
              <CommercialBuildingSvg className="card-image" />
              <div className="card-content">
                <div className="card-building">
                  <p>{name}</p>
                  <button>
                    <EditSvg />
                  </button>
                </div>
                <div className="card-address">
                  <LocationSvg />
                  <p>{address}</p>
                </div>
                <div className="card-info">
                  <FloorSvg />
                  <p>Floors: {floors.length}</p>
                  <KeySvg />
                  <p>Offices: {offices.length}</p>
                  <DoorSvg />
                  <p>Rooms: {rooms.length}</p>
                  <ChipCpuSvg />
                  <p>Devices: {devices.length}</p>
                  <p>Online devices: {onlineDevices.length}</p>
                  <button
                    className="card-arrow-right"
                    onClick={() =>
                      navigate("/dashboard", { state: { buildingId: id } })
                    }
                  >
                    <ArrowRightSvg />
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
