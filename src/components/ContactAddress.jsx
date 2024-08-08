
import { useState } from "react";
import "../customer-creation.css";
 
const ContactAddress = ({register}) => {
  const [companyState] = useState({
    "Authorised Person Name": "",
    "Authorised Person Designation": "",
    "Authorised Person Contact Number": "",
  });
 
  return (
    <>
      <h4>Address Details</h4>
      <div className="company-container">
        {Object.keys(companyState).map((elem) => (
          <div className="contact-adress-container" key={elem}>
            <input className="contact-adress-input" {...register(elem)} placeholder={`${elem}*`} />
          </div>
        ))}
      </div>
    </>
  );
};
 
export default ContactAddress;
 
 