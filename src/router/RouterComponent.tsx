import React from "react";
import { useAppSelector } from "../store/hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  HomePage,
  DashboardPage,
  DashboardFloorPage,
} from "../pages";

const RouterComponent = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {user !== null && (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/floor" element={<DashboardFloorPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
export default RouterComponent;
