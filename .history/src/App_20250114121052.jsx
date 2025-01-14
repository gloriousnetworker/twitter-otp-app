import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import GrantAccess from './pages/GrantAccess';
import OTPVerification from './pages/OTPVerification';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login page route */}
        <Route path="/" element={<Login />} />
        
        {/* Grant Access page route */}
        <Route path="/grant-access" element={<GrantAccess />} />
        
        {/* OTP Verification page route */}
        <Route path="/otp-verification" element={<OTPVerification />} />
        
        {/* Dashboard page route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
