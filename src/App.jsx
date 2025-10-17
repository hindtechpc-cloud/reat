import React, { useState } from "react";
import { SignUp } from "./pages/SignUp";
import { Query } from "./pages/Query";
import Employee from "./pages/Employee";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import User from "./pages/User";
// import  toast, { Toaster } from 'react-hot-toast';
export default function App() {
  const [isUpadted, setIsUpdated] = useState(false);
  // const notify = () => toast('Here is your toast.');
  return (
    <div>
      {/* <Toaster/> */}
      {/* <button onClick={notify}>Make me a toast</button> */}
      {/* <SignUp/> */}
      {/* <Query/> */}
      <AddProduct isUpadted={isUpadted} setIsUpdated={setIsUpdated} />

      {/* user details  */}
      <User
        name="John"
        role="Mern dev"
        salary={45000}
        cp="CMS"
        email="gwedewgruy@gmail.com"
      />
      {/* <Employee/> */}
    </div>
  );
}
