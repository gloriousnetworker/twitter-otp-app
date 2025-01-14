import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem('otp', otp);

    // Redirect to OTP page
    navigate('/otp');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        className="bg-blue-500 text-white p-3 rounded"
        onClick={handleLogin}
      >
        Log in with Twitter
      </button>
    </div>
  );
};

export default Login;
