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
      <div className="absolute top-4 left-4">
        {/* Replace this with the actual logo image */}
        <img
          src="/twitlogo.jpg" // Replace with actual path
          alt="Logo"
          className="h-6 w-6"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        {/* Page Header */}
        <h1 className="text-2xl font-bold mb-4">Sign in to X</h1>

        {/* Input Form */}
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Phone, email, or username"
            className="w-full p-4 text-black bg-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg placeholder-gray-500 mb-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="w-full py-4 bg-blue-500 text-white font-bold rounded-lg text-lg hover:bg-blue-600 transition duration-300"
            onClick={handleContinue}
          >
            Next
          </button>
          <button className="w-full py-4 mt-3 border border-white text-white font-bold rounded-lg text-lg hover:bg-gray-800 transition duration-300">
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrantAccess;
