import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="main_container">
      <SideNav />
      <div style={{width: "95%", position: "relative", left:"5%"}}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
