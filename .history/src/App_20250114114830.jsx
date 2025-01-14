import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import OTP from './pages/OTP';
import OTPVerification from './pages/OTPVerification';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/verify" element={<OTPVerification />} />
        <Route path="/dashboard/:username" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
