import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

interface NavigationProps {
  tabs: { id: number; name: string; el: JSX.Element }[];
}

const Navigation = ({ tabs }: NavigationProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Nav tabs>
        {tabs.map((currentTab, index) => {
          const active = activeTab === index;

          return (
            <NavItem
              key={`${currentTab.name} - ${currentTab.id}`}
              active={active}
            >
              <NavLink
                onClick={() => setActiveTab(index)}
                tag={"div"}
                active={active}
              >
                {currentTab.name}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
      {tabs.map((currentTab) => {
        return (
          <TabContent key={`${currentTab.name} - ${currentTab.id}`} activeTab={activeTab}>
            <TabPane tabId={currentTab.id}>{currentTab.el}</TabPane>
          </TabContent>
        );
      })}
    </>
  );
};

export default Navigation;
