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
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 border rounded">
        <h3>Enter your details to get OTP</h3>
        <input
          type="text"
          placeholder="@username" // Placeholder with '@' symbol
          className="p-2 border rounded mb-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded"
          onClick={handleContinue}
        >
          Get OTP
        </button>
      </div>
    </div>
  );
};

export default GrantAccess;
