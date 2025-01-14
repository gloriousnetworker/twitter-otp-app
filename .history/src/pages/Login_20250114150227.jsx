import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to the Grant Access page
    navigate('/grant-access');
  };

  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
      <div className="relative z-10 p-8 w-full max-w-md">
        {/* Page Title */}
        <h1 className="text-white text-4xl font-bold text-center mb-8">UNICRYPTO EXCHANGE</h1>
        
        {/* Login Form */}
        <form className="flex flex-col gap-4 bg-transparent">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-blue-500 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-blue-500 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="px-3 text-white text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>

        {/* Twitter Login Button */}
        <button
          className="w-full bg-blue-400 text-white p-3 rounded flex items-center justify-center hover:bg-blue-500"
          onClick={handleLogin}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557a9.885 9.885 0 01-2.828.775 4.932 4.932 0 002.165-2.723c-.937.555-1.977.959-3.084 1.184a4.916 4.916 0 00-8.373 4.482 13.94 13.94 0 01-10.11-5.13 4.916 4.916 0 001.524 6.574 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.932 4.932 0 01-2.224.084 4.937 4.937 0 004.6 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
          </svg>
          Sign in with Twitter
        </button>
      </div>
    </div>
  );
};

export default Login;
