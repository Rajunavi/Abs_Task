import { createContext, useState } from "react";

const custmores_list = [
  {
    customer_id: "ABSCUST01",
    company: "ABShrms",
    phone: "98765 43210",
    email: "info@abshrms.com",
    adress:
      "ABS, North phase Industrial Estate, 42, 5th Cross St, Kalaimagal Nagar, Ekkatuthangal, Chennai, Tamil Nadu 600032",
    auth_person: "Augustin Raj",
  },
  {
    customer_id: "ABSCUST02",
    company: "Swamy",
    phone: "98765 43210",
    email: "info@abshrms.com",
    adress:
      "ABS, North phase Industrial Estate, 42, 5th Cross St, Kalaimagal Nagar, Ekkatuthangal, Chennai, Tamil Nadu 600032",
    auth_person: "Augustin Raj",
  },
  {
    customer_id: "ABSCUST03",
    company: "Akshay",
    phone: "98765 43210",
    email: "info@abshrms.com",
    adress:
      "ABS, North phase Industrial Estate, 42, 5th Cross St, Kalaimagal Nagar, Ekkatuthangal, Chennai, Tamil Nadu 600032",
    auth_person: "Augustin Raj",
  },
];

export const Context = createContext();

function CustContextProvider({ children }) {
  const [customers, setCostomers] = useState(custmores_list);

  return (
    <Context.Provider value={{ customers, setCostomers }}>
      {children}
    </Context.Provider>
  );
}

export default CustContextProvider;
