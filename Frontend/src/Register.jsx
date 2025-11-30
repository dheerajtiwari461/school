import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.endsWith("@gmail.com")) {
      alert("Only Gmail accounts are allowed!");
      return;
    }
  

  const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .post(`${apiUrl}/users/register`, formData)
      .then((res) => {
        console.log("Registration successful:", res.data);
      })
      .catch((err) => {
        console.error("Registration failed", err);
      });

      setFormData("");
      navigate("/login")
  };


  return (
    <div className="bg-[#f6f7f8] h-screen flex items-center justify-center flex-col p-5">
      <div className="bg-white p-3 sm:p-5 flex flex-col items-center max-w-[450px] shadow-lg rounded-lg w-full">
        <h1 className="font-extrabold text-2xl">Create Your Account</h1>
        <p className="text-gray-500 font-semibold text-center">
          Create your account to stay connected with school updates, admissions,
          and student resources.
        </p>
        <form className="w-full p-4" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-400 px-3 py-1.5 rounded-md shadow-sm focus:outline-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="border border-gray-400 px-3 py-1.5 rounded-md shadow-sm focus:outline-blue-500"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="mobile" className="font-semibold">
              Phone Number
            </label>
            <input
              name="mobile"
              type="tel"
              placeholder="Enter your number"
              onChange={handleChange}
              maxLength={10}
              pattern="[0-9]{10}"
              className="border border-gray-400 px-3 py-1.5 rounded-md shadow-sm focus:outline-blue-500"
              required
            />
          </div>
          <div className="flex flex-col mb-4 relative">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border border-gray-400 px-3 py-1.5 rounded-md shadow-sm focus:outline-blue-500"
              minLength={8}
              onChange={handleChange}
              required
            />
            <span className="text-gray-400 p-1">
              Must be at least 8 characters long.
            </span>
            {showPassword ? (
              <i
                className="fa-solid fa-eye absolute right-2.5 top-9 z-10 cursor-pointer"
                onClick={() => {
                  setShowPassword(false);
                }}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash absolute right-2.5 top-9 z-10 cursor-pointer"
                onClick={() => {
                  setShowPassword(true);
                }}
              ></i>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full p-2 rounded-lg cursor-pointer hover:bg-blue-900 hover:scale-105 active:bg-blue-900 hover:shadow-lg transition-transform duration-300"
          >
            Create Account
          </button>
        </form>
        <p className="text-gray-500 font-semibold">
          Already have an account?
          <Link to='/login' className="text-blue-500 cursor-pointer"> Log In</Link>
        </p>
      </div>
      <p className="text-gray-500 py-4 text-center">
        By creating an account, you agree to our{" "}
        <span className="text-blue-500 font-semibold">Terms or Service</span>{" "}
        and <span className="text-blue-500 font-semibold">Privacy Policy.</span>
      </p>
    </div>
  );
};

export default Register;
