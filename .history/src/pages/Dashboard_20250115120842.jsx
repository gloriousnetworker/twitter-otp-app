import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('input'); // Get the stored input (username/email/phone)

  const [mainBgLoaded, setMainBgLoaded] = useState(false);
  const [blurredBgLoaded, setBlurredBgLoaded] = useState(false);

  const handleLogout = () => {
    // Clear the session or stored data (localStorage)
    localStorage.removeItem('input');
    // Redirect to the login page
    navigate('/');
  };

  useEffect(() => {
    // Preload the main background image
    const mainBgImage = new Image();
    mainBgImage.src = '/Dashboard.jpg';
    mainBgImage.onload = () => setMainBgLoaded(true);

    // Preload the blurred background image
    const blurredBgImage = new Image();
    blurredBgImage.src = '/crypto-background.jpg';
    blurredBgImage.onload = () => setBlurredBgLoaded(true);
  }, []);

  return (
    <div
      className={`relative h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
        mainBgLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: mainBgLoaded ? "url('/Dashboard.jpg')" : 'none',
      }}
    >
      {/* Blurred background */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat filter blur-10 transition-opacity duration-500 ${
          blurredBgLoaded ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          backgroundImage: blurredBgLoaded ? "url('/crypto-background.jpg')" : 'none',
        }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between h-full z-10 px-6 md:px-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-white space-y-6 mb-10 md:mb-0">
          {/* Welcome Text */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500">
            Welcome to UNICRYPTO, {username}!
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-gray-300 mb-4">
            Your journey into the world of digital currencies begins here.
          </p>

          {/* Subheading Texts */}
          <h2 className="text-lg md:text-xl text-gray-400 mb-3">
            Stay updated with real-time crypto prices
          </h2>
          <h2 className="text-lg md:text-xl text-gray-400 mb-3">
            Track your portfolio effortlessly
          </h2>
          <h2 className="text-lg md:text-xl text-gray-400 mb-3">
            Get insights into the latest market trends
          </h2>
          <h2 className="text-lg md:text-xl text-gray-400 mb-6">
            Maximize your investments with expert advice
          </h2>

          {/* Call-to-Action Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-lg font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Explore Dashboard
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full md:w-[400px] h-[400px] md:h-[500px] bg-black bg-opacity-70 rounded-2xl shadow-xl p-6">
            {/* Portfolio Overview */}
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Your Portfolio Overview
            </h3>
            <p className="text-gray-300 mb-6">
              See how your crypto assets are performing in real-time.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-lg font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="absolute top-5 right-5 z-20">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
