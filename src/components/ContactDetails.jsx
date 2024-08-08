import { useState } from "react";
import "../customer-creation.css";
 
const ContactDetails = () => {
  const [companyState] = useState({
    "POC Name": "",
    "Job Title": "",
    "Contact Number 1": "",
    "Contact Number 2": "",
    "Contact E-mail ID": "",
  });
 
  return (
    <>
      <h4>Contact Person</h4>
      <div className="company-container">
        {Object.keys(companyState).map((elem) => (
          <div className="input-container" key={elem}>
            <input className="company-input" placeholder={`${elem}*`} />
          </div>
        ))}
      </div>
    </>
  );
};
 
export default ContactDetails;