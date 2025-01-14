import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otpInput, setOtpInput] = useState(Array(6).fill(''));
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the OTP from localStorage and autofill
    const storedOtp = localStorage.getItem('otp');
    if (storedOtp) {
      setOtpInput(storedOtp.split('')); // Autofill OTP into input fields
    }
  }, []);

  const handleInputChange = (value, index) => {
    const newOtpInput = [...otpInput];
    newOtpInput[index] = value.slice(-1); // Allow only one digit per box
    setOtpInput(newOtpInput);

    // Automatically focus the next input box
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerify = () => {
    setIsVerifying(true);
    const storedOtp = localStorage.getItem('otp');
    const enteredOtp = otpInput.join('');

    setTimeout(() => {
      setIsVerifying(false);
      if (enteredOtp === storedOtp) {
        navigate('/dashboard'); // Redirect to the dashboard on successful verification
      } else {
        alert('Invalid OTP');
      }
    }, 2000); // Simulate verification delay
  };

  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* Blurred background */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat filter blur-10" style={{ backgroundImage: "url('/background.jpg')" }}></div>

      {/* Content */}
      <div className="relative flex justify-center items-center h-full z-10">
        <div className="bg-black bg-opacity-80 p-10 rounded-lg shadow-lg text-center text-white w-[400px]">
          <h1 className="text-3xl font-bold mb-6">OTP Verification</h1>
          <p className="mb-8 text-gray-300">Enter the 6-digit OTP sent to your twitter account.</p>

          {/* OTP Input Boxes */}
          <div className="flex justify-center gap-4 mb-8">
            {otpInput.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(e.target.value, index)}
                className="w-16 h-16 text-center text-xl font-bold text-white bg-transparent border-4 border-yellow-500 rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-400"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            type="button"
            onClick={handleVerify}
            className={`w-full py-3 text-lg font-bold rounded-lg ${isVerifying ? 'bg-gray-500 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'}`}
            disabled={isVerifying}
          >
            {isVerifying ? 'Verifying . . .' : 'Verify'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
