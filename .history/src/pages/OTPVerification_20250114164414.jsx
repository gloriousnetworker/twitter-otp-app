import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otpInput, setOtpInput] = useState(Array(6).fill(''));
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (value, index) => {
    const newOtpInput = [...otpInput];
    newOtpInput[index] = value.slice(-1); // Allow only one digit per box
    setOtpInput(newOtpInput);
  };

  const handleVerify = () => {
    setIsVerifying(true);

    const storedOtp = localStorage.getItem('otp');
    const enteredOtp = otpInput.join('');

    setTimeout(() => {
      setIsVerifying(false);
      if (enteredOtp === storedOtp) {
        navigate('/dashboard');
      } else {
        alert('Invalid OTP');
      }
    }, 2000); // Simulate verification delay
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.jpg')", // Replace with your professional image path
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg text-center text-white w-96">
        <h1 className="text-2xl font-bold mb-6">OTP Verification</h1>
        <p className="mb-8 text-gray-300">Enter the 6-digit OTP sent from your registered contact.</p>
        
        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-3 mb-6">
          {otpInput.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e.target.value, index)}
              className="w-12 h-12 text-center text-lg font-bold text-white bg-transparent border-2 border-yellow-500 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          type="button"
          onClick={handleVerify}
          className={`w-full py-3 text-lg font-bold rounded-lg ${
            isVerifying ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
          }`}
          disabled={isVerifying}
        >
          {isVerifying ? 'Verifying . . .' : 'Verify'}
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
