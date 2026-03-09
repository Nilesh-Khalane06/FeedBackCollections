import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Registration = () => {

  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async(e)=>{
    e.preventDefault();

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    try{

      await axios.post("http://localhost:8080/user/register",{
        userName,
        email,
        password
      });

      alert("Registered Successfully");
      navigate("/");

    }catch(error){
      console.error(error);
    }

  }

  return (

<div className="flex justify-center items-center min-h-screen bg-gray-200">

<div className="bg-white p-8 rounded-lg shadow-md w-96">

<h2 className="text-xl font-semibold text-center mb-6">
Register
</h2>

<form onSubmit={handleRegister} className="space-y-4">

<input
type="text"
placeholder="Username"
className="w-full border p-2 rounded"
onChange={(e)=>setUserName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email"
className="w-full border p-2 rounded"
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
className="w-full border p-2 rounded"
onChange={(e)=>setPassword(e.target.value)}
required
/>

<input
type="password"
placeholder="Confirm Password"
className="w-full border p-2 rounded"
onChange={(e)=>setConfirmPassword(e.target.value)}
required
/>

<button className="w-full bg-gray-300 hover:bg-gray-400 p-2 rounded">
Sign Up
</button>

</form>

<p className="text-center text-sm mt-4">

Already have an account?

<Link to="/" className="text-blue-500 ml-1">
Log In
</Link>

</p>

</div>

</div>

  )
}

export default Registration;