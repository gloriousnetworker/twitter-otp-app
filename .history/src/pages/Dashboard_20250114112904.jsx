import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { username } = useParams();

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Welcome, {username}!</h1>
    </div>
  );
};

export default Dashboard;
