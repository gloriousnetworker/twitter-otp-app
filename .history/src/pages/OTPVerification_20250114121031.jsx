import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otpInput, setOtpInput] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    const storedOtp = localStorage.getItem('otp');
    if (otpInput === storedOtp) {
      // Redirect to Dashboard on successful verification
      navigate('/dashboard');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 border rounded">
        <h3>Enter the OTP you received</h3>
        <input
          type="text"
          placeholder="Enter OTP"
          className="p-2 border rounded mb-4"
          value={otpInput}
          onChange={(e) => setOtpInput(e.target.value)}
        />
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleVerify}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
