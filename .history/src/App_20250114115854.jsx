import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Ensure these imports are correct
import Modal from './Modal'; 
import OTPVerification from './OTP';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login page route */}
        <Route path="/" element={<Login />} />
        
        {/* OTP page route */}
        <Route path="/otp" element={<OTPVerification />} />
        
        {/* Dashboard page route */}
        <Route path="/dashboard/:username" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
