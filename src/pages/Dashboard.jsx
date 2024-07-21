import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import "../Styling/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard-cta">
      <div className="Sidebar-cta">
        <Sidebar />
      </div>
      <div className="Content-cta">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
