import React from 'react';

const Dashboard = () => {
  const username = localStorage.getItem('input'); // Get the stored input (username/email/phone)

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Welcome, {username}!</h1>
    </div>
  );
};

export default Dashboard;
