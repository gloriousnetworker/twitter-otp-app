import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Login = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  const handleLogin = () => {
    // Show modal to simulate login with Twitter
    setShowModal(true);

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem('otp', otp);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {showModal && <Modal />}
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
