// import { useState } from "react";
// import Button from "../compponents/Button";
import Button from "../compponents/Button";
import Input from "../compponents/Input";
// import Select from "../compponents/Select";
// // import toast from "react-hot-toast";
// export const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

import { useState } from "react";

//   const handleChange = (e) => setName(e.target.value);
//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // toast.success("form submitted successfully");
//     alert("form submitted successfully",  name, email);
//     console.log(name, email);
//     setEmail(" ")
//     setName(" ")
//   };
//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           {/* <input
//             type="text"
//             name="name"
//             value={name}
//             placeholder="Enter your name...."
//             // onChange={(e)=>setName(e.target.value)}
//             onChange={handleChange}

//           /> */}

//           <Input
//             type={"text"}
//             placeholder="enter your name..."
//             name="name"
//             required={true}
//             value={name}
//             onChange={handleChange}
//             title="enter your name"
//           />

//           <Input
//             type={"email"}
//             placeholder="enter your email..."
//             name="email"
//             required={true}
//             value={email}
//             onChange={handleEmailChange}
//           />
//           {/* <Input type={"password"} placeholder="enter your password..."/>
//           <Input type={"text"} placeholder="enter your desc..."/> */}
//           {/* <Select /> */}
//           {/* {name} */}
//           <Button type="submit" title="submit form ">
//             Submit{" "}
//           </Button>

//           {/* <button type="submit" className="p-3 bg-blue-500 rounded"> submit</button> */}
//         </form>
//       </div>
//     </>
//   );
// };

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// set email eamil 
  const handleChange = (e) => setEmail(e.target.value);
// set password 
  const handlePasswordChange=(e)=> setPassword(e.target.value)
// form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit");
    console.log(email,password);
    setEmail("")
    setPassword("")
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type={"email"}
          placeholder="enter your email..."
          name="email"
          required={true}
          onChange={handleChange}
          value={email}
        />
           <Input
          type={"password"}
          placeholder="enter your password..."
          name="password"
          required={true}
          onChange={handlePasswordChange}
          value={password}

        />
        <Button type="submit" >submit</Button>
      </form>
    </>
  );
};
