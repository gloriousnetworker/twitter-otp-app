// src/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create a Context to manage authentication state
const AuthContext = createContext();

// A custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider to wrap around the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login (you can replace this with actual logic like tokens or cookies)
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
