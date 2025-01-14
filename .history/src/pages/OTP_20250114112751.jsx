import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const OTP = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const otp = localStorage.getItem('otp');
    
    // Simulate browser notification
    alert(`Your OTP: ${otp}`);

    // Save username to localStorage
    localStorage.setItem('username', username);

    // Redirect to OTP verification page
    navigate('/verify');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Modal />
      <div className="modal p-6 border rounded">
        <h3>Sign in with Twitter to obtain your verification code</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Email / Username / Phone"
            className="input p-2 border rounded"
            value={email || username || phone}
            onChange={(e) => {
              setEmail(e.target.value);
              setUsername(e.target.value);
              setPhone(e.target.value);
            }}
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded mt-2">
            Click to Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTP;
