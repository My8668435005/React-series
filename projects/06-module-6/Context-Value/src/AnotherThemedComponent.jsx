import React, { useContext } from 'react';
import ThemeContext from './contexts/ThemeContext';

function AnotherThemedComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`themed-card ${theme}`}>
      <h3>Another Themed Element</h3>
      <p>This card also adapts to the current theme.</p>
    </div>
  );
}

export default AnotherThemedComponent;