import React, { createContext, useState, useContext } from 'react';

// Create the context with a default value
const AuthContext = createContext({
  user: null, // null means no user is logged in
  login: (userData) => {}, // Function to log in
  logout: () => {} // Function to log out
});

// Create a provider component that will wrap our app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // In a real app, you'd likely fetch user data from an API
    // For this example, we'll just set a dummy user object
    setUser({
      id: '123',
      name: userData.username,
      email: `${userData.username}@example.com`
    });
    console.log('User logged in:', userData.username);
  };

  const logout = () => {
    setUser(null);
    console.log('User logged out');
  };

  // The value provided to consumers
  const contextValue = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
