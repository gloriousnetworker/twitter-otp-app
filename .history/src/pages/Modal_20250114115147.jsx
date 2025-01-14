import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (input) {
      // Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem('otp', otp);

      // Show OTP in popup notification
      alert(`Your OTP: ${otp}`);

      // Store input in localStorage (can be email, username, or phone)
      localStorage.setItem('input', input);

      // Redirect to OTP screen
      navigate('/otp');
    } else {
      alert('Please enter a valid email, username, or phone number');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded">
        <h3>Sign in with Twitter to obtain your verification code</h3>
        <form>
          <input
            type="text"
            placeholder="Email / Username / Phone"
            className="input p-2 border rounded mb-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="button"
            className="bg-green-500 text-white p-2 rounded mt-2"
            onClick={handleContinue}
          >
            Click to Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
