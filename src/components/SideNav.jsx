import React from "react";
import frame from "../assets/Frame.png";
import dashboardLogo from "../assets/dashboard_erp_logo_black.png";
import Leads from "../assets/Leads.png";
import Customers from "../assets/Customers.png";
import Suppliers from "../assets/Suppliers.png";
import Vendor from "../assets/Vendor.png";
import Categories from "../assets/Categories.png";
import Inventory from "../assets/Inventory.png";
import Settings from "../assets/Settings.png";


function SideNav() {
  return (
    <div className="side_nav">
      <img src={frame} alt="frame"  />
      <div className="img_list">
        <img
          src={dashboardLogo}
          className="logo"
          style={{ backgroundColor: "white", padding: "4px 8px", borderRadius:"5px"}}
          alt="dashboard_erp_logo_black"
        />
        <img
          src={Leads}
          className="logo"
          alt="Leads"
        />
        <img
          src={Customers}
          className="logo"
          alt="Customers"
        />
        <img
          src={Suppliers}
          className="logo"
          alt="Suppliers"
        />
        <img
          src={Vendor}
          className="logo"
          alt="Vendor"
        />
        <img
          src={Categories}
          className="logo"
          alt="Categories"
        />
        <img
          src={Inventory}
          className="logo"
          alt="Inventory"
        />
        <img
          src={Settings}
          className="logo"
          alt="Settings"
        />

      </div>
    </div>
  );
}

export default SideNav;
