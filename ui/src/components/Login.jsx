import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post("http://localhost:8080/user/login", {
        userName,
        password
      });

      console.log(res.data); 

      if(res.data.authToken){

        localStorage.setItem("token", res.data.authToken);

        navigate("/add");

      } else {

        alert(res.data.msg);

      }

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">

      <div className="bg-white p-8 rounded shadow w-96">

        <h2 className="text-xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2 rounded"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-gray-300 p-2 rounded"
          >
            Log In
          </button>

        </form>

        <p className="text-center mt-4">
          Don't have account?
          <Link to="/register" className="text-blue-500 ml-1">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;