import React from 'react';

// Create context with a default value. The value will be an object
// containing the current theme and a function to toggle it.
const ThemeContext = React.createContext({
  theme: 'light', // Default theme
  toggleTheme: () => {}
});

export default ThemeContext;
