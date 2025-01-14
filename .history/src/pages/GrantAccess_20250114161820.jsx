import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GrantAccess = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (input) {
      // Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("otp", otp);

      // Show OTP in popup notification
      alert(`Your Twitter OTP: ${otp}`);

      // Remove '@' symbol before storing the username for dashboard display
      const username = input.startsWith("@") ? input.slice(1) : input;

      // Store the cleaned username value
      localStorage.setItem("input", username);

      // Redirect to OTP verification page
      navigate("/otp-verification");
    } else {
      alert("Please enter a valid username, email, or phone number");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white px-4">
      {/* Logo Section */}
      <div className="flex justify-center items-center w-full mt-6">
        <img
          src="/twitlogo.png" // Replace with the actual path to your logo
          alt="Logo"
          className="h-12 w-12"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        {/* Page Header */}
        <h1 className="text-xl font-bold text-center px-6 mb-8 leading-snug">
          Authorize UNICRYPTO EXCHANGE to use your account?
        </h1>

        {/* Input Form */}
        <div className="w-full max-w-md space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Phone, email, or username"
              className="w-full p-4 text-white bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg placeholder-gray-500 peer"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-500">
              Phone, email, or username
            </label>
          </div>
          <button
            className="w-full py-4 bg-blue-500 text-white font-bold rounded-lg text-lg hover:bg-blue-600 transition duration-300"
            onClick={handleContinue}
          >
            Authorize App
          </button>
          <button className="w-full py-4 border border-gray-700 text-white font-bold rounded-lg text-lg hover:bg-gray-800 transition duration-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrantAccess;
