import React, { useContext } from "react";
import { Context } from "../context/CustomerContext";

function CustomerCard({ logo, title, count }) {
    const {customers} = useContext(Context)
  return (
    <div className="cust_card">
      <img className="user_log" src={logo} />
      <div>
        <p>{title}</p>
        <p>{title.includes("Total") ? customers?.length : count}</p>
      </div>
    </div>
  );
}

export default CustomerCard;
