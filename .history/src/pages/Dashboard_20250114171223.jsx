import React from 'react';

const Dashboard = () => {
  const username = localStorage.getItem('input'); // Get the stored input (username/email/phone)

  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Dashboard.jpg')" }}>
      {/* Blurred background */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat filter blur-10" style={{ backgroundImage: "url('/crypto-background.jpg')" }}></div>

      {/* Content */}
      <div className="relative flex justify-center items-center h-full z-10">
        <div className="bg-black bg-opacity-80 p-12 rounded-2xl shadow-xl text-center text-white w-[500px] max-w-full">
          {/* Welcome Text */}
          <h1 className="text-5xl font-extrabold text-yellow-500 mb-4">Welcome to UNICRYPTO, {username}!</h1>
          <p className="text-2xl font-semibold text-gray-300 mb-6">Your journey into the world of digital currencies begins here.</p>

          {/* Subheading Texts */}
          <h2 className="text-xl text-gray-400 mb-3">Stay updated with real-time crypto prices</h2>
          <h2 className="text-xl text-gray-400 mb-3">Track your portfolio effortlessly</h2>
          <h2 className="text-xl text-gray-400 mb-3">Get insights into the latest market trends</h2>
          <h2 className="text-xl text-gray-400 mb-6">Maximize your investments with expert advice</h2>

          {/* Call-to-Action Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-lg font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Explore Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
