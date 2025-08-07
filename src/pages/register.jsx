import { img } from "framer-motion/client";
import React, { useState } from "react";
import upload from "../utils/upload";
import API from "../api/api"; //  an API for making requests
import { useNavigate } from "react-router-dom";

const register = () => {
  const [file,setFile]=useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    phone: "",
    desc: "",
    isSeller: false,
    img:''
  });
  
const navigate = useNavigate();

const handleInputChange = (e) => {
  setUser((prev)=>{
    return {
      ...prev,
       [e.target.name]: e.target.value
      };
  });
};

  // const handleInputChange = (e) => {
  //   // const { name, value, type, checked } = e.target;
  //   setUser((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value}
  //     // [name]: type === "checkbox" ? checked : value,
  //   ));
  // };


  const handleSeller = (e) => {
  setUser((prev)=>{
    return {
      ...prev,
       isSeller: e.target.checked
      };
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = await upload(file);
    try {
      await API.post('/auth/register', 
        { ...user,
          img: url }
      );
      console.log({ ...user, img: url });

      alert("Registration successful");
    navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
    // console.log("Form submitted:", user);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-sm p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Create Account */}
            <div>
              <h2 className="text-2xl font-normal text-gray-600 mb-8">
                Create a new account
              </h2>

              <div className="space-y-6">
                {/* Username */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm text-gray-500 mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                    placeholder="johndoe"
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-500 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                     placeholder="johndoe@gmail.com"
                     required
                    className="w-full px-3 py-3 border border-gray-300 rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm text-gray-500 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                   placeholder="password"
                   required
                    className="w-full px-3 py-3 border border-gray-300 rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>

                {/* Profile Picture */}
                <div>
                  <label
                    htmlFor="profilePicture"
                    className="block text-sm text-gray-500 mb-2"
                  >
                    Profile Picture
                  </label>
                    <input 
                    className="w-full text-sm text-gray-500 border border-gray-300 rounded-sm p-3 bg-gray-50"
                      type="file"
                      onChange={(e)=> setFile(e.target.files[0])}              
                    />
                
                </div>

                {/* Country */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm text-gray-500 mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={user.country}
                    onChange={handleInputChange}
                    placeholder="Usa"
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Seller Options */}
            <div className="flex-[2] ">
              <h1 className="text-2xl font-normal text-gray-600 mb-8">
                I want to become a seller
              </h1>

              <div className="space-y-6 ">
                {/* Activate Seller Account Toggle */}
                <div className="flex items-center justify-between mb-8 mt-16">
                  <span className="text-sm text-gray-500">
                    Activate the seller account
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="isSeller"
                      checked={user.isSeller}
                      onChange={handleSeller}
                      className="sr-only"
                  
                    />
                    <div
                      className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                        user.isSeller ? "bg-green-500" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in-out ${
                          user.isSeller ? "transform translate-x-5" : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm text-gray-500 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                  // type='tel'
                    type="text"
                    id="phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 89"
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm text-gray-500 mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="desc"
                    name="desc"
                    value={user.desc}
                    onChange={handleInputChange}
                    placeholder="A short description of yourself"
                    rows={8}
                    cols={10}
                    required={user.isSeller}
                    className="w-full px-3 py-3 border border-gray-300 rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-[514px] bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-sm transition duration-200 mt-10"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default register;
