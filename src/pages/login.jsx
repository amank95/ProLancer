import React from "react";
import { useState } from "react";
import API from "../api/api";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login",
         { 
          username, 
          password 
        });
        localStorage.setItem("currentUser",JSON.stringify(res.data));
      console.log(res.data);
      navigate("/")
    } catch (error) {
      setError(err);
      console.log(error);
    }
  };
  return (
    // Login
<div className="flex justify-center items-center min-h-screen bg-gray-50">
  <form 
    className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md"
    onSubmit={handleSubmit}
  >
    <h1 className="text-3xl font-semibold text-gray-700 mb-4 text-center">Sign In</h1>

    <div className="flex flex-col">
      <label htmlFor="username" className="text-sm text-gray-600 mb-1">Username</label>
      <input
        type="text"
        placeholder="JohnDoe"
        name="username"
        required
        onChange={(e) => setUsername(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="password" className="text-sm text-gray-600 mb-1">Password</label>
      <input
        type="password"
        placeholder="••••••••"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <button
      type="submit"
      className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
    >
      Login
    </button>

    <span
          onClick={() => navigate('/register')}
          className="text-sm text-blue-500 hover:underline text-center cursor-pointer"
        >
          Create a new account
        </span>
  </form>
</div>

  );
}
export default Login;
