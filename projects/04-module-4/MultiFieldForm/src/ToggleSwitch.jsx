import React, { useState } from 'react';
import './ToggleSwitch.css'; // We'll create this CSS file next

function ToggleSwitch() {
  // State to manage whether the switch is ON or OFF
  const [isOn, setIsOn] = useState(false);

  // Handler to toggle the state
  const handleToggle = () => {
    // Use functional update for safety, though direct update is often fine for simple booleans
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <div className='toggle-container'>
      <h3>Toggle Switch Example</h3>
      <div className='switch-wrapper'>
        <div
          className={`switch-base ${isOn ? 'on' : 'off'}`}
          onClick={handleToggle}
          role='button'
          aria-checked={isOn}
          tabIndex={0}
          onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(); }}
        >
          <div className='switch-handle'></div>
        </div>
        <p className='switch-status'>
          Status: {isOn ? 'ON' : 'OFF'}
        </p>
      </div>
    </div>
  );
}

export default ToggleSwitch;