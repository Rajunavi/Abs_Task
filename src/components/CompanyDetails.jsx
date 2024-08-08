import { useState } from "react";
import "../customer-creation.css";
 
const CompanyDetails = ({register}) => {
  const [companyState] = useState({
    "Company Name": "",
    "GSTIN Number": "",
    "Import Export Code": "",
    "Phone Number": "",
    "E-mail ID": "",
    "Website": "",
  });
 
  return (
    <>
      <h4>Company Details</h4>
      <div className="company-container">
        {Object.keys(companyState).map((elem) => (
          <div className="input-container" key={elem}>
            <input className="company-input" {...register(elem)} placeholder={`${elem}*`} />
          </div>
        ))}
      </div>
    </>
  );
};
 
export default CompanyDetails;
 