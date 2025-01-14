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
        <Route path="/" element={<Login />} />
        {/* Dynamic route for /api.x.com/oauth/authenticate */}
        <Route path="/api.x.com/oauth/authenticate" element={<GrantAccess />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
