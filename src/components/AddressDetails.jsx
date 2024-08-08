import { useState } from "react";
import "../customer-creation.css";

const AddressDetails = ({ register }) => {
  const [companyState] = useState({
    "Address Line 1": "",
    "Address Line 2": "",
    City: "",
    State: "",
    Pincode: "",
  });

  return (
    <>
      <h4>Address Details</h4>
      <div className="address-container">
        {Object.keys(companyState).map((elem) => (
          <div
            className="input-container"
            {...register(elem)}
            key={elem}
            style={
              elem === "Address Line 1" || elem === "Address Line 2"
                ? {
                    width: "694px",
                  }
                : {}
            }
          >
            <input
              className="address-input"
              {...register(elem)}
              placeholder={`${elem}*`}
              style={
                elem === "Address Line 1" || elem === "Address Line 2"
                  ? {
                      width: "694px",
                      height: "88px",
                    }
                  : {}
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AddressDetails;
