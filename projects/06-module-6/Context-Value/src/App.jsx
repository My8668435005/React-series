import React, { useState } from 'react';
import ThemeContext from './contexts/ThemeContext';
import ThemedComponent from './ThemedComponent'; // We'll create this next
import AnotherThemedComponent from './AnotherThemedComponent'; // Another component to show context sharing
import './App.css'; // For basic global styles

function App() {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // The value provided to the context
  const contextValue = {
    theme: null,
    toggleTheme: toggleTheme
  };

  return (
    // Provide the theme context to the entire application
    <ThemeContext.Provider value={contextValue}>
      <div className={`app-container ${theme}`}>
        <h1>Global Theme Example</h1>
        <button onClick={toggleTheme} className='theme-toggle-button'>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <ThemedComponent />
        <AnotherThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;