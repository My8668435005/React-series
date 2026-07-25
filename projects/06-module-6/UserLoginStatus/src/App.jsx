// src/App.js (modified)
import React, { useState } from 'react';
import ThemeContext from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // Import AuthProvider and useAuth

// Components that will consume context
import ThemedComponent from './ThemedComponent';
import AuthStatusDisplay from './AuthStatusDisplay'; // We'll create this next
import LoginButton from './LoginButton'; // We'll create this next
import './App.css';

function App() {
  // Theme state management (from previous example)
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const themeContextValue = {
    theme,
    toggleTheme
  };

  return (
    // Wrap the entire app with AuthProvider first, then ThemeProvider
    <AuthProvider>
      <ThemeContext.Provider value={themeContextValue}>
        <div className={`app-container ${theme}`}>
          <h1>Context API Demo</h1>
          <button onClick={toggleTheme} className='theme-toggle-button'>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          <hr />
          <AuthStatusDisplay />
          <LoginButton />
          <hr />
          <ThemedComponent />
        </div>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export default App;