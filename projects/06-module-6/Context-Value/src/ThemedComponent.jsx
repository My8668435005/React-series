import React, { useContext } from 'react';
import ThemeContext from './contexts/ThemeContext';

function ThemedComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`themed-box ${theme}`}>
      <h2>Themed Box</h2>
      <p>This box changes its background and text color based on the theme.</p>
    </div>
  );
}

export default ThemedComponent;