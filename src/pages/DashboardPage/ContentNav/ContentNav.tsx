import React from "react";
import { Button, Navigation, Text } from "../../../components";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/add-a-floor.png";

interface ContentNavProps {
  currentBuildingInfo: any;
}

const ContentNav = ({ currentBuildingInfo }: ContentNavProps) => {
  const navigate = useNavigate();
  return (
    <Navigation
      tabs={[
        {
          id: 0,
          name: "All Devices",
          el: <div className="dashboard-nav-panels">No Information</div>,
        },
        {
          id: 1,
          name: "Apartments",
          el: <div className="dashboard-nav-panels">No Information</div>,
        },
        {
          id: 2,
          name: "Floors",
          el: (
            <div className="dashboard-nav-panels">
              <div className="dashboard-tab-floor">
                <div className="create-floor">
                  <Text textColor="#51545a">
                    Floors: ({currentBuildingInfo.floors.length.toString()})
                  </Text>
                  <Button
                    text="Create new floor"
                    variant="primary"
                    icon="plus-icon"
                    iconColor="#fff"
                    iconSize={15}
                  />
                </div>
                <div className="create-floor-content">
                  <img
                    src={img}
                    alt="Add a floor"
                    onClick={() => navigate("/dashboard/floor")}
                  />
                  <Text textColor="#77758b">
                    There are no floors created for this building.
                  </Text>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 3,
          name: "Rooms",
          el: <div className="dashboard-nav-panels">No Information</div>,
        },
        {
          id: 4,
          name: "Manage Devices",
          el: <div className="dashboard-nav-panels">No Information</div>,
        },
        {
          id: 5,
          name: "UserManagement",
          el: <div className="dashboard-nav-panels">No Information</div>,
        },
      ]}
    />
  );
};

export default ContentNav;
