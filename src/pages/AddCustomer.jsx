import React, { useContext } from "react";
import CompanyDetails from "../components/CompanyDetails";
import AddressDetails from "../components/AddressDetails";
import ContactDetails from "../components/ContactDetails";
import ContactAddress from "../components/ContactAddress";
import "../customer-creation.css";
import { useForm } from "react-hook-form";
import { Context } from "../context/CustomerContext";
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  const { register, handleSubmit } = useForm();
  const { customers, setCostomers } = useContext(Context);
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log(values);
    const cust = {
      customer_id: "ABSCUST0" + customers?.length + 1,
      company: values["Company Name"],
      phone: values["Phone Number"],
      email: values["E-mail ID"],
      adress:
        values["Address Line 1"] +
        ", " +
        values["Address Line 2"] +
        values["City"] +
        ", " +
        values["State"] +
        ", " +
        values["Pincode"],
      auth_person: values["Authorised Person Name"],
    };
    setCostomers((prev) => [...prev, cust]);
    navigate("/");
  };
  return (
    <div className="container">
      <h4>Customer Creation</h4>
      <div className="container-nav">
        <h5 className="active-tab">Company Details</h5>
        <h5 className="non-active-tab">Billing & Shipping Details</h5>
        <h5 className="non-active-tab">KYC Documents</h5>
      </div>
      <div className="nav-separator">
        <div className="nav-indicator" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CompanyDetails register={register} />
        <AddressDetails register={register} />
        <ContactDetails />
        <ContactAddress register={register} />

        <div className="btns">
          <button className="btn">Cancel</button>
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "black", color: "white", width: "184px" }}
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;
