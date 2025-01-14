import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GrantAccess = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (input) {
      // Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem('otp', otp);

      // Show OTP in popup notification
      alert(`Your Twitter OTP: ${otp}`);

      // Remove '@' symbol before storing the username for dashboard display
      const username = input.startsWith('@') ? input.slice(1) : input;

      // Store the cleaned username value
      localStorage.setItem('input', username);

      // Redirect to OTP verification page
      navigate('/otp-verification');
    } else {
      alert('Please enter a valid username, email, or phone number');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      {/* Twitter Logo (Optional, replace with your logo if needed) */}
      <div className="mb-6">
        <div className="text-5xl font-bold text-blue-500">X</div>
      </div>

      {/* Authorization Request */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">UNICRYPTO EXCHANGE</h1>
        <p className="text-sm mt-2">
          is requesting access to sign in using Twitter.
        </p>
      </div>

      {/* Input Form */}
      <div className="w-full max-w-xs">
        <input
          type="text"
          placeholder="@username"
          className="w-full p-3 bg-black border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder-gray-500 mb-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          onClick={handleContinue}
        >
          Authorize App
        </button>
      </div>
    </div>
  );
};

export default GrantAccess;
