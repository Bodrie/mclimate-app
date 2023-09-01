import React from "react";
import { useAppSelector } from "../store/hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, DashboardPage } from "../pages";

const RouterComponent = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};
export default RouterComponent;
