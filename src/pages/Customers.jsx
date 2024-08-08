import React, { useContext } from "react";
import CustomerCard from "../components/CustomerCard";
import Cust from "../assets/cust.png";
import UserCheck from "../assets/user-check.png";
import UserX from "../assets/user-x.png";
import Rupees from "../assets/rupees.png";
import Search from "../assets/search.png";
import Upload from "../assets/upload.png";
import printer from "../assets/printer.png";
import download from "../assets/download.png";
import CustomerList from "../components/CustomerList";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/CustomerContext";

const cutomerCount = [
  {
    id: 1,
    title: "Total Customers",
    count: 0,
    logo: Cust,
  },
  {
    id: 2,
    title: "Active Customers",
    count: 0,
    logo: UserCheck,
  },
  {
    id: 3,
    title: "InActive Customers",
    count: 0,
    logo: UserX,
  },
  {
    id: 4,
    title: "Credit Customers",
    count: 0,
    logo: Rupees,
  },
  {
    id: 5,
    title: "Cash In Advance",
    count: 0,
    logo: Rupees,
  },
];

function Customers() {
  const navigate = useNavigate();
  const {customers, setCostomers} = useContext(Context);


//   debouncing
const debounce = (cb, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId =setTimeout(() => {
            cb(...args);
        }, delay)
    }
}

//   search Customer by customer_id
    const searchCustomer = debounce((arg) => {
        const id = arg.toUpperCase()
        setCostomers((prev) => prev.filter(item => item.customer_id.includes(id)))
    },1000);


  return (
    <div className="cust_container">
      <p style={{ fontWeight: "bold", padding: "5px" }}>Customer Creation</p>
      <div className="card_container">
        {cutomerCount.map((item) => (
          <CustomerCard
            key={item.id}
            logo={item.logo}
            title={item.title}
            count={item.count}
          />
        ))}
      </div>

      <div className="add_conatainer">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "55%",
          }}
        >
          <div className="nav_toggle">
            <img
              src={Search}
              alt=""
              style={{ position: "absolute", left: 0 }}
            />
            <input onChange={(e) => searchCustomer(e.target.value)} className="nav_search" type="search" placeholder="Search" />
          </div>
          <div className="print_container" onClick={() => navigate("add")}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>+</p>
            <p>Add New Customer </p>
          </div>
          <div
            className="print_container"
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
          >
            <img src={Upload} />
            <p>Import Customers</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "18%",
          }}
        >
          <div className="print_container">
            <img src={printer} alt="" />
            <p>Print</p>
          </div>
          <div className="print_container">
            <img src={download} alt="" />
            <p>Download</p>
          </div>
        </div>
      </div>
      <CustomerList list={customers} />
    </div>
  );
}

export default Customers;
