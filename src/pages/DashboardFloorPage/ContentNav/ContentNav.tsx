import React from "react";
import { Navigation, Text } from "../../../components";
import img from "../../../assets/add-a-device.png";

const ContentNav = () => {
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
          name: "Offices",
          el: (
            <div className="dashboard-nav-panels">
              <div className="dashboard-tab-floor">
                <div className="create-floor-content">
                  <img src={img} alt="Add device to office" />
                  <Text textColor="#77758b">
                    There are no devices assigned to this building.
                  </Text>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          name: "Manage Devices",
          el: <div className="dashboard-nav-panels">No Informtion</div>,
        },
        {
          id: 3,
          name: "UserManagement",
          el: <div className="dashboard-nav-panels">No Information</div>,
        },
      ]}
    />
  );
};

export default ContentNav;
