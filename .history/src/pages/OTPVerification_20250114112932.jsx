import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otpInput, setOtpInput] = useState('');
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const navigate = useNavigate();

  const handleVerify = () => {
    const storedOtp = localStorage.getItem('otp');
    if (otpInput === storedOtp) {
      // Redirect to Dashboard with username
      navigate(`/dashboard/${username}`);
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="otp-form p-6 border rounded">
        <h3>Enter the OTP sent to your browser</h3>
        <input 
          type="text" 
          className="input p-2 border rounded" 
          value={otpInput}
          onChange={(e) => setOtpInput(e.target.value)}
        />
        <button onClick={handleVerify} className="bg-blue-500 text-white p-2 rounded mt-2">
          Verify
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
