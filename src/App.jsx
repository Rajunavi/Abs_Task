import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Customers from "./pages/Customers";
import Dashboard from "./layout/dashboard";
import AddCustomer from "./pages/AddCustomer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Customers />,
      },
      {
        path: "add",
        element: <AddCustomer />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
