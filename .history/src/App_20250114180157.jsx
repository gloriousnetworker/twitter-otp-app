// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import GrantAccess from './pages/GrantAccess';
import OTPVerification from './pages/OTPVerification';
import Dashboard from './pages/Dashboard';
import { AuthProvider, useAuth } from './AuthContext'; // Import the AuthContext

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    // If the user is not authenticated, redirect them to the login page
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? element : null; // Return the element if authenticated, otherwise null
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Login page route */}
          <Route path="/" element={<Login />} />

          {/* Grant Access page route */}
          <Route path="/grant-access" element={<GrantAccess />} />

          {/* OTP Verification page route */}
          <Route path="/otp-verification" element={<OTPVerification />} />

          {/* Protected Dashboard route */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
