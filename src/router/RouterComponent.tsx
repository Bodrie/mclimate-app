import React from "react";
import { useAppSelector } from "../store/hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, HomePage } from "../pages";

const RouterComponent = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
export default RouterComponent;
