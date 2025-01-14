import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to the Grant Access page
    navigate('/grant-access');
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
