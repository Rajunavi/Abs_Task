import React from "react";
import Checked from "../assets/checked.png";

function CustomerList({ list }) {
  return (
    <table>
      <tr>
        <th>
          <img src={Checked} />
        </th>
        <th>Customer ID</th>
        <th>Customer Company</th>
        <th>Phone Number</th>
        <th>E-mail ID</th>
        <th>Address</th>
        <th>Authorised Person</th>
      </tr>
      
        {list.map((item) => (
          <tr key={item.customer_id}>
            <td>
              <img src={Checked} />
            </td>
            <td>{item.customer_id}</td>
            <td>{item.company}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.adress}</td>
            <td>{item.auth_person}</td>
          </tr>
        ))}
    </table>
  );
}

export default CustomerList;
